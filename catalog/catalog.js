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
const swiperContainer = document.querySelector(".swiper-wrapper");
const finctionBooks = [];

onValue(bookDataRef, (snapshot) => {
  const bookDatas = snapshot.val();
  for (const key in bookDatas) {
    const swiperSlideContainer = document.createElement("div");
    swiperSlideContainer.classList.add("swiper-slide");
    swiperSlideContainer.classList.add("slide-contect-container");
    swiperSlideContainer.classList.add("all-books");

    swiperSlideContainer.innerHTML = `
        <div class='book-img-container'>
            <img src="${bookDatas[key].image}" />
            <h4>${bookDatas[key].name}</h4>
            <p>${bookDatas[key].author}</p>
            <div class="btn-container">
                <button id=${bookDatas[key].id}>Read more</button>
            </div>
        </div>
        
        `;

    swiperContainer.append(swiperSlideContainer);
    document
      .getElementById(`${bookDatas[key].id}`)
      .addEventListener("click", () => {
        window.location.href = "https://google.com";
      });
    // if (bookDatas[key].type === "Fiction") {
    //     finctionBooks.push(bookDatas[key]);
    //     for (let i = 0; i < finctionBooks.length; i++) {
    //         const swiperSlideCont = document.createElement("div");
    //         swiperSlideCont.classList.add("swiper-slide");
    //         swiperSlideCont.classList.add("slide-contect-container");
    //         swiperSlideCont.classList.add("fiction-books");
    //         swiperSlideCont.innerHTML = `
    //             <div class='book-img-container'>
    //                 <img src="${finctionBooks[i].image}" />
    //                 <h4>${finctionBooks[i].name}</h4>
    //                 <p>${finctionBooks[i].author}</p>
    //                 <div class="btn-container">
    //                     <button>Read more</button>
    //                 </div>
    //             </div>

    //             `;
    //         const allBooksElements =
    //             document.querySelectorAll(".all-books");
    //         const fictionBooksElements =
    //             document.querySelectorAll(".fiction-books");

    //         allBooksElements.forEach((element) => {
    //             element.style.display = "none";
    //         });

    //         fictionBooksElements.forEach((element) => {
    //             element.style.display = "block";
    //         });
    //         swiperContainer.append(swiperSlideCont);
    //     }
    // }
    // const bookImgContainer = document.createElement("div");
    // bookImgContainer.classList.add("book-img-container");
    // const btnContainer = document.createElement("div");
    // btnContainer.classList.add("btn-container");
  }
});
console.log(finctionBooks);
