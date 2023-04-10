export default async function getDetails(id) {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}movies-details/${id}`;
    const response = await fetch(URL, { method: "GET" });
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  } catch (error) {
    throw Error("Error");
  }
}
