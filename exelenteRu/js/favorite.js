//Регистрация

let bannerChosen = document.querySelector('.banner-chosen'),
    topBlockItemFavorite = document.querySelector('.top-block__item_favorite'),
    chosenContentClose = document.querySelector('.chosen-content__close'),
    hiddenMenuItemFavorite = document.querySelector('.hidden-menu__item_favorite');


topBlockItemFavorite.onclick = function () {
    bannerChosen.style.display = "block"
}
chosenContentClose.onclick = function () {
    bannerChosen.style.display = 'none';
    return false;
}
hiddenMenuItemFavorite.onclick = function () {
    bannerChosen.style.display = "block"
}

//Корзина
let bannerBasket = document.querySelector('.banner-basket'),
    topBlockItemCart = document.querySelector('.top-block__item_cart'),
    basketContentClose = document.querySelector('.basket-content__close'),
    hiddenMenuItemCart = document.querySelector('.hidden-menu__item_cart');

topBlockItemCart.onclick = function () {
    bannerBasket.style.display = 'block';
}
basketContentClose.onclick = function () {
    bannerBasket.style.display = 'none';
    return false;
}
hiddenMenuItemCart.onclick = function () {
    bannerBasket.style.display = 'block';
}