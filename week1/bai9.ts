interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.sound();