/** @format */
// ! DOM Elements
const navLinks = document.querySelector(".container-hamburger-menu");
const hamburgerButton = document.querySelector(".hamburger-button");
const buttonX = document.querySelector(".button-x");
const userName = localStorage.getItem("name");
const visitorAdmin = document.querySelector(".visitorAdmin");
// ! Nav DOM ELements
const buttonHomeNav = document.querySelector(".button-home-nav");
const buttonAboutNav = document.querySelector(".button-about-nav");
const buttonJoinNav = document.querySelector(".button-join-nav");
const buttonContactNav = document.querySelector(".button-contact-nav");
const buttonLogoutNav = document.querySelector(".button-logout-nav");

// ! User Admin Visit Page
visitorAdmin.innerHTML = userName;

hamburgerButton.addEventListener("click", () => {
  if ((navLinks.style.display = "none")) {
    navLinks.style.display = "block";
    hamburgerButton.style.display = "none";
  }
});

buttonX.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburgerButton.style.display = "block";
});

// ! Buttons Hamburger Menu Navigation
buttonHomeNav.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburgerButton.style.display = "block";
});

buttonAboutNav.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburgerButton.style.display = "block";
});

buttonJoinNav.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburgerButton.style.display = "block";
});

buttonContactNav.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburgerButton.style.display = "block";
});

buttonLogoutNav.addEventListener("click", () => {
  navLinks.style.display = "none";
  hamburgerButton.style.display = "block";
});
