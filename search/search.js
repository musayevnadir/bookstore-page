/** @format */
const apiKey = "AIzaSyDLQJBjL-y_fWchHg9pg3QliuW53W4eIEc";
const searchBook = document.querySelector(".search-container");
const btnSearch = document.querySelector(".search-btn");
const inputSearch = document.querySelector(".inputSearch");

// ! Click Search Button
btnSearch.addEventListener("click", () => {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchBook.value}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      dataValue(data);
    });
});

// ! Function Data Value

function dataValue(data) {
  const dataItems = data.items;

  for (let i = 0; i < dataItems.length; i++) {
    const title = dataItems[i].volumeInfo.title;
    const authors = dataItems[i].volumeInfo.authors;
    const description = dataItems[i].volumeInfo.description;
    const imgBook = dataItems[i].volumeInfo.imageLinks.smallThumbnail;
    showOnScreen(title, authors, description, imgBook);
  }
}

// ! Function Data Value show on screen

function showOnScreen(title, authors, description, imgBook) {
    for (let i = 0; i < title.length; i++) {
        
    }
    
}
