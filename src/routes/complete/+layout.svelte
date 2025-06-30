<script>
  import { slide } from 'svelte/transition';
</script>

<main transition:slide>
  <slot />
</main>
