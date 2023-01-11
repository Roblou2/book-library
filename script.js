
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
   
    }
    


//make new book and push to lib

  function addBookToLib () {
    let makeBook = new Book (newTitle, newAuth, newPages)
myLib.push(makeBook)
var row = table.insertRow()
var cellOne = row.insertCell()
var cellTwo = row.insertCell()
var cellThree = row.insertCell()
var cellFour = row.insertCell()

cellOne.innerHTML = makeBook.title
cellTwo.innerHTML = makeBook.name
cellThree.innerHTML = makeBook.pages
cellFour.innerHTML = makeBook.read

row.setAttribute('data-index', (myLib.length -1))
  }

