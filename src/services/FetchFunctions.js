export async function fetchData(url, query = '') {
  console.log(`${url}${query}`);

  const response = await fetch(`${url}${query}`);
  const data = await response.json();
  return data;
}
