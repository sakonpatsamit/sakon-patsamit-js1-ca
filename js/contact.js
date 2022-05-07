const form = document.querySelector("form");

const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

const errorName = document.querySelector("#errorName");
const errorSubject = document.querySelector("#errorSubject");
const errorEmail = document.querySelector("#errorEmail");
const errorAddress = document.querySelector("#errorAddress");

const emailPattern = /\S+@\S+\.\S+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorName.innerText = "";
  errorSubject.innerText = "";
  errorEmail.innerText = "";
  errorAddress.innerText = "";

  if (name.value == "") {
    errorName.innerText = "Write a name";
  }

  if (subject.value.length < 10) {
    errorSubject.innerText = "Less than 10 characters not allowed";
  }

  if (!emailPattern.test(email.value)) {
    errorEmail.innerText = "Provide email-address";
  }

  if (address.value.length < 25) {
    errorAddress.innerText = "Address must be atleast 25 characters";
  }
});
