const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", () => {
        let allValid = true;

        let firstName = document.getElementById("txtFirstName");
        let errorFirstName = document.getElementById("errorFirstName");
        if (firstName.value.trim().length > 30) {
            firstName.classList.add("error");
            errorFirstName.textContent = "max. 30 characters";
            errorFirstName.classList.remove("hidden");
            allValid = false;
        } else {
            firstName.classList.remove("error");
            errorFirstName.classList.add("hidden");
        }

        let lastName = document.getElementById("txtLastName");
        let errorLastName = document.getElementById("errorLastName");
        if (lastName.value.trim().length > 50) {
            lastName.classList.add("error");
            errorLastName.textContent = "max 50 characters";
            allValid = false;
        } else if (lastName.value.trim() === "") {
            lastName.classList.add("error");
            errorLastName.textContent = "required field";
            allValid = false;
        } else {
            lastName.classList.remove("error");
            errorLastName.classList.add("hidden");
        }

        let birthDate = document.getElementById("dateBirth");
        let errorBirthDate = document.getElementById("errorBirthDate");
        if (birthDate.value === "" || !/^\d{4}-\d{2}-\d{2}$/.test(birthDate.value)) {
            birthDate.classList.add("error");
            errorBirthDate.textContent = birthDate.value === "" ? "required field" : "format should be yyyy-mm-dd";
            allValid = false;
        } else {
            birthDate.classList.remove("error");
            errorBirthDate.classList.add("hidden");
        }

        let email = document.getElementById("txtEmail");
        let errorEmail = document.getElementById("errorEmail");
        const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
            email.classList.add("error");
            errorEmail.textContent = email.value.trim() === "" ? "required field" : "invalid email address";
            allValid = false;
        } else {
            email.classList.remove("error");
            errorEmail.classList.add("hidden");
        }

        let children = document.getElementById("numChildren");
        let errorChildren = document.getElementById("errorChildren");
        if (children.value < 0 || children.value >= 99) {
            children.classList.add("error");
            errorChildren.textContent = children.value < 0 ? "must be a positive number" : "too many children";
            allValid = false;
        } else {
            children.classList.remove("error");
            errorChildren.classList.add("hidden");
        }

        if (allValid) alert("Congratulations!");
    });
}

window.addEventListener("load", setup);
