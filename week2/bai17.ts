async function asyncNumber(n: number) {
  return new Promise<number>(resolve => setTimeout(() => resolve(n), 1000));
}

async function run() {
  const promises = [asyncNumber(1), asyncNumber(2), asyncNumber(3)];
  for await (const result of promises) {
    console.log("Received:", result);
  }
}

run();