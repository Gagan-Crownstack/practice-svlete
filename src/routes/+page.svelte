<script>
    import { writable, derived } from 'svelte/store';
  
    const count = writable(0);
  
    const doubled = derived(count, $count => $count * 2);
  
    let localCount;
  
    $: localCount = $count;
  
    $: console.log('Count changed to:', localCount);
  </script>
  
  <h1>Count: {$count}</h1>
  <h2>Doubled: {$doubled}</h2>
  
  <button on:click={() => count.update(n => n + 1)}>
    Increment
  </button>
  <button on:click={() => count.update(n => n - 1)}>
    Decrement
  </button>
  