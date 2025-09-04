class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} is managing`);
  }
}

class Developer extends Employee {
  code(): void {
    console.log(`${this.name} is coding`);
  }
}

new Manager("Alice").manage();
new Developer("Bob").code();