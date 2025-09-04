class Car {
  constructor(public brand: string, public model: string, public year: number) {}
  showInfo(): void {
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
  }
}

const c1 = new Car("Toyota", "Camry", 2024);
c1.showInfo();
