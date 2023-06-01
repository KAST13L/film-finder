export async function getFilmsBySearch(
  search: string
): Promise<{ id: string; name: string }> {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
  return res.json();
}
