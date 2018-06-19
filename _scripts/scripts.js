function Book (title, author, bookImg){
    this.title = title;
    this.author = author;
    this.bookImg = bookImg;
}

var books = [new Book("The Ceo Who Lost His Head", "Aditya Sinha","http://www.ishankhosla.com/sites/default/files/styles/masonry200width/public/book-cover-design-india-18-06-2017.jpg?itok=krCrtN14"), new Book("The Shadow Of Silence","Alfred Hitchock","http://www.ishankhosla.com/sites/default/files/styles/masonry200width/public/book-design-india-30.jpg?itok=-XLS6qN2"), new Book("Meera Nanda", "The Good Market", "http://www.ishankhosla.com/sites/default/files/styles/masonry200width/public/book-design-india_thumbnail-39.jpg?itok=j3AgnKd_"), new Book("The Musk Syndrome", "Ruzbeh N. Bharucha", "http://www.ishankhosla.com/sites/default/files/styles/masonry200width/public/book-cover-design-29-03-17-TH.jpg?itok=59QEaLUj")];




var template = document.querySelector(".book");
//var divtest = document.createElement(".book");
//divtest.innerHTML = "new div";
//bookStructure.appendChild(divtest);
for (var i=0; i<books.length; i++){
    const CAROUSEL = document.querySelector(".carousel");
    
    //select book
    var selectedBook = books[i];
    var bookStructure = document.querySelector('.book').cloneNode(true);
    
    //set title and author
    var bookHint = selectedBook.title + " - " + selectedBook.author;
    console.log(bookHint)
    var shortBookHint = bookHint.substring(0, 18)+ " ...";
    
    
    bookStructure.querySelector(".title-author").innerHTML = shortBookHint;
    
    //set book image
    var bookImg = bookStructure.querySelector("img");
    bookImg.setAttribute("src", selectedBook.bookImg);
    bookImg.setAttribute("title", bookHint);
    bookImg.setAttribute("alt", bookHint);

    CAROUSEL.appendChild(bookStructure);
};
template.remove();


