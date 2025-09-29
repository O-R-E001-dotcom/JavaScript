let movie = {

    title: "Megan",
    director: "Julie Megan",
    releaseYear: 2009,
    rating: 2,

    getSummary: function() {
        return `${this.title}: directed by: ${this.director} and released in the year ${this.releaseYear} has a rating of : ${this.rating}/5`;
   
    }
};
console.log(movie.getSummary());

movie.isWatched = true;
let movies = [
    movie,
    {
        title: "Being a living being",
        director: "Lara Sam",
        releaseYear: 2025,
        rating: 7.5,
        isWatched: true,

        getSummary: function() {
            return `${this.title}: directed by: ${this.director} and released in the year ${this.releaseYear} has a rating of: ${this.rating}/5`;
        }  
    },
    {
        title: "Code3",
        director: "Sam Henry",
        releaseYear: 2025,
        rating: 5.5,
        isWatched: false,

        getSummary: function() {
            return `${this.title}: directed by: ${this.director} and released in the year ${this.releaseYear} has a rating of: ${this.rating}/5`;
        }   
    },
    {
        title: "Skipped",
        director: "Angelina Smith",
        releaseYear: 2024,
        rating: 8.5,
        isWatched: true,

        getSummary: function() {
            return `${this.title}: directed by: ${this.director} and released in the year ${this.releaseYear} has a rating of: ${this.rating}/5`;
        }  
    }
];

function displayTopMovies(movies) {
    console.log("\n🎬 Top Rated Hollywood Movies (8+);");
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating >= 8) {
            console.log(movies[i].getSummary());
        }
    }
}
displayTopMovies(movies);
console.log("");
console.log("");

let cartItem = {
    name: "phone",
    price: 300,
    quantity: 3,

    
    getTotal: function() {
        let total = this.price * this.quantity;
        return total
    }
}
console.log(cartItem.getTotal())

let cart = [
    cartItem,
    {
        name: "egg",
        price: 30,
        quantity: 10,

        getTotal: function() {
        let total = this.price * this.quantity;
        return total
        }
    },
    {
        name: "milk",
        price: 900,
        quantity: 12,

        getTotal: function() {
        let total = this.price * this.quantity;
        return total
        }  
    },
    {
        name: "milo",
        price: 800,
        quantity: 12,

        getTotal: function() {
        let total = this.price * this.quantity;
        return total
        }
    }
];

function getCartTotal(cart) {
   let sum = 0
   for (let item of cart) {
    sum += item.getTotal()
   }
    return sum
}
console.log("Sum of all items:", getCartTotal(cart));
console.log("");
console.log("");

let member = {
    name: "George Banks",
    membershipInfo: ["basic", "premium"],
    borrowedBooks: ["Lasswell, Maths, Eng"],

    borrowBook(book) {
        this.borrowedBooks.push(book);
        return `A new book borrowed ${book}. All books borrowed: ${this.borrowedBooks.length}`;
    },

    getBorrowedCount() {
        // for (let i = 1; i === this.borrowedBooks; i++) {
        // }
        // console.log(this.borrowedBooks[i].length)
        return `Number of borrowed books: ${this.borrowedBooks.length}`
    },

    getMembershipInfo() {
        return `Your membership type is: ${this.membershipInfo}`
    }
};
console.log(member.borrowBook("Agric"));
console.log(member.getBorrowedCount());
console.log(member.getMembershipInfo("basic"));
console.log(member)
