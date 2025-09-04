async function func1() {
  return new Promise(resolve => setTimeout(() => resolve("First"), 1000));
}
async function func2() {
  return new Promise(resolve => setTimeout(() => resolve("Second"), 2000));
}
async function func3() {
  return new Promise(resolve => setTimeout(() => resolve("Third"), 1500));
}

async function runParallel() {
  const results = await Promise.all([func1(), func2(), func3()]);
  console.log(results);
}

runParallel();