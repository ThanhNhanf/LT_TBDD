interface Movable {
  move(): void;
}

class Car3 implements Movable {
  move(): void {
    console.log("Car moves forward");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot walks");
  }
}

new Car3().move();
new Robot().move();