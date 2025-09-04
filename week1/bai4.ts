class Rectangle {
  constructor(public width: number, public height: number) {}
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const r = new Rectangle(5, 3);
console.log(`Area: ${r.area()}, Perimeter: ${r.perimeter()}`);
