const form = document.querySelector('[data-form]');
const submitBtn = document.querySelector('[data-btn]');
const input = document.querySelector('[data-input]');

// Validate input and add invalid class to form if input is invalid
const validateEmail = (event) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(input.value) || input.value == '') {
        form.classList.add('invalid');
        event.preventDefault();
    } else {
        form.submit();
    }
}

submitBtn.addEventListener('click', validateEmail);

// Remove default tooltip/invalid from input
input.addEventListener('invalid', (event) => {
    event.preventDefault()
})

// Disable form submit on keydown and evoke validateEmail funcion.
form.addEventListener('keydown', (event) => {
    let enterKeyCode = 13;
    event.keyCode === enterKeyCode ? (event.preventDefault(), validateEmail()) : false;
});