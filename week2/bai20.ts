function simulateTask(time: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve("Task done"), time));
}

async function runTask() {
  const result = await simulateTask(2000);
  console.log(result);
}

runTask();interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject("Timeout error"), 2000);
    setTimeout(() => {
      clearTimeout(timer);
      resolve({ id, name: `User ${id}` });
    }, 1500); // Thay đổi số này để test timeout
  });
}

fetchUser(1)
  .then(user => console.log("Fetched user:", user))
  .catch(err => console.error("Error:", err));