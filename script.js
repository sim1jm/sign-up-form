const passwordInput = document.querySelector('input#password');
const confInput = document.querySelector('input#confirm-password');
const button = document.querySelector('button.submit-button');

let password;
let confPassword;

passwordInput.addEventListener('input', () => checkPassword());
confInput.addEventListener('input', () => checkPassword());


function checkPassword(password, confPassword) {
    password = passwordInput.value;    
    confPassword = confInput.value;

    if (password !== confPassword && !passwordInput.classList.contains('error')) {
        passwordInput.classList.add('error');
        confInput.classList.add('error');
        button.setAttribute('type', 'button');
    } else if (password === confPassword && passwordInput.classList.contains('error')) {
        passwordInput.classList.remove('error');
        confInput.classList.remove('error');
        button.setAttribute('type', 'submit');
    }
}
