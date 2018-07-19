document.addEventListener('DOMContentLoaded', function () {
  const popupCity = document.querySelector('.top-block__city');
  const popupCityBlock = document.querySelector('.popup-city');
  const popupCityClose = document.querySelector('.popup-city__close');

  function popupCityVisible() {
    popupCityBlock.classList.add('popup-city_visible');
  }

  function popupCityHidden() {
    popupCityBlock.classList.remove('popup-city_visible');
    event.stopPropagation();
  }

  function popupCityHiddenEsc() {
    if (event.code === 'Escape') {
      popupCityHidden();
    }
  }

  document.addEventListener('keydown', popupCityHiddenEsc);
  popupCity.addEventListener('click', popupCityVisible);
  popupCityClose.addEventListener('click', popupCityHidden);
});