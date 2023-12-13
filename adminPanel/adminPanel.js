/** @format */
// ! DOM Elements
const navLinks = document.querySelector(".container-hamburger-menu");
const hamburgerButton = document.querySelector(".hamburger-button");
const buttonX = document.querySelector(".button-x");
const userName = localStorage.getItem("name");
const visitorAdmin = document.querySelector(".visitorAdmin");
// ! Nav DOM ELements
const buttonHomeNav = document.querySelector(".button-home-nav");
const buttonAboutNav = document.querySelector(".button-about-nav");
const buttonJoinNav = document.querySelector(".button-join-nav");
const buttonContactNav = document.querySelector(".button-contact-nav");
const buttonLogoutNav = document.querySelector(".button-logout-nav");

// ! User Admin Visit Page
visitorAdmin.innerHTML = userName;

hamburgerButton.addEventListener("click", () => {
    if ((navLinks.style.display = "none")) {
        navLinks.style.display = "block";
        hamburgerButton.style.display = "none";
    }
});

buttonX.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburgerButton.style.display = "block";
});

// ! Buttons Hamburger Menu Navigation
buttonHomeNav.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburgerButton.style.display = "block";
});

buttonAboutNav.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburgerButton.style.display = "block";
});

buttonJoinNav.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburgerButton.style.display = "block";
});

buttonContactNav.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburgerButton.style.display = "block";
});

buttonLogoutNav.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburgerButton.style.display = "block";
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
    getDatabase,
    ref,
    get,
    set,
    onValue,
    child,
    push,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuJ4z0tdBfg2pTCLLMDNrhFyAjCiAitRs",
    authDomain: "bookstore-abb15.firebaseapp.com",
    databaseURL:
        "https://bookstore-abb15-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bookstore-abb15",
    storageBucket: "bookstore-abb15.appspot.com",
    messagingSenderId: "825569914637",
    appId: "1:825569914637:web:861e27fa24660daf24ca44",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const joinTableBody = document.getElementById("join-tbody");
const contactTableBody = document.getElementById("contact-tbody");
const booksTableBody = document.getElementById("books-tbody");
const userDataRef = ref(db, `/userData`);
const userContactRef = ref(db, `/userContact`);
const booksDataRef = ref(db, `/bookData`);

onValue(userDataRef, (snapshot) => {
    const userData = snapshot.val();
    const keys = Object.keys(userData);

    keys.map((key, index) => {
        const userValue = userData[key].user;
        const emailValue = userData[key].email;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${(index += 1)}</td>
          <td>${userValue}</td>
          <td>${emailValue}</td>
      `;
        joinTableBody.append(tr);
    });
});

onValue(userContactRef, (snapshot) => {
    const userContact = snapshot.val();
    const keys = Object.keys(userContact);

    keys.map((key, index) => {
        const fullName = userContact[key].name;
        const email = userContact[key].email;
        const phone = userContact[key].phone;
        const adress = userContact[key].adress;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${fullName}</td>
        <td>${adress}</td>
        <td>${email}</td>
        <td>${phone}</td>
        `;

        contactTableBody.append(tr);
    });
});

onValue(booksDataRef, (snapshot) => {
    const bookData = snapshot.val();
    const keys = Object.keys(bookData);

    keys.map((key, index) => {
        const bookName = bookData[key].name;
        const bookDescription = bookData[key].description.slice(0, 40) + "...";
        const bookCategory = bookData[key].type;
        const bookAuthor = bookData[key].author;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${(index += 1)}</td>
          <td>${bookName}</td>
          <td>${bookDescription}</td>
          <td>${bookCategory}</td>
          <td>${bookAuthor}</td>
      `;
        booksTableBody.append(tr);
    });
});

const apiKey = "AIzaSyDLQJBjL-y_fWchHg9pg3QliuW53W4eIEc";
const searchBook = document.getElementById("search-book");
const bookForm = document.getElementById("bookForm");
const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("author-name");
const bookImage = document.getElementById("book-image");
const bookDescription = document.getElementById("description");
const bookType = document.getElementById("book-type");
let bookID;
let bookSaleInfo;
let bookPublishDate;

const booksAPI = {
    fillInputs: (e) => {
        e.preventDefault();
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchBook.value}&key=${apiKey}`
        )
            .then((response) => response.json())
            .then((data) => {
                const bookInfo = data.items;

                for (let i = 0; i < bookInfo.length; i++) {
                    bookName.value = bookInfo[i].volumeInfo.title;
                    bookAuthor.value = bookInfo[i].volumeInfo.authors;
                    bookImage.value =
                        bookInfo[i].volumeInfo.imageLinks.thumbnail;
                    bookDescription.value = bookInfo[i].volumeInfo.description;
                    bookType.value = bookInfo[i].volumeInfo.categories;
                    bookID = bookInfo[i].id;
                    // bookSaleInfo = bookInfo[i].saleInfo.listPrice.amount;
                    bookPublishDate = bookInfo[i].volumeInfo.publishedDate;
                }
            });
    },

    sendData: (e) => {
        e.preventDefault();
        const bookData = {
            name: bookName.value,
            author: bookAuthor.value,
            description: bookDescription.value,
            image: bookImage.value,
            type: bookType.value,
            id: bookID,
            // saleInfo: bookSaleInfo,
            publishedDate: bookPublishDate,
        };
        console.log(bookData.description);

        const newBookData = push(child(ref(db), `/bookData`)).key;

        set(ref(db, `/bookData/${newBookData}`), bookData);
    },
};

document
    .getElementById("searchForm")
    .addEventListener("submit", booksAPI.fillInputs);
bookForm.addEventListener("submit", booksAPI.sendData);
