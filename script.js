
const modalAdd = document.querySelector("#modalAdd")
const modalErase = document.querySelector("#modalErase")
const library = document.querySelector(".library-display")
const addButton = document.querySelector(".add-book")
const closeAddBook = document.querySelector(".close-add-book")
const cancelAddBook = document.querySelector(".cancel-add-book")

let bookIdCounter = 0;

class Book {
    constructor(title,author,pages,readStatus){
        this.Title = title;
        this.Author = author;
        this.Pages = pages;
        this.Id = ++bookIdCounter;
        this.Read = readStatus;
    }
}

function addBookToLibrary(title,author,pages,readStatus){
    let book = new Book(title,author,pages,readStatus)
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
    const readStatus = document.querySelector(`input[name="readStatus"]:checked`)

    //If the form has values create book card
    if(bookTitle.value!="" && bookAuthor.value!="" && bookPages.value!="" && readStatus!=""){
        
        //Add the book to the myLibrary array and DOM
        addBookToLibrary(bookTitle.value,bookAuthor.value,bookPages.value,readStatus.value)
        const bookId = bookIdCounter
        let newCard = document.createElement("article")
        newCard.className = `book-card`
        newCard.innerHTML= `<div class="card-content title">${bookTitle.value}</div>
            <div class="card-content author ">${bookAuthor.value}</div>
            <div class="card-content pages">${bookPages.value} pages</div>
            <div class="card-content book-options">
            <button class="read-button">${readStatus.value=="true" ? "Read" : "Not Read"}</button>
            <button class="erase-card-btn"></button>
            </div>`

        
        library.appendChild(newCard)
        
        //Manually clear the form datafields and close it
        bookTitle.value = null
        bookAuthor.value = null
        bookPages.value = null
        readStatus.checked = false;
        modalAdd.close()
        const bookIndex = myLibrary.findIndex((book)=> book.Id === bookId)

        //Erase button for deleting the book card and book in the array
        let eraseButon = newCard.querySelector(`.erase-card-btn`)
        eraseButon.addEventListener("click",()=>{
            
            modalErase.showModal()
            let eraseConfirm = modalErase.querySelector("#erase")
            eraseConfirm.addEventListener("click",()=>{
                library.removeChild(newCard)

                //Find index of book being removed and remove it from myLibrary Array
                myLibrary.splice(bookIndex,1)
                modalErase.close()
            })
            let eraseCancel = modalErase.querySelector("#notErase")
            eraseCancel.addEventListener("click",()=>{
                modalErase.close()
            })

        })

        let readButon = newCard.querySelector(`.read-button`)
        
        readButon.addEventListener("click", ()=>{

            if(readButon.innerText == "Read"){
                readButon.innerText = "Not Read"
                myLibrary[bookIndex].Read = "false"
            } else {
                readButon.innerText = "Read"
                myLibrary[bookIndex].Read = "true"

            }
        })
    }

    
})

cancelAddBook.addEventListener("click", ()=>{
    modalAdd.close()
})






