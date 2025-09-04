const randomPromise = new Promise<number>((resolve) => {
  resolve(Math.random());
});

randomPromise
  .then((num) => console.log("Random number:", num))
  .catch((err) => console.error("Error:", err));