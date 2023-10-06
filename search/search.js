/** @format */
const apiKey = "AIzaSyDLQJBjL-y_fWchHg9pg3QliuW53W4eIEc";
const searchBook = document.querySelector(".search-container");
const inputSearch = document.querySelector(".search-input");
const btnSearch = document.querySelector(".btn-search");
const titleScreen = document.querySelector(".title");
const authorsScreen = document.querySelector(".authors");
const descriptionScreen = document.querySelector(".description");

// ! Click Search Button
btnSearch.addEventListener("click", () => {
    fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${inputSearch.value}&key=${apiKey}`
    )
        .then((response) => response.json())
        .then((data) => {
            const dataItems = data.items;
            for (let i = 0; i < dataItems.length; i++) {
                const title = dataItems[i].volumeInfo.title;
                console.log("Title", title);
                const authors = dataItems[i].volumeInfo.authors;
                console.log("Author", authors);

                const description = dataItems[i].volumeInfo.description;
                console.log("Description", description);

                const imgBook =
                    dataItems[i].volumeInfo.imageLinks.smallThumbnail;
                console.log("Image Book", imgBook);

                if (title == inputSearch.value) {
                    titleScreen.innerHTML = title;
                    authorsScreen.innerHTML = authors;
                    descriptionScreen.innerHTML = description;
                    //   imgScreen.src = imgBook;
                    //   imgScreen.innerHTML = imgBook;
                    //   !bura baxarsan birdene img
                }
            }
        });
});
