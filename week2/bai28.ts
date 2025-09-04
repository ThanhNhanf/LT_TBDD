function makeTask(id: number): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve(`Task ${id} done`), 1000 * id)
  );
}

async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map(makeTask);
  const results = await Promise.all(tasks);
  console.log(results);
}

batchProcess();