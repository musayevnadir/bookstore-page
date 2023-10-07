/** @format */

// ! Dom Elements
const inputUserName = document.querySelector(".input-userName");
const inputPassword = document.querySelector(".input-password");
const btnJoin = document.querySelector(".btn-join");

// ! Name and Password
const adminName = ["nadir", "ali"];
const adminPassword = "12345";

// ! Valideyt Function
function isAdmin(name, password) {
  let boolName = false;
  let boolPassword = false;
  let visitorAdmin = "";

  // userName valide
  if (inputUserName.value == "") {
    if (inputUserName.classList.contains("inpt-main")) {
      inputUserName.classList.remove("inpt-main");
      inputUserName.classList.add("inputRedPlaceholder");
      inputUserName.style.borderColor = "red";
      inputUserName.placeholder = "This field is required";
    }
  } else {
    for (let i = 0; i < name.length; i++) {
      if (inputUserName.value == name[i]) {
        boolName = true;
        visitorAdmin = inputUserName.value.toUpperCase();
        inputUserName.style.borderColor = "green";
        inputUserName.style.color = "green";
        break;
      } else {
        inputUserName.style.borderColor = "red";
        inputUserName.style.color = "red";
      }
    }
  }

  // userPassword valide
  if (inputPassword.value == "") {
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
  welcomeToAdminPanele(boolName, boolPassword, visitorAdmin);
}

function welcomeToAdminPanele(name, password, visitorAdmin) {
  setTimeout(() => {
    if (name && password) {
      localStorage.setItem("name", visitorAdmin);
      window.location.href = "../adminPanel/adminPanel.html";
    }
  }, 1000);
}

// ! Button Join Admin and Enter click

function clickMouse(event) {
  if (event.type === "click") {
    isAdmin(adminName, adminPassword);
  }
}

function clickEnter(event) {
  if (event.type === "keydown" && event.code === "Enter") {
    isAdmin(adminName, adminPassword);
  }
}

btnJoin.addEventListener("click", clickMouse);
window.addEventListener("keydown", clickEnter);
