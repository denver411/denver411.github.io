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