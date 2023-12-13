/** @format */

const hamburger = document.getElementById("checkbox");
const main = document.querySelector(".main");
const image = document.querySelector(".img-container");
const aboutContainer = document.querySelector(".about-contect-container");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        main.style.marginTop = "0px";
        image.style.zIndex = "-1";
        aboutContainer.style.marginTop = "0";
    } else {
        main.style.marginTop = "5rem";
        aboutContainer.style.marginTop = "10rem";

        image.style.zIndex = "0";
    }
});
