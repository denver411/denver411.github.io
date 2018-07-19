'use strict'


let generateError = function (text, input) {
    let error =  input.nextElementSibling
    error.className = 'form--error';
    error.textContent = text;

}
let removeValidation = function (form) {
    let errors = form.querySelectorAll('.form--error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = '';
    }
}



let checkFieldsPresence = function (inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            generateError('Поле не может быть пустым', inputs[i]);
        }
    }
}

let checkMailRegEx = function (input) {
    if (input.value.length === 0) return;
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(input.value)) {
        generateError('Поле заполнено с ошибкой', input);
    }
}


let checkPasswordMatch = function (input) {
    if (input.value.length === 0) return;
    if (input.value.length < 6) {
        generateError('Пароль не может быть меньше 6 символов', input);
    }
}

let checkName = function(input) {
    if (input.value.length === 0) return;
    if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(input.value)) {
        generateError('Недопустимые символы', input);
    }
}
let checkPhone = function(input) {
    if (input.value.length === 0) return;
    if (!(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/).test(input.value)) {
        generateError('Поле заполнено с ошибкой', input);
    }
}
let checkReqpass = function(inputPas, inputReqPas) {
    if (inputReqPas.value.length === 0) return;
    if (inputReqPas.value !== inputPas.value) {
        generateError('Введенные пароли не совпадают', inputReqPas);
    }
}
let reqCheckBox = function(input) {
    if (!input.checked) {
        formsSign.querySelector('.content-login-form-sign-reg__check-cust').style.background = '#c82e2e24';
    }
}

