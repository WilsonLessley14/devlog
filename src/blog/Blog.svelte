<script lang="ts">
  import { onMount } from 'svelte';
  import { renderMarkdown } from './markdownUtils';

  export let blogname: string;
  let content = '';
  let error = '';

  /**
   * Reference to the markdown container div.
   */
  let el: HTMLElement | null = null;

  /**
   * Loads the markdown file and renders it as HTML.
   * Throws an error if the file cannot be loaded or rendered.
   */
  async function loadBlog() {
    try {
      const res = await fetch(`/${blogname}.md`);
      if (!res.ok) throw new Error(`Could not load blog: ${blogname}`);
      const md = await res.text();
      content = renderMarkdown(md);
    } catch (e) {
      if (typeof e === 'string') {
        error = e;
      } else if (e instanceof Error) {
        error = e.message || 'Unknown error';
      } else {
        error = 'Unknown error';
      }
    }
  }

  onMount(loadBlog);
</script>

{#if error}
  <div class="error">{error}</div>
{:else}
  <div class="markdown" bind:this={el}><!-- HTML will be injected --></div>
  {@html content}
{/if}

<style>
  .markdown {
    max-width: 700px;
    margin: 2rem auto;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .error {
    color: red;
    text-align: center;
  }
</style>
