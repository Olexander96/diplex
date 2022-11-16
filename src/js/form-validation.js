let form = document.querySelector('.feedback-form');
let formInputs = document.querySelectorAll('.js-input');
let inputText = document.querySelector('.js-input-text');
let inputEmail = document.querySelector('.js-input-email');


form.onsubmit = function() {
    let nameVal = inputText.value;
    let emailVal = inputEmail.value;

    function validateName(name) {
        let regex = /([a-zA-Z]){2,}/;
        return regex.test(String(name).toLowerCase());
    }

    if (nameVal !== '') {
        if (!validateName(nameVal)) {
            document.querySelector('.name--error').textContent = 'Name not valid! Example - Alex, John'
            inputText.classList.add('input--error');
            return false
        } else {
            inputText.classList.remove('input--error');
            document.querySelector('.name--error').textContent = '';
        }
    } else {
        document.querySelector('.name--error').textContent = 'Empty name field! '
        inputText.classList.add('input--error');
    }

    // перевірка email
    function validateEmail(email) {
        let regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z_-]+)/;
        return regex.test(String(email).toLowerCase())
    }

    if (emailVal !== '') {
        if (!validateEmail(emailVal)) {
            document.querySelector('.email--error').textContent = 'Email not valid! Example - alex96@gmail.com';
            inputEmail.classList.add('input--error');
            return false
        } else {
            inputEmail.classList.remove('input--error');
            document.querySelector('.email--error').textContent = '';
            return false
        }
    } else {
        document.querySelector('.email--error').textContent = 'Empty email field!';
        inputEmail.classList.add('input--error');
        return false
    } 
}