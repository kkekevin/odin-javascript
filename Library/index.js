const showDialog = document.getElementById('showDialog');
const addDialog = document.getElementById('addBook');
const closeDialog = document.querySelector('.closeDialog');
const cards = document.querySelector('.cards');
const formBook = document.getElementById('formBook');
const deleteButton = document.getElementsByClassName('cancel-button');
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
    const name = document.createElement('h2');
    const author = document.createElement('h4');
    const pages = document.createElement('p');
    const read = document.createElement('label');
    const input = document.createElement('input');
    const button = document.createElement('button');
    div.classList.add('card');
    button.classList.add('cancel-button');
    input.type = 'checkbox';

    name.textContent = `${newBook.name}`;
    author.textContent = `Author: ${newBook.author}`;
    pages.textContent = `Number of pages: ${newBook.pages}`;
    button.textContent = 'Delete Book';
    if (newBook.read) {
        input.checked = true
    } else {
        input.checked = false;
    }
    read.appendChild(input);
    div.appendChild(name);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(button);
    cards.appendChild(div);
    deleteCard();
}

function deleteCard() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function() {
            this.parentNode.remove();
            myLibrary.splice(i - 1, 1);
        });
    }
}

function showBooks() {
    myLibrary.forEach(element => console.log(element));
}