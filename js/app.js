"use strict";
const input = document.getElementById("email");
const errorMsg = document.querySelector(".form__error-msg");
const errorImg = document.querySelector(".form__error-img");
const okImg = document.querySelector(".form__ok-img");
const btnSubmit = document.querySelector(".btn__submit");
let pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function matchingPattern() {
  if (!input.value.match(pattern)) {
    errorMsg.style.display = "block";
    errorImg.style.display = "block";
    setTimeout(() => {
      errorMsg.style.display = "none";
      errorImg.style.display = "none";
      input.value = "";
    }, 5000);
  } else {
    okImg.style.display = "block";
    input.placeholder = "Thank you";
    setTimeout(() => {
      okImg.style.display = "none";
      input.placeholder = "Email Address";
    }, 3000);
    input.value = "";
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  matchingPattern();
});
