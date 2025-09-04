
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
  new Product("Phone", 120),
  new Product("Pen", 20),
  new Product("Laptop", 1000)
];

const expensive = products.filter(p => p.price > 100);
console.log(expensive);
