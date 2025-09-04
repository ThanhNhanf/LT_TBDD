class Car {
  constructor(public brand: string, public year: number) {}
  display(): void {
    console.log(`Brand: ${this.brand}, Year: ${this.year}`);
  }
}
const c = new Car("Honda", 2022);
c.display();
