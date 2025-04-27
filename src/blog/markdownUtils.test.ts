import { renderMarkdown } from './markdownUtils';

describe('renderMarkdown', () => {
  it('renders headings', () => {
    expect(renderMarkdown('# Title')).toContain('<h1>Title</h1>');
  });
  it('throws on non-string', () => {
    expect(() => renderMarkdown(null as any)).toThrow('Input must be a string');
  });
});
