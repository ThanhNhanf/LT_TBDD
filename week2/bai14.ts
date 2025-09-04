function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function tripleNumber(n: number) {
  await delay(1000);
  return n * 3;
}

tripleNumber(5).then(result => console.log("Result:", result));