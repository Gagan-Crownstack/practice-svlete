<script>
  export let count = 5;
</script>

{#each Array(count) as _, i}
  <div class="skeleton" transition:fade></div>
{/each}
