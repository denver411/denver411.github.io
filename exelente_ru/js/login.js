//popup меню регистрации/личного кабинета

let topBlockItemLogin = document.querySelector('.top-block__item_login'),
    login = document.querySelector('.login'),
    loginContentClose = document.querySelector('.login-content__close'),
    userPage = document.querySelector('.userpage'),
    userPageClose = document.querySelector('.userpage__close'),
    userPageUlistListItemExit = document.querySelector('.userpage-ulist__list-item--exit');
    hiddenMenuItemLogin = document.querySelector('.hidden-menu__item_login');





    //Для декстоп шапки
topBlockItemLogin.onclick = function () {
    if (topBlockItemLogin.textContent == "Вход/ Регистрация") {
        if (login.style.display == "block") login.style.display = "none"
        else login.style.display = "block"
    } else {
        if (userPage.style.display == "block") userPage.style.display = "none"
        else userPage.style.display = "block"
    }
}
userPageClose.onclick = function () {
    if (userPage.style.display == "none") userPage.style.display = "block"
    else userPage.style.display = "none"
}

loginContentClose.onclick = function () {
    if (login.style.display == "none") login.style.display = "block"
    else login.style.display = "none"
}
//Для скрытого 
hiddenMenuItemLogin.onclick = function () {
    if (hiddenMenuItemLogin.textContent == "Вход/ Регистрация") {
        if (login.style.display == "block") login.style.display = "none"
        else login.style.display = "block"
    } else {
        if (userPage.style.display == "block") userPage.style.display = "none"
        else userPage.style.display = "block"
    }
}
//мобильная версия
let contentLoginMobileSign = document.querySelector('.content-login-mobile__sign'),
    contentLoginMobileLogin = document.querySelector('.content-login-mobile__login'),
    formSign = document.querySelector('.form-sign'),
    formLog = document.querySelector('.form-log');

contentLoginMobileSign.onclick = function () {
    formSign.style.display = "flex"
    formLog.style.display = "none"
}
contentLoginMobileLogin.onclick = function () {
    formSign.style.display = "none"
    formLog.style.display = "flex"
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
        return false;
    } else {
        document.querySelector('.content-login-form-log__input[name="mail"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-log__label--error[for="mail"]').style.display = "none";
    }
}

//Регистрация

let sign = document.querySelector('.content-login-form-sign__button');
sign.onclick = function () {
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
        return false;
    } else {
        document.querySelector('.content-login-form-sign__input[name="surname"]').style.background = "#5ac82e24";
    }
    if (!(/^(([A-zА-я]+[\s]{1}[A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+[\s]{1}[A-zА-я]+)|([A-zА-я]+))$/).test(signData.name)) {
        document.querySelector('.content-login-form-sign__input[name="name"]').style.background = "#c82e2e24";
        return false;
    } else {
        document.querySelector('.content-login-form-sign__input[name="name"]').style.background = "#5ac82e24";
    }
    if (!(/^\+7\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}$/).test(signData.phone)) {
        document.querySelector('.content-login-form-sign__input[name="phone"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="phone"]').style.display = "block";
        return false;
    } else {
        document.querySelector('.content-login-form-sign__input[name="phone"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="phone"]').style.display = "none";
    }
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(signData.mail)) {
        document.querySelector('.content-login-form-sign__input[name="mail"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="mail"]').style.display = "block";
        return false;
    } else {
        document.querySelector('.content-login-form-sign__input[name="mail"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="mail"]').style.display = "none";
    }

    if (!(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{6,50}/g).test(signData.pass)) {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="pass"]').style.display = "block";
        return false;
    } else {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="pass"]').style.display = "none";
    }
    if (signData.pass !== signData.reqpass) {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__input[name="reqpass"]').style.background = "#c82e2e24";
        document.querySelector('.content-login-form-sign__label--error[for="reqpass"]').style.display = "block";
        return false;
    }
    else {
        document.querySelector('.content-login-form-sign__input[name="pass"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__input[name="reqpass"]').style.background = "#5ac82e24";
        document.querySelector('.content-login-form-sign__label--error[for="reqpass"]').style.display = "none";
    }
}