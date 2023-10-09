/** @format */
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,
    speed: 800,
    slidesPerView: 5,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    //   spaceBetween:10

    //   keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    //   },

    //   ?--------------------
    //     simulateTouch: true,
    //     touchRatio: 1,
    //     touchAngle: 45,
    //     grabCursor: true,
    //   slideToClickedlide: true,
    //   ?--------------------

    //   ! RESPONSE Swipper

    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        558: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 5,
        },
    },
});

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
const bookDataRef = ref(db, `/bookData`);
const allBooksContainer = document.querySelector(".wrapper-allbooks");
const bestsellersContainer = document.querySelector(".wrapper-bestsellers");
const newReleaseContainer = document.querySelector(".wrapper-newReleases");
const allBooks = [];
const fictionBooks = [];
const philosophyBooks = [];
const biographyBooks = [];
const dramaBooks = [];

onValue(bookDataRef, (snapshot) => {
    const bookDatas = snapshot.val();

    for (const key in bookDatas) {
        allBooks.push(bookDatas[key]);
        const swiperSlideContainerForAllBooks = document.createElement("div");
        swiperSlideContainerForAllBooks.classList.add("swiper-slide");
        swiperSlideContainerForAllBooks.classList.add(
            "slide-contect-container"
        );
        swiperSlideContainerForAllBooks.classList.add("all-books-container");
        swiperSlideContainerForAllBooks.innerHTML = `
            <div class='book-img-container'>
                <img src="${bookDatas[key].image}" />
                <h4>${bookDatas[key].name}</h4>
                <p>${bookDatas[key].author}</p>
                <div class="btn-container">
                <button id="bookButton_${bookDatas[key].id}">Read more</button>
                </div>
            </div>
        `;

        allBooksContainer.append(swiperSlideContainerForAllBooks);

        if (bookDatas[key].saleInfo > 1) {
            const swiperSlideContainer = document.createElement("div");
            swiperSlideContainer.classList.add("swiper-slide");
            swiperSlideContainer.classList.add("slide-contect-container");
            swiperSlideContainer.innerHTML = `
            <div class='book-img-container'>
                <img src="${bookDatas[key].image}" />
                <h4>${bookDatas[key].name}</h4>
                <p>${bookDatas[key].author}</p>
                <div class="btn-container">
                <button id="bookButton_${bookDatas[key].id}">Read more</button>
                </div>
            </div>
        `;

            bestsellersContainer.append(swiperSlideContainer);
        }

        if (bookDatas[key].publishedDate > "2015-01-01") {
            const swiperSlideContainer = document.createElement("div");
            swiperSlideContainer.classList.add("swiper-slide");
            swiperSlideContainer.classList.add("slide-contect-container");
            swiperSlideContainer.innerHTML = `
            <div class='book-img-container'>
                <img src="${bookDatas[key].image}" />
                <h4>${bookDatas[key].name}</h4>
                <p>${bookDatas[key].author}</p>
                <div class="btn-container">
                <button id="bookButton_${bookDatas[key].id}">Read more</button>
                </div>
            </div>
        `;
            newReleaseContainer.append(swiperSlideContainer);
        }

        if (bookDatas[key].type === "Fiction") {
            fictionBooks.push(bookDatas[key]);
        } else if (bookDatas[key].type === "Biography & Autobiography") {
            biographyBooks.push(bookDatas[key]);
        } else if (bookDatas[key].type === "Drama") {
            dramaBooks.push(bookDatas[key]);
        } else if (bookDatas[key].type === "Philosophy") {
            philosophyBooks.push(bookDatas[key]);
        }
        const buttons = document.querySelectorAll(
            `#bookButton_${bookDatas[key].id}`
        );
        buttons.forEach((element) => {
            element.addEventListener("click", () => {
                window.location.href =
                    "http://127.0.0.1:5501/aboutBook/aboutBook.html";
                bookName = bookDatas[key].name;
            });
        });
    }
});
document.getElementById("all-books").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < allBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `
            <div class='book-img-container'>
            <img src="${allBooks[i].image}" />
            <h4>${allBooks[i].name}</h4>
            <p>${allBooks[i].author}</p>
            <div class="btn-container">
                <button class=${allBooks[i].id}>Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
    }
});

document.getElementById("fiction").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < fictionBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `   
            <div class='book-img-container'>
            <img src="${fictionBooks[i].image}" />
            <h4>${fictionBooks[i].name}</h4>
            <p>${fictionBooks[i].author}</p>
            <div class="btn-container">
                <button class=${fictionBooks[i].id}>Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
    }
});

document.getElementById("philosophy").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < philosophyBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `   
            <div class='book-img-container'>
            <img src="${philosophyBooks[i].image}" />
            <h4>${philosophyBooks[i].name}</h4>
            <p>${philosophyBooks[i].author}</p>
            <div class="btn-container">
                <button class=${philosophyBooks[i].id}>Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
    }
});
document.getElementById("drama").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < dramaBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `
            <div class='book-img-container'>
            <img src="${dramaBooks[i].image}" />
            <h4>${dramaBooks[i].name}</h4>
            <p>${dramaBooks[i].author}</p>
            <div class="btn-container">
                <button class=${dramaBooks[i].id}>Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
    }
});
document.getElementById("biography").addEventListener("click", () => {
    const swiperCont = document.querySelectorAll(".all-books-container");
    swiperCont.forEach((element) => {
        element.style.display = "none";
    });
    for (let i = 0; i < biographyBooks.length; i++) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.classList.add("slide-contect-container");
        swiperSlide.classList.add("all-books-container");
        swiperSlide.innerHTML = `
            <div class='book-img-container'>
            <img src="${biographyBooks[i].image}" />
            <h4>${biographyBooks[i].name}</h4>
            <p>${biographyBooks[i].author}</p>
            <div class="btn-container">
                <button class=${biographyBooks[i].id}>Read more</button>
            </div>
        </div>
    
        `;
        allBooksContainer.append(swiperSlide);
    }
});
export let bookName;
