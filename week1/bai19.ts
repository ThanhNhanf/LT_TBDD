class Animal3 {
  makeSound(): void {
    console.log("Generic sound");
  }
}

class Dog3 extends Animal3 {
  makeSound(): void {
    console.log("Woof!");
  }
}

const animals: Animal3[] = [new Animal3(), new Dog3()];
animals.forEach(a => a.makeSound());