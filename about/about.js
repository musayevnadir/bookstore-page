const hamburger = document.getElementById("checkbox");
const main = document.querySelector(".main");
const image = document.querySelector(".img-container");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        main.style.marginTop = "0px";
        image.style.zIndex = "-1";
    } else {
        main.style.marginTop = "5rem";
        image.style.zIndex = "0";
    }
});
