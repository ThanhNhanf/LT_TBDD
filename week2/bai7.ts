function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task done in ${time}ms`), time);
  });
}

Promise.race([simulateTask(1000), simulateTask(2000), simulateTask(3000)]).then(
  (winner) => console.log("First finished:", winner)
);