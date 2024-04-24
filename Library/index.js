const showDialog = document.getElementById('showDialog');
const addDialog = document.getElementById('addBook');
const closeDialog = document.querySelector('.closeDialog');
const cards = document.querySelector('.cards');
const formBook = document.getElementById('formBook');
const myLibrary = [];

class Book {
    constructor(
        name = "Unknown",
        author = "Unknown Author",
        pages = 0,
        read = false
    ) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

showDialog.addEventListener('click', () => addDialog.showModal());
closeDialog.addEventListener('click', () => {
    addDialog.close();
    //resetInputValues();
});

function addBookToLibrary() {
    const author = document.getElementById('book-author').value;
    const name = document.getElementById('book-title').value;
    const pages = document.getElementById('book-pages').value;
    const readInput = document.getElementById('book-read');
    const read = readInput.checked ? true : false;

    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    //event.preventDefault();
    addDialog.close();
    addCard(newBook);
}

function addCard(newBook) {
    const div = document.createElement('div');
    div.textContent = `${newBook}`;
    cards.appendChild(div);
}

function showBooks() {
    myLibrary.forEach(element => console.log(element));
}