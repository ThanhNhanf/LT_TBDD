async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn(`Attempt ${attempt} failed:`, err);
      if (attempt === retries) throw err;
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then(data => console.log("Fetched:", data))
  .catch(err => console.error("Failed after retries:", err));