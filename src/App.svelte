<script>
  let count = 0;
</script>

<main>
  <h1>Welcome to your Devlog!</h1>
  <p>This is your new Svelte app. Start building your devlog, blog, and games here.</p>
  <button on:click={() => count++}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
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
