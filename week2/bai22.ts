async function fetchMultipleTodos() {
  const ids = [1, 2, 3];
  for (const id of ids) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    console.log(`Todo ${id}:`, data);
  }
}

fetchMultipleTodos();