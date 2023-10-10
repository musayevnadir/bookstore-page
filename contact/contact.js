const main = document.querySelector(".main-container .main-contact-us ");
const hamburger = document.getElementById("checkbox");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        main.style.marginTop = "0px";
    } else {
        main.style.marginTop = "5rem";
    }
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
const userContactRef = ref(db, `/userContact`);

const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = contactForm.elements["name"].value;
    const userEmail = contactForm.elements["email"].value;
    const userAdress = contactForm.elements["adress"].value;
    const userPhone = contactForm.elements["phone"].value;

    const userContact = {
        name: userName,
        email: userEmail,
        adress: userAdress,
        phone: userPhone,
    };

    const newUserContact = push(child(ref(db), `/userContact`)).key;

    set(ref(db, `/userContact/${newUserContact}`), userContact);
});
