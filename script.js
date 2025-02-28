
const modalAdd = document.querySelector("#modalAdd")
const modalErase = document.querySelector("#modalErase")
const library = document.querySelector(".library-display")
const addButton = document.querySelector(".add-book")
const closeAddBook = document.querySelector(".close-add-book")
const cancelAddBook = document.querySelector(".cancel-add-book")

let bookIdCounter = 0;

function Book(title,author,pages) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Id = ++bookIdCounter;

}

function addBookToLibrary(title,author,pages){
    let book = new Book(title,author,pages)
    myLibrary.push(book)
}

const myLibrary = [];

addButton.addEventListener("click", ()=>{
    modalAdd.showModal()
})

closeAddBook.addEventListener("click", (event)=>{

    event.preventDefault()
    const bookTitle = document.querySelector("#book-title")
    const bookAuthor = document.querySelector("#book-author")
    const bookPages = document.querySelector("#book-pages")

    //If the form has values create book card
    if(bookTitle.value!="" && bookAuthor.value!="" && bookPages.value!=""){
        
        //Add the book to the myLibrary array and DOM
        addBookToLibrary(bookTitle.value,bookAuthor.value,bookPages.value)
        const bookId = bookIdCounter
        let newCard = document.createElement("article")
        newCard.dataset.bookId = bookId
        newCard.className = `book-card`
        newCard.innerHTML= `<div class="card-content title">${bookTitle.value}</div>
            <div class="card-content author ">${bookAuthor.value}</div>
            <div class="card-content pages">${bookPages.value}</div>
            <button class="erase-card-btn">Erase </button>`

        
        library.appendChild(newCard)
        
        //Manually clear the form datafields and close it
        bookTitle.value = null
        bookAuthor.value = null
        bookPages.value = null
        modalAdd.close()

        let eraseButon = newCard.querySelector(`.erase-card-btn`)
        eraseButon.addEventListener("click",()=>{
            
            modalErase.showModal()
            let eraseConfirm = modalErase.querySelector("#erase")
            eraseConfirm.addEventListener("click",()=>{
                library.removeChild(newCard)

                //Find index of book being removed and remove it from myLibrary Array
                const bookIndex = myLibrary.findIndex((book)=> book.Id === bookId)
                myLibrary.splice(bookIndex,1)
                modalErase.close()
            })
            let eraseCancel = modalErase.querySelector("#notErase")
            eraseCancel.addEventListener("click",()=>{
                modalErase.close()
            })
            
            

        })
    }

    
})

cancelAddBook.addEventListener("click", ()=>{
    modalAdd.close()
})






