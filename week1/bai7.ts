
class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const user1 = new User("Alice");
console.log(user1.name);
user1.name = "Bob";
console.log(user1.name);
