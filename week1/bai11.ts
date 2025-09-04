class AnimalBase {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog2 extends AnimalBase {
  makeSound(): void {
    console.log("Bark!");
  }
}

class Cat2 extends AnimalBase {
  makeSound(): void {
    console.log("Meow!");
  }
}

const a: AnimalBase[] = [new Dog2(), new Cat2()];
a.forEach(animal => animal.makeSound());