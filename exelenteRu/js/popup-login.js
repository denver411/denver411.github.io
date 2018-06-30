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

//Для скрытого меню

if (!(window.matchMedia("(min-width: 577px)").matches)) {
    // Если мобильная версия
    hiddenMenuItemLogin.onclick = function () {
        location.href = 'login.html';
    }
} else {
    // Если декстоп
    hiddenMenuItemLogin.onclick = function () {
        if (hiddenMenuItemLogin.textContent == "Вход/ Регистрация") {
            if (login.style.display == "block") login.style.display = "none"
            else login.style.display = "block"
        } else {
            if (userPage.style.display == "block") userPage.style.display = "none"
            else userPage.style.display = "block"
        }
    }
}

//Валидация
let popupLogin = document.querySelector('.login-content-ulist-list__login');
popupLogin.onclick = function () {
    let loginData = {
        mail: document.querySelector('.login-content-form__mail-input').value,
        pass: document.querySelector('.login-content-form__pass-input').value
    }
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(loginData.mail)) {
        document.querySelector('.login-content-form__mail-input').style.background = "#c82e2e24";
        document.querySelector('.login-content-form__mail-input--error').style.display = "block";
        return false;
    } else {
        document.querySelector('.login-content-form__mail-input').style.background = "#5ac82e24";
        document.querySelector('.login-content-form__mail-input--error').style.display = "none";
    }
}