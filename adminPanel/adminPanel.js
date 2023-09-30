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

const button = document.querySelector(".btn-searcn");
button.addEventListener("click", () => {
    set(usersRef, count);
});

onValue(usersRef, (snapshot) => {
    const users = Object.values(snapshot.val());
    for (let user of users) {
        showPopupBtn.textContent = user;
    }
});
