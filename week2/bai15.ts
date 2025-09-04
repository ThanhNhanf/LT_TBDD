async function func1() {
  return new Promise(resolve => setTimeout(() => resolve("First"), 1000));
}
async function func2() {
  return new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
}
async function func3() {
  return new Promise(resolve => setTimeout(() => resolve("Third"), 1000));
}

async function runSequential() {
  const r1 = await func1();
  console.log(r1);
  const r2 = await func2();
  console.log(r2);
  const r3 = await func3();
  console.log(r3);
}

runSequential();