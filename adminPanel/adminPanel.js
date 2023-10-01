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
    apiKey: "AIzaSyCOPLmzbWpJJqh3v9jxPilDKFrJlgiZi6E",
    authDomain: "bookstore-3597f.firebaseapp.com",
    databaseURL:
        "https://bookstore-3597f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bookstore-3597f",
    storageBucket: "bookstore-3597f.appspot.com",
    messagingSenderId: "659320410615",
    appId: "1:659320410615:web:0c78bc27aef1b9c2b65ef2",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// Firebase
const tableBody = document.getElementById("table-body");
const usersRef = ref(db, `/users`);
const emailRef = ref(db, `/emails`);
const tr = document.createElement("tr");
//

onValue(usersRef, (snapshot) => {
    const users = Object.values(snapshot.val());
    for (let i = 0; i < users.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${i}</td>
        <td>${users[i]}</td>
        `;
        tableBody.append(tr);
    }
});

onValue(emailRef, (snapshot) => {
    const emails = Object.values(snapshot.val());
    for (let email of emails) {
        const td = document.createElement("td");
        td.innerHTML = `
        ${email}
        `;
        tableBody.append(td);
    }
});

// Connected with database, however, the structure of tables are not correct
// Index of table element and username are together, but email is separated which causes us the problem where email appends on the new line
