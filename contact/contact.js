const main = document.querySelector(".main-container .main-contact-us ");
const hamburger = document.getElementById("checkbox");
hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        main.style.marginTop = "0px";
    } else {
        main.style.marginTop = "5rem";
    }
});
