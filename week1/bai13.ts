abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

console.log(new Square(4).area());
console.log(new Circle(3).area());