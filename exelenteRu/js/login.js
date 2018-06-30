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
let loginDecstop = document.querySelector('.content-login-form-log__button');
loginDecstop.onclick = function () {
    let loginData = {
        mail: document.querySelector('.content-login-form-log__input[name="mail"]').value,
        pass: document.querySelector('.content-login-form-log__input[name="pass"]').value
    }
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(loginData.mail)) {
        document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "block";
        //return false;
    } else {
        document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "none";
    }
}

//Регистрация

let sign = document.querySelector('.content-login-form-sign__button');
sign.onclick = function () {
    let countError = 0;
    let signData = {
        phone: document.querySelector('.content-login-form-sign__input[name="phone"]').value,
        mail: document.querySelector('.content-login-form-sign__input[name="mail"]').value,
        pass: document.querySelector('.content-login-form-sign__input[name="pass"]').value,
        reqpass: document.querySelector('.content-login-form-sign__input[name="reqpass"]').value,
        surname: document.querySelector('.content-login-form-sign__input[name="surname"]').value,
        name: document.querySelector('.content-login-form-sign__input[name="name"]').value

    }

    if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(signData.surname)) {
        document.querySelector('.content-login-form-sign__input[name="surname"]').style.background = "#c82e2e24";
        countError++
    } else {
        document.querySelector('.content-login-form-sign__input[name="surname"]').style.background = "#5ac82e24";
    }
    if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(signData.name)) {
        document.querySelector('.content-login-form-sign__input[name="name"]').style.background = "#c82e2e24";
        countError++
    } else {
        document.querySelector('.content-login-form-sign__input[name="name"]').style.background = "#5ac82e24";
    }
    if (!(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/).test(signData.phone)) {
        document.querySelector('.content-login-form-sign__input[name="phone"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="phone"]').style.display = "block";
        countError++
    } else {
        document.querySelector('.content-login-form-sign__input[name="phone"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="phone"]').style.display = "none";
    }
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(signData.mail)) {
        document.querySelector('.content-login-form-sign__input[name="mail"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="mail"]').style.display = "block";
        countError++
    } else {
        document.querySelector('.content-login-form-sign__input[name="mail"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="mail"]').style.display = "none";
    }

    if (!(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,50}/g).test(signData.pass)) {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="pass"]').style.display = "block";
        countError++
    } else {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="pass"]').style.display = "none";
    }
    if (signData.pass !== signData.reqpass || signData.pass.length < 6) {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__input[name="reqpass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="reqpass"]').style.display = "block";
        countError++
    } else {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__input[name="reqpass"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="reqpass"]').style.display = "none";
    }

    if (countError > 0) return false;
}