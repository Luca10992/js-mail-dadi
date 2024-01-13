const logAllowed = document.querySelector("#log-allowed");
const loginHome = document.querySelector("#login-home");
const form = document.querySelector("form");
const mailInput = document.querySelector("#mail-input");
const logDenied = document.querySelector("#log-denied");
const logButton = document.querySelector("#log-button");

logButton.addEventListener("click", function() {
    const mails = ["giovanni@mail.com", "romolo@mail.com", "gessica@mail.com", "luca@mail.com"];
    const mailValid = mailInput.value.toLowerCase().trim();
    
    for (let i = 0; i < mails.length; i++) {
        const mail = mails[i];

        if (mailValid == mail) {
            loginHome.classList.add("d-none");
            logAllowed.classList.remove("d-none");
        } else {
            logDenied.classList.remove("d-none");
            mailInput.classList.add("is-invalid")
        }
    }
} )