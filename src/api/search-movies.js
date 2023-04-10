export default async function searchMovies(description, page) {
  try {
    const URL = `${
      import.meta.env.VITE_BASE_URL
    }movies/${description}?page=${page}`;
    const response = await fetch(URL, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  } catch (error) {
    throw Error("Error");
  }
}
