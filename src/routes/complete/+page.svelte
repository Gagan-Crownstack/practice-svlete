<script>
  export let data;
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import ArticleSkeleton from '$lib/components/ArticleSkeleton.svelte';
  import { fade } from 'svelte/transition';
</script>

{#if data.articles}
  <div class="articles">
    {#each data.articles as article (article.url)}
      <ArticleCard {article} transition:fade />
    {/each}
  </div>
{:else}
  <ArticleSkeleton count={5} />
{/if}
