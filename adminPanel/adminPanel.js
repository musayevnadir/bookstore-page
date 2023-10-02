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
const tableRows = document.querySelector(".container #table-row");
//

onValue(usersRef, (snapshot) => {
    const users = Object.values(snapshot.val());

    for (let i = 0; i < users.length; i++) {
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");

        td1.textContent = i;
        td2.textContent = users[i];

        // Add the user data to the corresponding row
        tableRows.append(td1);
        tableRows.append(td2);
    }
});

onValue(emailRef, (snapshot) => {
    const emails = Object.values(snapshot.val());

    for (let i = 0; i < emails.length; i++) {
        const td = document.createElement("td");
        td.textContent = emails[i];

        // Add the email data to the corresponding row
        tableRows.append(td);
    }
});
