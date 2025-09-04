new Promise<number>((resolve) => resolve(2))
  .then((n) => n * n) // square
  .then((n) => n * 2) // double
  .then((n) => n + 5) // add 5
  .then(console.log);