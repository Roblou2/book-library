
//book ojbect storage
let myLib = []

//book inputs variables

let title = document.getElementById('title')
let author = document.getElementById('author')
let pages = document.getElementById('pages')
let read = document.getElementById('read')
let table = document.querySelector('table.library')
let req = document.querySelector('.req')
let form = document.querySelector('form')


let newTitle;
let newAuth;
let newPages;
let newRead;

form.addEventListener('submit', (e) => e.preventDefault())

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

class Book {
  
  constructor (title, name, pages, read) {
 
    this.title = title,
    this.name = name,
    this.pages = pages,
    this.read = newRead
  }
    }
    
   function changeStatus (x) {
    let obj = x.parentNode.parentNode.dataset.index
   
 if (myLib[obj].read === true) {
  myLib[obj].read = false
  x.parentNode.innerHTML = '<button class ="status" onclick="changeStatus(this)"><span class="mdi mdi-close"></span></button>'

 }
  else if (myLib[obj].read === false) {
    myLib[obj].read = true
    x.parentNode.innerHTML = '<button class ="status" onclick="changeStatus(this)"><span class="mdi mdi-check"></span></button>'
   
  }
    }

//make new book, push to lib and make rows and cells for book data

  function addBookToLib () {
    makeBook = new Book (newTitle, newAuth, newPages, newRead)

myLib.push(makeBook)
console.log(myLib)
row = table.insertRow()


//set the display back to none for when input is added
req.setAttribute('style', 'display: none;')



cellOne = row.insertCell()
cellTwo = row.insertCell()
cellThree = row.insertCell()
cellFour = row.insertCell()
cellFive = row.insertCell()



cellOne.textContent = makeBook.title
cellTwo.textContent = makeBook.name
cellThree.textContent = makeBook.pages

if (makeBook.read === true) {
cellFour.innerHTML = '<button class ="status" onclick="changeStatus(this)"><span class="mdi mdi-check"></span></button>'
}
else if (makeBook.read === false) {
  cellFour.innerHTML = '<button class ="status" onclick="changeStatus(this)"><span class="mdi mdi-close"></span></button>'
}
cellFive.innerHTML = '<button class="remove" onclick="remove(this)"><span class="mdi mdi-trash-can"></span></button>'
cellFive.setAttribute('data-index', (myLib.length - 1))

row.setAttribute('data-index', (myLib.length - 1))


  }


//get the data-index num of the last cell of a row and plug into the library array index. Array length stays the same with undefined.
  function remove (x) {
    let index = x.parentNode.dataset.index
    let rowIndex = x.parentNode.parentNode.rowIndex
table.deleteRow(rowIndex)
myLib[index] = undefined

}
  
//set default output on library for read checkbox
if (read.checked === true) {
  newRead = true
}
else if (read.checked === false) {
newRead = false;
}

