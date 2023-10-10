// Setting data to localStorage
let bookName = window.localStorage.getItem("bookName");
let bookAuthor = window.localStorage.getItem("bookAuthor");
let bookImage = window.localStorage.getItem("bookImage");
let bookPublishedDate = window.localStorage.getItem("bookPublishedData");
let bookDescription = window.localStorage.getItem("bookDescription");

// DOM elements

const dateofBook = document.getElementById("bookPublishedDate");
dateofBook.textContent = bookPublishedDate;
const nameOfBook = document.getElementById("bookName");
nameOfBook.textContent = bookName;
const authorOfBook = document.getElementById("bookAuthor");
authorOfBook.textContent = bookAuthor;
const descriptionOfBook = document.getElementById("bookDescription");
descriptionOfBook.textContent = bookDescription;
const imageOfBook = document.getElementById("bookImage");
imageOfBook.setAttribute("src", bookImage);
// imageOfBook.style.marginRight = "5rem";
document.getElementById("goBackBtn").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5501/catalog/catalog.html";
});
