export async function load({ params }) {
  try {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    const data = await res.json();
    const article = data.articles.find(a => a.title === decodeURIComponent(params.id));

    if (!article) throw new Error('Article not found');

    return { article };
  } catch (err) {
    return {
      status: 404,
      error: new Error('Article not found')
    };
  }
}
