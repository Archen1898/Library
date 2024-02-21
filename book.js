const myLibrary = [];
let library = document.querySelector('#library');
let buttonAdd = document.querySelector("#add");

function Book(title, author, year, pages){
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages
    this.readStatus = `Not read yet`;
    this.info = () => {`${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`;}
}

book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178);
book3 = new Book('Harry Potter', 'J.K. Rowling', 400);
book4 = new Book('The Alchemist', 'Paulo Coelho', 320);

let bookArray = [book1, book2, book3, book4];



function createLibraryCard(thisBook){
    const BookName = document.createElement('div');
    const BookAuthor = document.createElement('div');
    const BookYear = document.createElement('div');
    const BookPages = document.createElement('div');
    const BookReadStatus = document.createElement('div');
    const BookCard = document.createElement('div');

    const deleteButton = document.createElement('button');
    const readButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    readButton.textContent = 'Read';

    BookCard.classList.add('bookCard');

    BookName.textContent = `Title: ${thisBook.title}`;
    BookAuthor.textContent = `Author: ${thisBook.author}`;
    BookYear.textContent = `Year: ${thisBook.year}`;
    BookPages.textContent = `Pages: ${thisBook.pages}`;
    BookReadStatus.textContent = `Read Status: ${thisBook.readStatus}`;

    readButton.addEventListener("click", function(){
        if(thisBook.readStatus === "Not read yet"){
            thisBook.readStatus = "Read";
            BookReadStatus.textContent = `Read Status: ${thisBook.readStatus}`;
            readButton.textContent = "Unread";
        }
        else{
            thisBook.readStatus = "Not read yet";
            BookReadStatus.textContent = `Read Status: ${thisBook.readStatus}`;
            readButton.textContent = "Read";
        }
    })
    deleteButton.addEventListener("click", function(){
        library.removeChild(BookCard);
    })

    BookCard.appendChild(BookName);
    BookCard.appendChild(BookAuthor);
    BookCard.appendChild(BookYear);
    BookCard.appendChild(BookPages);
    BookCard.appendChild(BookReadStatus);
    BookCard.appendChild(readButton);
    BookCard.appendChild(deleteButton);

    
    library.appendChild(BookCard);
}

for(let i = 0; i < bookArray.length; i++){
    createLibraryCard(bookArray[i]);
}

buttonAdd.addEventListener("click", function (){
    const bookName = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookYear = document.querySelector("#bookYear");
    const bookPages = document.querySelector("#bookPages");

    if(bookName.value === "" || bookAuthor.value === "" || bookYear.value === "" || bookPages.value === ""){
        alert("Please fill in all the fields");
        return;
    }
    const book1 = new Book(bookName.value, bookAuthor.value, bookYear.value, bookPages.value);
    myLibrary.push(book1);
    createLibraryCard(book1);

    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookYear.value = "";

})