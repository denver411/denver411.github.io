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

//Добавил скрипты для корзины

let basket = document.querySelector('.basket'),
    topBlockItemCart = document.querySelector('.top-block__item_cart'),
    basketContentClose = document.querySelector('.basket-content__close'),
    hiddenMenuItemCart = document.querySelector('.hidden-menu__item_cart');

hiddenMenuItemCart.onclick = function () {
    if (basket.style.display == 'flex') basket.style.display = 'none';
    else basket.style.display = 'flex';
}
topBlockItemCart.onclick = function () {
    if (basket.style.display == 'flex') basket.style.display = 'none';
    else basket.style.display = 'flex';
}
basketContentClose.onclick = function () {
    basket.style.display = 'none';
    return false;
}