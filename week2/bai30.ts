async function fetchData(id: number) {
  if (id === 3) throw new Error("Simulated failure");
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
}

async function runAllSettled() {
  const promises = [1, 2, 3, 4].map(fetchData);
  const results = await Promise.allSettled(promises);
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Todo ${index + 1} success:`, result.value);
    } else {
      console.error(`Todo ${index + 1} failed:`, result.reason);
    }
  });
}

runAllSettled();