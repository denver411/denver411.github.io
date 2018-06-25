'use strict'
if (document.documentElement.clientWidth < 577) {
  let countriesClickPrev = document.querySelector('.countries__navigation .navigation__arrow_left');
  let countriesClickNext = document.querySelector('.countries__navigation .navigation__arrow_right');
  let countries = document.querySelectorAll('.countries__list-item');
  let activeCountryIndex = 0;

  countriesClickNext.onclick = function () {
    countries[activeCountryIndex].classList.remove('countries__mobile-active');
    activeCountryIndex++;
    if (activeCountryIndex >= countries.length) {
      activeCountryIndex = 0;
    }
    countries[activeCountryIndex].classList.add('countries__mobile-active')
  }

  countriesClickPrev.onclick = function () {
    countries[activeCountryIndex].classList.remove('countries__mobile-active');
    activeCountryIndex--;
    if (activeCountryIndex < 0) {
      activeCountryIndex = countries.length - 1;
    }
    countries[activeCountryIndex].classList.add('countries__mobile-active')
  }
}