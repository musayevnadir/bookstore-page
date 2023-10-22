// Setting data to localStorage
let bookName = window.localStorage.getItem("bookName");
let bookAuthor = window.localStorage.getItem("bookAuthor");
let bookImage = window.localStorage.getItem("bookImage");
let bookPublishedDate = window.localStorage.getItem("bookPublishedData");
let bookDescription = window.localStorage.getItem("bookDescription");
const mainRight = document.querySelector(".main-section-right");
const mainLeft = document.querySelector(".main-section-left");
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
    window.location.href = "/catalog/catalog.html";
});

const hamburger = document.getElementById("checkbox");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        mainRight.style.zIndex = "-1";
        mainLeft.style.zIndex = "-1";
    } else {
        mainRight.style.zIndex = "0";
        mainLeft.style.zIndex = "-1";
    }
});
