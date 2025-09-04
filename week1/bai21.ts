class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const repo = new Repository<number>();
repo.add(10);
repo.add(20);
console.log(repo.getAll());