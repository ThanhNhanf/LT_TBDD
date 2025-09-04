class School {
  students: string[] = [];
  teachers: string[] = [];

  display(): void {
    console.log("Students:", this.students);
    console.log("Teachers:", this.teachers);
  }
}

const school = new School();
school.students.push("Alice", "Bob");
school.teachers.push("Mr. Smith");
school.display();