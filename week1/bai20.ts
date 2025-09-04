interface Vehicle {
  drive(): void;
}

class Car2 implements Vehicle {
  drive(): void {
    console.log("Car driving");
  }
}

class Bike implements Vehicle {
  drive(): void {
    console.log("Bike driving");
  }
}

new Car2().drive();
new Bike().drive();