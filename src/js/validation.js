let form = document.querySelector('.feedback-form');
let formInputs = document.querySelectorAll('.js-input');
let inputText = document.querySelector('.js-input-text');
let inputEmail = document.querySelector('.js-input-email');


form.onsubmit = function() {
    let nameVal = inputText.value;
    let emailVal = inputEmail.value;
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '')

    // перевірка - чи заповнені inputs
    formInputs.forEach(function(input) {
        if (input.value === '') {
            input.classList.add('input--error')
        } else {
            input.classList.remove('input--error')
        }
    })

    if (emptyInputs.length !== 0) { // якщо пустих інпутів більше 0
        console.log('input not field');
        return false
    }

    // перевірка name

    function validateName(name) {
        let regex = /([a-zA-Z]){2,}/;
        return regex.test(String(name).toLowerCase());
    }

    if (!validateName(nameVal)) {
        document.querySelector('.name--error').textContent = 'name not valid!'
        console.log('name not valid');
        inputText.classList.add('input--error');
        return false
    } else {
        inputText.classList.remove('input--error');
        document.querySelector('.name--error').textContent = '';
    }

    // перевірка email
    function validateEmail(email) {
        let regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z_-]+)/;
        return regex.test(String(email).toLowerCase())
    }

    if (!validateEmail(emailVal)) {
        document.querySelector('.email--error').textContent = 'email not valid!';
        console.log('email not valid');
        inputEmail.classList.add('input--error');
        return false
    } else {
        inputEmail.classList.remove('input--error');
        document.querySelector('.email--error').textContent = '';
        return false
    }
    
}