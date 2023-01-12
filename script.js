
//book ojbect storage
let myLib = []

//book inputs variables

let title = document.getElementById('title')
let author = document.getElementById('author')
let pages = document.getElementById('pages')
let read = document.getElementById('read')
let table = document.querySelector('table.library')

let newTitle;
let newAuth;
let newPages;
let newRead;

title.addEventListener('input', (e) => {  newTitle = e.target.value})
author.addEventListener('input', (e) => {  newAuth = e.target.value})
pages.addEventListener('input', (e) => {  newPages = e.target.value})
read.addEventListener('change', (e) => {
  if (e.target.checked === true) {
   newRead = true
  }
  else if (e.target.checked === false) {
    newRead = false
  }

  }
 )

//creates book object

function Book (title, name, pages, read) {
    this.title = title,
    this.name = name,
    this.pages = pages,
    this.read = newRead
 this.num = 0
    }
    
    Book.prototype.setNum = function () {
      if (table.rows.length === 1) {
        this.num = 0
      }
      else if (table.rows.length > 1) {
        this.num += 1
    
      }
      }
//make new book and push to lib

  function addBookToLib () {
    let makeBook = new Book (newTitle, newAuth, newPages, newRead)
 makeBook.setNum()
myLib.push(makeBook)
row = table.insertRow()

cellOne = row.insertCell()
cellTwo = row.insertCell()
cellThree = row.insertCell()
cellFour = row.insertCell()
cellFive = row.insertCell()



cellOne.textContent = makeBook.title
cellTwo.textContent = makeBook.name
cellThree.textContent = makeBook.pages
cellFour.textContent = makeBook.read
cellFive.innerHTML = '<button class="remove" onclick="remove(this)"><span class="mdi mdi-trash-can"></span></button>'
cellFive.setAttribute('data-index', (myLib.length - 1))

row.setAttribute('data-index', (myLib.length - 1))



  }



  function remove (trash) {

}
  
  
