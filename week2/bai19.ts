interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000)
  );
}

fetchUser(1).then(user => console.log(user));interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000)
  );
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  const results: User[] = [];
  for (const id of ids) {
    const user = await fetchUser(id);
    results.push(user);
  }
  return results;
}

fetchUsers([1, 2, 3]).then(users => console.log(users));