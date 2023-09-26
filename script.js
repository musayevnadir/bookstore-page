const popup = document.querySelector(".popup");
const showPopupIcon = document.querySelector(".showPopupIcon");
const showPopupButton = document.querySelector(".showPopupBtn");
const closePopupButton = document.getElementById("closePopup");
const header = document.querySelector("header");
const headerInfo = document.querySelector(".header-container");
const sectionInfo = document.querySelector(".section-js");
const input = document.querySelector(".hamburger");
const style = document.createElement("style");

function openPopup() {
    popup.style.display = "block";
    header.style.zIndex = "0";
}

function closePopup() {
    popup.style.display = "none";
}

showPopupIcon.addEventListener("click", openPopup);
showPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

window.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});

// Hamburger menu
const hamburger = document.getElementById("checkbox");
const sideBar = document.querySelector(".burger header nav ul ");
const wrapper = document.querySelector(".wrapper");

hamburger.addEventListener("click", () => {
    if (hamburger.checked) {
        sideBar.style.display = "flex";
        sideBar.style.zIndex = "2";
        sideBar.style.alignItems = "flex-end";
        wrapper.style.background = "rgba(36, 20, 0, 0.90)";
        header.style.background = "rgba(36, 20, 0, 0.90)";
        sectionInfo.style.marginTop = "0";
        const style = document.createElement("style");
        style.innerHTML = `
  .hamburger::before {
    background-color: red; /* Replace with your desired color */
  }
`;
    } else {
        sideBar.style.display = "none";
        wrapper.style.background = "none";
        header.style.background = "none";
        sectionInfo.style.marginTop = "5rem";
    }
});
document.head.append(style);
