
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function helloAsync() {
  await delay(2000);
  return "Hello Async";
}

helloAsync().then(console.log);
