export default async function getMovies(page = 1) {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}movies?page=${page}`;
    const response = await fetch(URL, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  } catch (error) {
    throw Error("Error");
  }
}
