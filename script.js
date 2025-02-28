
const modal = document.querySelector("#modal")
const library = document.querySelector(".library-display")
const addButton = document.querySelector(".add-book")
const closeAddBook = document.querySelector(".close-add-book")
const cancelAddBook = document.querySelector(".cancel-add-book")


function Book(title,author,pages) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
}

function addBookToLibrary(title,author,pages){
    let book = new Book(title,author,pages)
    myLibrary.push(book)
}

const myLibrary = [];

addButton.addEventListener("click", ()=>{
    modal.showModal()
})

closeAddBook.addEventListener("click", (event)=>{

    event.preventDefault()
    const bookTitle = document.querySelector("#book-title")
    const bookAuthor = document.querySelector("#book-author")
    const bookPages = document.querySelector("#book-pages")

    
    if(bookTitle.value!="" && bookAuthor.value!="" && bookPages.value!=""){
        addBookToLibrary(bookTitle.value,bookAuthor.value,bookPages.value)
        let newCard = document.createElement("article")
        newCard.className = "book-card"
        newCard.innerHTML= `<div class="card-content title">${bookTitle.value}</div>
            <div class="card-content author ">${bookAuthor.value}</div>
            <div class="card-content pages">${bookPages.value}</div>`
        library.appendChild(newCard)
        modal.close()
    }

    
})

cancelAddBook.addEventListener("click", ()=>{
    modal.close()
})






