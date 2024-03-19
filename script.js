const emailInput = document.querySelector("#email");
const form = document.querySelector(".email--input");
const errorMessage = document.querySelector(".message");
const errorIcon = document.querySelector(".error--logo");
const submitBtn = document.querySelector("#submit");

eventListener();

function eventListener() {
  emailInput.addEventListener("keyup", checkEmail);
  // submitBtn.addEventListener("click", checkEmail);
}

function checkEmail() {
  // e.preventDefault();
  let emailInputValue = emailInput.value;
  // let emailFormat =
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInputValue.indexOf("@") !== -1) {
    console.log(emailInputValue);
  } else {
    errorMessage.classList.add("error");
    errorIcon.classList.add("icon");
    emailInput.style.border = "1px solid red";
    // console.log("This is an error");
  }
}
