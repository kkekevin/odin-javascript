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
    const name = document.createElement('h3');
    const author = document.createElement('h5');
    const pages = document.createElement('p');
    const read = document.createElement('label');
    const input = document.createElement('input');
    const button = document.createElement('button');
    button.classList.add('cancel-button');
    input.type = 'checkbox';

    name.textContent = `${newBook.name}`;
    author.textContent = `${newBook.author}`;
    pages.textContent = `${newBook.pages}`;
    if(newBook.read) {
        input.checked = true
    } else {
        input.checked = false;
    }
    read.appendChild(input);
    cards.appendChild(name);
    cards.appendChild(author);
    cards.appendChild(pages);
    cards.appendChild(read);
    cards.appendChild(button);
}

function showBooks() {
    myLibrary.forEach(element => console.log(element));
}