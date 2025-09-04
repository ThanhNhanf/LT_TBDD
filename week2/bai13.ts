function errorPromise(): Promise<string> {
  return new Promise((_, reject) => setTimeout(() => reject("Something went wrong"), 1000));
}

async function handleError() {
  try {
    const result = await errorPromise();
    console.log(result);
  } catch (err) {
    console.error("Caught error:", err);
  }
}

handleError();