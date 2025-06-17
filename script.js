const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    // Clear all previous Error
    const allError = document.querySelectorAll(".error-message");
    allError.forEach(el => el.textContent = "");

    let hasError = false;

    // Clear all error borders
    const errorBorder = document.querySelectorAll("input, textarea");
    errorBorder.forEach(input => {
        if(input.type !== "checkbox" && input.type !== "radio") {
            input.classList.remove("error-border");
        }
    });

    // Grab First Name properties
    const firstName = document.querySelector("#firstname").value.trim();
    const firstnameInput = document.querySelector("#firstname"); // firsname input
    const firstnameError = document.getElementById("firstname-error")

    if(firstName === "") {
        firstnameError.textContent = "This field is required";
        firstnameInput.classList.add("error-border");
        hasError = true
    };

    // Grab Last Name properties
    const lastnameError = document.getElementById("lastname-error");
    const lastName = document.querySelector("#lastname").value.trim();
    const lastnameInput = document.querySelector("#lastname");

    if(lastName === "") {
        lastnameError.textContent = "This field is required";
        lastnameInput.classList.add("error-border");
        hasError = true;
    };

    // Grab email properties
    const email = document.querySelector("#email").value.trim();
    const emailInput = document.querySelector("#email");
    const emailError = document.getElementById("email-error");

    if (!email) {
        emailError.textContent = "Please enter a valid email address";
        emailInput.classList.add("error-border");
        hasError = true;
    } else if (email.length < 5 || email.length > 50) {
            emailError.textContent = "Email must be between 5 and 50 characters.";
            hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
        hasError = true;
    };

    // Query properties
    const query = document.querySelector("input[name='radio']:checked");
    const radioError = document.getElementById("radio-error");

    if(!query) {
        radioError.textContent = "Please select a query type";
        hasError = true;
    };

    // Message textbox
    const message = document.querySelector("#message").value.trim();
    const messageTextbox = document.querySelector("#message");
    const messageError = document.getElementById("message-error");

    if (message === ""){
        messageError.textContent = "This field is required";
        messageTextbox.classList.add("error-border")
        hasError = true;
    };

    // Consent property
    const consentError = document.getElementById("checkbox-error");
    const checkBox = document.querySelector("#checkbox").checked;

    if(!checkBox) {
        consentError.textContent = "To submit this form, please consent to being contacted"
        hasError = true;
    };

    // Success Message
    const successMsg = document.querySelector(".success-state");

    if(!hasError) {
        successMsg.style.display="block";
        form.reset()
        setTimeout(() => {
            successMsg.style.display = "none"
        }, 3000);
    }
})