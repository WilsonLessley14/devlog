export class WordFrequencyGameObject {
	private words: string[];
	public round: Round = $state({
		word1: '',
		word2: '',
		freq1: null,
		freq2: null,
		selected: null,
		correct: null
	});
	constructor() {
		this.words = [
			'apple',
			'banana',
			'zebra',
			'quasar',
			'xylophone',
			'run',
			'jump',
			'the',
			'serendipity',
			'cat',
			'dog',
			'computer'
		];
		this.newRound();
	}

	private setRoundWords() {
		const w1 = this.getRandomWord();
		let w2 = this.getRandomWord();
		while (w1 === w2) w2 = this.getRandomWord();
		this.round.word1 = w1;
		this.round.word2 = w2;
	}

	private getRandomWord(): string {
		return this.words[Math.floor(Math.random() * this.words.length)];
	}

	private async fetchWordOrThrow(word: string): Promise<Response> {
		const url = `https://api.datamuse.com/words?sp=${encodeURIComponent(word)}&md=f&max=1`;
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Failed to fetch frequency for '${word}': ${res.statusText}`);
		}
		return res;
	}

	private async parseWordFrequencyResponse(res: Response, word: string): Promise<number> {
		const data = await res.json();
		if (!Array.isArray(data) || !data[0] || typeof data[0].tags !== 'object') {
			throw new Error(`No frequency data for '${word}'.`);
		}
		const freqTag = data[0].tags.find((tag: string) => tag.startsWith('f:'));
		if (!freqTag) {
			throw new Error(`No frequency tag for '${word}'.`);
		}
		const freq = parseFloat(freqTag.slice(2));
		if (isNaN(freq)) {
			throw new Error(`Invalid frequency value for '${word}'.`);
		}
		return freq;
	}

	private getWordFrequency(word: string): Promise<number> {
		return this.fetchWordOrThrow(word).then((res) => this.parseWordFrequencyResponse(res, word));
	}

	private getRoundFrequencies(): Promise<[number, number]> {
		return Promise.all([
			this.getWordFrequency(this.round.word1),
			this.getWordFrequency(this.round.word2)
		]);
	}

	private async setRoundFrequencies() {
		try {
			[this.round.freq1, this.round.freq2] = await this.getRoundFrequencies();
		} catch (e) {
			this.round.freq1 = this.round.freq2 = null;
		}
	}

	public async newRound(): Promise<void> {
		this.setRoundWords();
		await this.setRoundFrequencies();
		this.round.selected = null;
		this.round.correct = null;
	}

	public selectWord(idx: 1 | 2): void {
		if (this.round.selected !== null) return;
		this.round.selected = idx;
		if (this.round.freq1 === null || this.round.freq2 === null) {
			this.round.correct = null;
			return;
		}
		const pickedFreq = idx === 1 ? this.round.freq1 : this.round.freq2;
		const otherFreq = idx === 1 ? this.round.freq2 : this.round.freq1;
		this.round.correct = pickedFreq > otherFreq;
	}
}

type Round = {
	word1: string;
	word2: string;
	freq1: number | null;
	freq2: number | null;
	selected: 1 | 2 | null;
	correct: boolean | null;
};
