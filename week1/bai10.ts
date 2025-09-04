class Account {
  public id: number;
  private balance: number;
  readonly owner: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new Account(1, "Alice", 500);
console.log(acc.getBalance());