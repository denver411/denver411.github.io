let chosen = document.querySelector('.chosen'),
    topBlockItemLogin = document.querySelector('.top-block__item_login'),
    chosenContentClose = document.querySelector('.chosen-content__close'),
    hiddenMenuItemLogin = document.querySelector('.hidden-menu__item_login');





hiddenMenuItemLogin.onclick = function () {
    if (chosen.style.display == 'flex') chosen.style.display = 'none';
    else chosen.style.display = 'flex';
}
topBlockItemLogin.onclick = function () {
    if (chosen.style.display == 'flex') chosen.style.display = 'none';
    else chosen.style.display = 'flex';
}
chosenContentClose.onclick = function () {
    chosen.style.display = 'none';
    return false;
}