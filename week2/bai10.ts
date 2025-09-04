
new Promise<string>((resolve) => {
  setTimeout(() => resolve("Completed!"), 1000);
})
  .then(console.log)
  .finally(() => console.log("Done"));
