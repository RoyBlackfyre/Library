
const modal = document.querySelector("#modal")
const library = document.querySelector(".library-display")
const addButton = document.querySelector(".add-book")
const closeAddBook = document.querySelector(".close-add-book")
const cancelAddBook = document.querySelector(".cancel-add-book")



const myLibrary = [];

addButton.addEventListener("click", ()=>{
    modal.showModal()
})

closeAddBook.addEventListener("click", (event)=>{

    event.preventDefault()
    const bookTitle = document.querySelector("#book-title")
    const bookAuthor = document.querySelector("#book-author")
    const bookPages = document.querySelector("#book-pages")

 

    let newCard = document.createElement("article")
    newCard.className = "book-card"
    newCard.innerHTML=bookTitle.value
    library.appendChild(newCard)
    modal.close()
})

cancelAddBook.addEventListener("click", ()=>{
    modal.close()
})


function Book(title,author,pages) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
}

function addBookToLibrary(title,author,pages){
    let book = new Book(title,author,pages)
    myLibrary.push(book)
}

addBookToLibrary("Las Puertas de Fuego","Steven Pressfield",300)
addBookToLibrary("La Tregua","Mario Benedetti",155)

myLibrary.forEach((book)=>{
    console.table(book)
})


