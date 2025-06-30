<script>
  import { onMount } from 'svelte';
  let FeedbackForm = null;

  onMount(async () => {
    const module = await import('./feedbackForm.svelte');
    FeedbackForm = module.default;
  });
</script>

<h1>Dashboard</h1>
{#if FeedbackForm}
  <svelte:component this={FeedbackForm} />
{:else}
  <p>Loading form...</p>
{/if}
<style>
  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  p {
    font-size: 1.2em;
    color: #666;
  }
</style>