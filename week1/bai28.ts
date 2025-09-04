class Animal4 {
  protected makeSound(): void {
    console.log("Generic animal sound");
  }
}

class Dog4 extends Animal4 {
  protected makeSound(): void {
    console.log("Dog barking");
  }
}

new Dog4();