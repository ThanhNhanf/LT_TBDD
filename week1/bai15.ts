class Library {
  books: Book[] = [];
  users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
}

const lib = new Library();
lib.addBook(new Book("TS Handbook", "Microsoft", 2021));
console.log(lib.books);