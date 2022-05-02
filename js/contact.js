const contactForm = document.querySelector("form");

const name = document.querySelector("#name");
const subjects = document.querySelector("#subjects");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(e);

    let error = false;
    
    if (name.value == "") error = true;
    else if (subjects.value.length < 10) error = true;
    else if (email.value == < "") error = true;
    else if (address.value.length < 25) error = true;

    if (error) {
        const error = document.createElement("strong");
        error.innerText = "Invalid";

        contactForm.appendChild(error);
    }
})
