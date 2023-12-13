/** @format */

// ! API Key
const apiKey = "AIzaSyDLQJBjL-y_fWchHg9pg3QliuW53W4eIEc";

// ! Dom Elements
const searchBook = document.querySelector(".search-container");
const inputSearch = document.querySelector(".search-input");
const btnSearch = document.querySelector(".btn-search");
const titleScreen = document.querySelector(".title");
const authorsScreen = document.querySelector(".authors");
const descriptionScreen = document.querySelector(".description");
const imgScreen = document.querySelector(".img-book");
const containerSlider = document.querySelector(".info-main");

const SLIDER = document.querySelector(".swiper-wrapper");

const bookInfoContainer = document.querySelector(".book-info-container");

const myForm = document.querySelector("#myForm");

// ! Button Slider Dom Elements
const btnSliderLeft = document.querySelector(".slider-btn-left");
const btnSliderRight = document.querySelector(".slider-btn-rigth");

// ! Click Button Slider
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    // loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    speed: 800,
});

// ! Click Search API

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    SLIDER.innerHTML = "";
    if (inputSearch.value !== "") {
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${inputSearch.value}&key=${apiKey}`
        )
            .then((response) => response.json())
            .then((data) => {
                inputSearch.value = "";
                const dataItems = data.items;
                manageSlider(dataItems);
            });
    } else {
        alert("Fill in the blanks");
    }
});

// ! Function ManageSlider
function manageSlider(dataItems) {
    bookInfoContainer.style.display = "block";
    let arrayBookAuthors = [];
    for (let i = 0; i < dataItems.length; i++) {
        const title = dataItems[i].volumeInfo.title;
        const description = dataItems[i].volumeInfo.description;
        const imgBook = dataItems[i].volumeInfo.imageLinks.thumbnail;

        //  authors push in array
        const authors = dataItems[i].volumeInfo.authors;
        arrayBookAuthors.push(authors);
        SLIDER.innerHTML += `
    <div class="swiper-slide">
    <div class="info-main">
      <div class="img-container">
        <img class="img-book" src="${imgBook}" alt="" />
      </div>
      <div class="description-container">
        <h2 class="title">${title}</h2>
        <h4 class="authors">${arrayBookAuthors[i][0]}</h4>
        <p class="description">${description}</p>
      </div>
    </div>
  </div>
    `;
    }
}

const hamburger = document.getElementById("checkbox");
const searchMain = document.querySelector(".search-main");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        searchMain.style.zIndex = "-1";
    } else {
        searchMain.style.zIndex = "0";
    }
});

// const popup = document.querySelector(".popup");
// const showPopupIcon = document.querySelector(".showPopupIcon");
// const showPopupButton = document.querySelector(".showPopupBtn");
// const closePopupButton = document.getElementById("closePopup");
// function openPopup() {
//     popup.style.display = "block";
//     searchMain.style.zIndex = " -1";
// }

// function closePopup() {
//     popup.style.display = "none";
//     searchMain.style.zIndex = " 0";
// }

// showPopupIcon.addEventListener("click", openPopup);
// showPopupButton.addEventListener("click", openPopup);
// closePopupButton.addEventListener("click", closePopup);

// window.addEventListener("click", (event) => {
//     if (event.target === popup) {
//         closePopup();
//     }
// });
