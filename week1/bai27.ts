class Teacher extends User {
  subject: string;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, I teach ${this.subject}`);
  }
}

const t = new Teacher("Mr. Smith", "Math");
t.introduce();