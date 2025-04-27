<script lang="ts">
  import Blog from './blog/Blog.svelte';
  import { onMount } from 'svelte';

  let route = '';
  let blogname = '';

  function parseRoute() {
    const match = location.pathname.match(/^\/blog\/(.+)$/);
    if (match) {
      route = 'blog';
      blogname = match[1];
    } else {
      route = 'home';
      blogname = '';
    }
  }

  onMount(() => {
    parseRoute();
    window.addEventListener('popstate', parseRoute);
    return () => window.removeEventListener('popstate', parseRoute);
  });

  function navigate(path: string) {
    history.pushState({}, '', path);
    parseRoute();
  }
</script>

<main>
  {#if route === 'blog'}
    <Blog {blogname} />
  {:else}
    <h1>Welcome to your Devlog!</h1>
    <p>This is your new Svelte app. Start building your devlog, blog, and games here.</p>
    <button on:click={() => navigate('/blog/todo')}>Go to blog/todo</button>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    font-family: system-ui, sans-serif;
  }
  button {
    margin-top: 2rem;
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    border: none;
    background: #ff3e00;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background: #ff6f3c;
  }
</style>
