<script>
  export let data;
  import { scale } from 'svelte/transition';
</script>

{#if data.article}
  <div class="detail" in:scale>
    <h1>{data.article.title}</h1>
    <img src={data.article.urlToImage} alt={data.article.title} />
    <p>{data.article.description}</p>
    <a href={data.article.url} target="_blank">Read more</a>
  </div>
{:else}
  <p>Article not found</p>
{/if}
