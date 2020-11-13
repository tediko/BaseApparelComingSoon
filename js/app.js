const form = document.querySelector('[data-form]');
const submitBtn = document.querySelector('[data-btn]');
const input = document.querySelector('[data-input]');

// Validate input and add invalid class to form if input is invalid
const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(input.value)) {
        form.classList.add('invalid');
    }
}

submitBtn.addEventListener('click', validateEmail);

// Remove default tooltip/invalid from input
input.addEventListener('invalid', (event) => {
    event.preventDefault()
})