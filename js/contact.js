const contactForm = document.querySelector("form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const emailPattern = "/S+@S+.S+/";

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  nameError.innerText = "";
  subjectError.innerText = "";
  emailError.innerText = "";
  addressError.innerText = "";

  let error = false;

  if (name.value == "") {
    error = true;
    nameError.innerText = "Write a name";
  }

  if (!subject.value || subject.value.length < 10) {
    error = true;
    subjectError.innerText = "Less than 10 characters not allowed";
  }

  if (email.value == "" || emailPattern.test(email.value)) {
    error = true;
    emailError.innerText = "Provide email-address";
  }

  if (!address.value || address.value.length < 25) {
    error = true;
    addressError.innerText = "Address must be atleast 25 characters";
  }
});
