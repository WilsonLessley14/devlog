import { load } from './+page.server';
import fs from 'fs';

describe('load', () => {
	it('returns a list of markdown files in static/blogposts', async () => {
		jest.spyOn(fs.promises, 'readdir').mockResolvedValue(['foo.md', 'bar.txt', 'baz.md']);
		const result = await load({} as any);
		expect(result).toEqual({ posts: ['foo', 'baz'] });
	});

	it('throws an error if directory cannot be read', async () => {
		jest.spyOn(fs.promises, 'readdir').mockRejectedValue(new Error('fail'));
		await expect(load({} as any)).rejects.toThrow('Failed to load blog posts: fail');
	});
});
