class Order {
  products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  totalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

const order = new Order();
order.addProduct(new Product("Mouse", 150));
order.addProduct(new Product("Keyboard", 250));
console.log(order.totalPrice());