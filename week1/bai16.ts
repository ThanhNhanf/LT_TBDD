class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.value);