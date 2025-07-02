export async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    return null;
  }
}