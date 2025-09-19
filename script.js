class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `📖 Reading "${this.title}" by ${this.author} (${this.pages} pages)`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.displayBooks();
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }

    clearAllBooks() {
        this.books = [];
        this.displayBooks();
    }

    displayBooks() {
        const bookList = document.getElementById("bookList");
        const bookCount = document.getElementById("bookCount");
        bookList.innerHTML = "";

        this.books.forEach((book, index) => {
            const div = document.createElement("div");
            div.classList.add("book-card");
            div.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <button class="read-btn" onclick="alert('${book.read()}')">Read</button>
                <button class="delete-btn" onclick="myLibrary.removeBook(${index})">Delete</button>
            `;
            bookList.appendChild(div);
        });

        bookCount.textContent = `Total Books: ${this.books.length}`;
    }
}
const myLibrary = new Library();
document.getElementById("addBookBtn").addEventListener("click", () => {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();

    if (title && author && pages) {
        const newBook = new Book(title, author, pages);
        myLibrary.addBook(newBook);
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
    } else {
        alert("⚠️ Please enter title, author, and pages!");
    }
});
document.getElementById("clearAllBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all books?")) {
        myLibrary.clearAllBooks();
    }
});
