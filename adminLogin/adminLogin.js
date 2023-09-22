/** @format */

// ! Dom Elements
const inputUserName = document.querySelector(".input-userName");
const inputPassword = document.querySelector(".input-password");
const btnJoin = document.querySelector(".btn-join");

// ! Name and Password
const adminName = "admin";
const adminPassword = "admin";

// ! Valideyt Function
function isAdmin(name, password) {
  let boolName = false;
  let boolPassword = false;
  if (inputUserName.value == "") {
    // userName valide
    if (inputUserName.classList.contains("inpt-main")) {
      inputUserName.classList.remove("inpt-main");
      inputUserName.classList.add("inputRedPlaceholder");
      inputUserName.style.borderColor = "red";
      inputUserName.placeholder = "This field is required";
    }
  } else {
    if (inputUserName.value == name) {
      boolName = true;
      inputUserName.style.borderColor = "green";
      inputUserName.style.color = "green";
    } else {
      inputUserName.style.borderColor = "red";
      inputUserName.style.color = "red";
    }
  }

  if (inputPassword.value == "") {
    // userPassword valide
    if (inputPassword.classList.contains("inpt-main")) {
      inputPassword.classList.remove("inpt-main");
      inputPassword.classList.add("inputRedPlaceholder");
      inputPassword.style.borderColor = "red";
      inputPassword.placeholder = "This field is required";
    }
  } else {
    if (inputPassword.value == password) {
      boolPassword = true;
      inputPassword.style.borderColor = "green";
      inputPassword.style.color = "green";
    } else {
      inputPassword.style.borderColor = "red";
      inputPassword.style.color = "red";
    }
  }
  welcomeToAdminPanele(boolName, boolPassword);
}

function welcomeToAdminPanele(name, password) {
  setTimeout(() => {
    if (name && password) {
      window.location.href = "../adminPanel/adminPanel.html";
    }
  }, 1000);
}

// ! Button Join Admin
btnJoin.addEventListener("click", () => {
  isAdmin(adminName, adminPassword);
});
