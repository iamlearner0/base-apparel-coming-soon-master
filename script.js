const emailInput = document.querySelector("#email");
const form = document.querySelector(".email--input");
const errorMessage = document.querySelector(".message");
const errorIcon = document.querySelector(".error--logo");
const submitBtn = document.querySelector("#submit");

eventListener();

function eventListener() {
  emailInput.addEventListener("keyup", checkEmail);
  emailInput.addEventListener("blur", checkEmail);
  submitBtn.addEventListener("click", submitForm);
}

// To check if the inputted mail is correct and if it's more than 5 in length
function checkEmail() {
  let emailInputValue = emailInput.value;
  let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailFormat.test(emailInputValue) || emailInputValue > 5) {
    errorMessage.classList.remove("error");
    errorIcon.classList.remove("icon");
    emailInput.style.border = "2px solid hsl(0, 36%, 70%)";
  } else {
    errorMessage.classList.add("error");
    errorIcon.classList.add("icon");
    emailInput.style.border = "1px solid red";
  }
}

function submitForm() {
  let emailInputValue = emailInput.value;
  let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailFormat.test(emailInputValue) || emailInputValue > 5) {
    form.submit();
  } else {
    errorMessage.classList.add("error");
    errorIcon.classList.add("icon");
    emailInput.style.border = "1px solid red";
  }
}
