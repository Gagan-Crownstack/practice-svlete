<script>
  export let article;
  import { fly } from 'svelte/transition';
</script>

<a href={`/article/${encodeURIComponent(article.title)}`} class="card" in:fly={{ y: 20 }}>
  <img src={article.urlToImage} alt={article.title} />
  <h3>{article.title}</h3>
</a>
