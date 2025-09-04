async function fetchAndFilterTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: any[] = await res.json();
  const completed = todos.filter(todo => todo.completed);
  console.log("Completed todos:", completed.slice(0, 5)); // log 5 cái đầu cho gọn
}

fetchAndFilterTodos();