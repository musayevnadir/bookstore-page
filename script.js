// Initialize Firebase
// Firebase
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

const popup = document.querySelector(".popup");
const showPopupIcon = document.querySelector(".showPopupIcon");
const showPopupButton = document.querySelector(".showPopupBtn");
const closePopupButton = document.getElementById("closePopup");
const header = document.querySelector("header");
const sectionInfo = document.querySelector(".section-js");
const input = document.querySelector(".hamburger");
const style = document.createElement("style");

function openPopup() {
    popup.style.display = "block";
    header.style.zIndex = "0";
}

function closePopup() {
    popup.style.display = "none";
}

showPopupIcon.addEventListener("click", openPopup);
showPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

window.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

// Hamburger menu
const hamburger = document.getElementById("checkbox");
const sideBar = document.querySelector(".burger header nav ul ");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        sideBar.style.display = "flex";
        sideBar.style.zIndex = "2";
        sideBar.style.alignItems = "flex-end";
        wrapper.style.background = "rgba(36, 20, 0, 0.90)";
        header.style.background = "rgba(36, 20, 0, 0.90)";
        // headerText.style.zIndex = "-1";
        sectionInfo.style.marginTop = "0";
    } else {
        // headerText.style.zIndex = "0";
        sideBar.style.display = "none";
        wrapper.style.background = "none";
        header.style.background = "none";
        sectionInfo.style.marginTop = "5rem";
    }
});
document.head.append(style);

// Join us form validator
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const inputsDiv = document.getElementById("inputs");
const showPopupBtn = document.getElementById("showPopupBtn");
const errorP = document.createElement("p");
const successP = document.createElement("p");
const usersRef = ref(db, `/users`);

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!nameInput.value.trim() || !emailInput.value.trim()) {
        inputsDiv.innerHTML = "";
        errorP.textContent = "Please fill in all fields";
        errorP.classList.add("errorText");
        inputsDiv.append(errorP);
    } else {
        inputsDiv.innerHTML = "";
        successP.textContent = "Thank you for joining us!";
        successP.classList.add("successText");
        inputsDiv.append(successP);
        setTimeout(closePopup, 2000);
        showPopupBtn.innerHTML = "";

        const userName = nameInput.value;
        const userEmail = emailInput.value;
        const newUserName = push(child(ref(db), `/users`)).key;
        const newEmail = push(child(ref(db), `/emails`)).key;

        set(ref(db, `/users/${newUserName}`), userName);
        set(ref(db, `/emails/${newEmail}`), userEmail);

        onValue(usersRef, (snapshot) => {
            const users = Object.values(snapshot.val());
            for (let user of users) {
                showPopupBtn.textContent = user;
            }
        });
    }
});
