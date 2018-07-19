//Регистрация

let bannerChosen = document.querySelector('.banner-chosen'),
    topBlockItemFavorite = document.querySelector('.top-block__item.top-block__item_favorite'),

    chosenContentClose = document.querySelector('.chosen-content__close'),
    hiddenMenuItemFavorite = document.querySelector('.hidden-menu__item_favorite');


//Корзина
let bannerBasket = document.querySelector('.banner-basket'),
    topBlockItemCart = document.querySelector('.top-block__item_cart'),
    basketContentClose = document.querySelector('.basket-content__close'),
    hiddenMenuItemCart = document.querySelector('.hidden-menu__item_cart'),
    basketContentUlistListLogin = document.querySelector('.basket-content-ulist-list__login');



document.addEventListener('DOMContentLoaded', function () {
    topBlockItemFavorite.addEventListener('click', function () {
        bannerChosen.classList.toggle('hidden');
    })
    bannerChosen.addEventListener('click', function (event) {
        if (event.target === bannerChosen) bannerChosen.classList.toggle('hidden');
    })
    chosenContentClose.addEventListener('click', function () {
        bannerChosen.classList.toggle('hidden');
    })
    hiddenMenuItemFavorite.addEventListener('click', function () {
        bannerChosen.classList.toggle('hidden');
    })

    topBlockItemCart.addEventListener('click', function () {
        bannerBasket.classList.toggle('hidden');
    })
    bannerBasket.addEventListener('click', function (event) {
        if (event.target === bannerBasket) bannerBasket.classList.toggle('hidden');
    })
    basketContentClose.addEventListener('click', function () {
        bannerBasket.classList.toggle('hidden');
    })
    hiddenMenuItemCart.addEventListener('click', function () {
        bannerBasket.classList.toggle('hidden');
    })
    basketContentUlistListLogin.addEventListener('click', function (event) {
        event.preventDefault();
        bannerBasket.classList.toggle('hidden');
    })

});