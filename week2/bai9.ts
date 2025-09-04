const numbers = [1, 2, 3, 4, 5, 6];

new Promise<number[]>((resolve) => {
  setTimeout(() => resolve(numbers), 1000);
})
  .then((nums) => nums.filter((n) => n % 2 === 0))
  .then((evens) => console.log("Even numbers:", evens));