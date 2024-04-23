const showDialog = document.getElementById('showDialog');
const addDialog = document.getElementById('addBook');

showDialog.addEventListener('click', () => addDialog.showModal());

const myLibrary = [];

function Book (author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary () {}