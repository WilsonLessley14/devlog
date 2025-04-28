import { load } from './+page';
import fs from 'fs';

describe('load', () => {
	it('returns a list of markdown files in static/blogposts', async () => {
		jest.spyOn(fs.promises, 'readdir').mockResolvedValue(['foo.md', 'bar.txt', 'baz.md']);
		const result = await load();
		expect(result).toEqual({ posts: ['foo.md', 'baz.md'] });
	});

	it('throws an error if directory cannot be read', async () => {
		jest.spyOn(fs.promises, 'readdir').mockRejectedValue(new Error('fail'));
		await expect(load()).rejects.toThrow('Failed to load blog posts: fail');
	});
});
