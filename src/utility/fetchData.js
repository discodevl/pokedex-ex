export async function fetcher(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    throw new Error("Oops! Something went wrong.");
  }
}
