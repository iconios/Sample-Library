class Book {
    protected title: string;
    protected author: string;
    protected noOfPages: number;
    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.noOfPages = pages;

        function getBookTitle() {
            return title;
        };

        function getBookAuthor() {
            return author;
        };

        function getBookNumberOfPages() {
            return pages;
        };
    }
}

const book1 = new Book('Physics for Juniors', 'P.N Okeke', 298);
const book2 = new Book('Chemistry for Seniors', 'Ababio', 386);
const book3 = new Book('Integrated Science', 'Abimbola Ikotun', 321);


const myLibrary = [];

function addBookToLibrary(author: string, title: string, pages: number) {
    return myLibrary.push(new Book(title, author, pages));
}

function showBooks() {
    
}