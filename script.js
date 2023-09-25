const popup = document.querySelector(".popup");
const showPopupIcon = document.querySelector(".showPopupIcon");
const showPopupButton = document.querySelector(".showPopupBtn");
const closePopupButton = document.getElementById("closePopup");
const header = document.querySelector("header");

// Function to open the pop-up
function openPopup() {
    popup.style.display = "block";
    header.style.zIndex = "0";
}

// Function to close the pop-up
function closePopup() {
    popup.style.display = "none";
}

// Event listeners
showPopupIcon.addEventListener("click", openPopup);
showPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

// Close the pop-up if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        closePopup();
    }
});
