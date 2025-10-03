
// EXERCISE 1
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;
    }

    getSummary() {
        return `Book: "${this.title}" by ${this.author} (${this.year}) `
    }

    borrowBook() {
        this.isBorrowed = true;
        return `"${this.title}" by ${this.author} (${this.year}) is available`;
    }
}

let book1 = new Book("Eng", "Max Webberman", 1998);
let book2 = new Book("To rule", "Lotta Rex", 2005);

console.log("New books:");
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log("");
console.log("Book availability:")
console.log(book1.borrowBook());
console.log(book2.borrowBook());

// EXERCISE 2
