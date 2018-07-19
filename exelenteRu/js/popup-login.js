//popup меню регистрации/личного кабинета

let topBlockItemLogin = document.querySelector('.top-block__item_login'),
    login = document.querySelector('.login'),
    loginContentClose = document.querySelector('.login-content__close'),
hiddenMenuItemLogin = document.querySelector('.hidden-menu__item_login');



//Валидация

const formPopupLogin = document.querySelector('.login-content-form'),
    formPopupInputs = formPopupLogin.querySelectorAll('input'),
    formPopupMail = formPopupLogin.querySelector('.login-content-form__mail-input'),
    formPopupPassword = formPopupLogin.querySelector('.login-content-form__pass-input');

document.addEventListener('DOMContentLoaded', function () {

    topBlockItemLogin.addEventListener('click', function () {
        login.classList.toggle('hidden');
    })
    loginContentClose.addEventListener('click', function () {
        login.classList.toggle('hidden');
    })
    hiddenMenuItemLogin.addEventListener('click', function () {
        login.classList.toggle('hidden');
    })

    formPopupLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        removeValidation(formPopupLogin);
        checkFieldsPresence(formPopupInputs);
        checkMailRegEx(formPopupMail);
        checkPasswordMatch(formPopupPassword);
    })
});