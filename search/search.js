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

// ! Button Slider Dom Elements
const btnSliderLeft = document.querySelector(".slider-btn-left");
const btnSliderRight = document.querySelector(".slider-btn-rigth");

// ! Click Search Button
btnSearch.addEventListener("click", () => {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${inputSearch.value}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dataItems = data.items;
      let arrayBookAuthors = [];
      for (let i = 0; i < dataItems.length; i++) {
        const title = dataItems[i].volumeInfo.title;
        const authors = dataItems[i].volumeInfo.authors;
        const description = dataItems[i].volumeInfo.description;
        const imgBook = dataItems[i].volumeInfo.imageLinks.thumbnail;
        

        titleScreen.innerHTML = title;
        authorsScreen.innerHTML = authors;
        descriptionScreen.innerHTML = description;
        imgScreen.src = imgBook;

      }
      console.log("arrayBookAuthors", arrayBookAuthors);
    });
});

// ! Click Button Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
});
