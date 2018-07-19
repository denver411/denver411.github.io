//мобильная версия

let contentLoginMobileSign = document.querySelector('.content-login-mobile__sign'),
    contentLoginMobileLogin = document.querySelector('.content-login-mobile__login'),
    formSign = document.querySelector('.form-sign'),
    formLog = document.querySelector('.form-log'),
    mobileTitle = document.querySelector('.row.title.mobile')

contentLoginMobileSign.onclick = function () {
    formSign.style.display = "flex"
    formLog.style.display = "none"
    contentLoginMobileLogin.style.color = "#DF5E16"
    contentLoginMobileLogin.style.borderBottom = "2px dotted #DF5E16"
    contentLoginMobileSign.style.color = "#004391"
    contentLoginMobileSign.style.borderBottom = "none"
    mobileTitle.style.flexDirection = "row"
}
contentLoginMobileLogin.onclick = function () {
    formSign.style.display = "none"
    formLog.style.display = "flex"
    contentLoginMobileSign.style.color = "#DF5E16"
    contentLoginMobileSign.style.borderBottom = "2px dotted #DF5E16"
    contentLoginMobileLogin.style.color = "#004391"
    contentLoginMobileLogin.style.borderBottom = "none"
    mobileTitle.style.flexDirection = "row-reverse"
}

if (!(window.matchMedia("(min-width: 577px)").matches)) {
    contentLoginMobileLogin.click();
}

/* Валидация форм */
//loginPage

//Вход

const formLogin = document.querySelector('.content-login-form-log'),
    loginInputs = formLogin.querySelectorAll('.content-login-form-log__input'),
    logMail = formLogin.querySelector('.content-login-form-log__input[data-name="form-login-input-mail"]'),
    logPassword = formLogin.querySelector('.content-login-form-log__input[data-name="form-login-input-pass"]');
// Регистрация
const formsSign = document.querySelector('.content-login-form-sign'),
    signInputs = formsSign.querySelectorAll('.content-login-form-sign__input'),
    signSurname = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-surname"]'),
    signName = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-name"]'),
    signPhone = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-phone"]'),
    signMail = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-mail"]'),
    signPass = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-pass"]'),
    signReqpass = formsSign.querySelector('.content-login-form-sign__input[data-name="form-sign-input-reqpass"]'),
    signCheckBox = formsSign.querySelector('.content-login-form-sign-reg__check');


document.addEventListener('DOMContentLoaded', function(){
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault()
        removeValidation(formLogin)
        checkFieldsPresence(loginInputs)
        checkMailRegEx(logMail)
        checkPasswordMatch(logPassword)
    })

    formsSign.addEventListener('submit', function (event) {
        event.preventDefault()
        removeValidation(formsSign)
        checkFieldsPresence(signInputs)
        checkName(signSurname)
        checkName(signName)
        checkPhone(signPhone)
        checkMailRegEx(signMail)
        checkPasswordMatch(signPass)
        checkReqpass(signPass, signReqpass)
        reqCheckBox(signCheckBox)
    })

});
