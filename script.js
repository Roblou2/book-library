
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
let newRead = 'Not read';

title.addEventListener('input', (e) => {  newTitle = e.target.value})
author.addEventListener('input', (e) => {  newAuth = e.target.value})
pages.addEventListener('input', (e) => {  newPages = e.target.value})
read.addEventListener('change', (e) => {
  if (e.target.checked === true) {
   newRead = 'Read'
  }
  else if (e.target.checked === false) {
    newRead = 'Not read'
  }

  }
 )

//creates book object

function Book (title, name, pages, read) {
    this.title = title,
    this.name = name,
    this.pages = pages,
    this.read = newRead

    }
    

//make new book, push to lib and make rows and cells for book data

  function addBookToLib () {
    makeBook = new Book (newTitle, newAuth, newPages, newRead)

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




  }


//get the data-index num of the last cell of a row and plug into the library array index. Array length stays the same with undefined.
  function remove (x) {
    let index = x.parentNode.dataset.index
    let rowIndex = x.parentNode.parentNode.rowIndex
table.deleteRow(rowIndex)
myLib[index] = undefined

}
  
