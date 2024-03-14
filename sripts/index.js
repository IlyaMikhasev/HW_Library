import book1 from '../JSONs/book1.json' assert{type: 'json'}
import book2 from '../JSONs//book2.json' assert{type: 'json'}
import book3 from '../JSONs/book3.json' assert{type: 'json'}

const bookArr = document.querySelector('.book-array');
const bookInfo = document.querySelector('.book-info');
const books = [book1,book2,book3];
books.sort((a,b)=> a.yearPublishing > b.yearPublishing ? 1 : -1)
console.log(books);
books.forEach(element => {
    createBook(element);
});

search.oninput = searchBook;
function searchBook(){    
    let init = search.value;
    if(!init) return;
    for(let child of bookArr.children) {
        let flag = child.innerText.indexOf(search.value);
        if(flag != -1){
            child.style.backgroundColor = 'rgb(0, 0, 0, 0.692)';}
        else
            child.style.backgroundColor = 'rgb(159, 101, 14)';
}};

function createBook(book){
    let newBook = document.createElement('div');
    newBook.className = 'book-blok';
    newBook.innerText = `${book.title}`;
    newBook.addEventListener('click',()=>{
        bookInfo.innerText = `${book.title}\t(${book.yearPublishing})\n\n${book.shortDescription}`
    })
    bookArr.appendChild(newBook);
}