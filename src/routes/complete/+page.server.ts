export async function load() {
  try {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return { articles: data.articles };
  } catch (error) {
    return {
      status: 500,
      error: new Error('Failed to load articles')
    };
  }
}
