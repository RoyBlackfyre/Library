const library = document.querySelector(".library-display")
const addButton = document.querySelector(".add-book")

addButton.addEventListener("click", ()=>{
    let newCard = document.createElement("article")
    newCard.className = "book-card"
    library.appendChild(newCard)
})
const myLibrary = [];

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


