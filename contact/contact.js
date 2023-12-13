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
const userContactRef = ref(db, `/userContact`);

const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = contactForm.elements["name"];
    const userEmail = contactForm.elements["email"];
    const userAdress = contactForm.elements["adress"];
    const userPhone = contactForm.elements["phone"];
    const note = contactForm.elements["note"];
    const userNameValue = userName.value;
    const userEmailValue = userEmail.value;
    const userAdressValue = userAdress.value;
    const userPhoneValue = userPhone.value;

    const userContact = {
        name: userNameValue,
        email: userEmailValue,
        adress: userAdressValue,
        phone: userPhoneValue,
    };

    const newUserContact = push(child(ref(db), `/userContact`)).key;
    set(ref(db, `/userContact/${newUserContact}`), userContact);
    userName.value = "";
    userEmail.value = "";
    userAdress.value = "";
    userPhone.value = "";
    note.value = "";
});
