//SLIDER
let slide = document.querySelectorAll('.slider__item');
document.querySelector('.slider-navigation__count_all').innerHTML = '0' + slide.length;
let slideClickNext = document.querySelector('.slider-navigation__arrow_right');
let slideClickPrev = document.querySelector('.slider-navigation__arrow_left');
var i = 0;
document.querySelector('.slider-navigation__count_this').innerHTML = '0' + (i + 1);
slide[i].style.zIndex = '1';
slideClickNext.onclick = function () {
  slide[i].style.zIndex = '0';
  slide[i].style.opacity = '0';
  i++;
  if (i >= slide.length) {
    i = 0;
  }
  document.querySelector('.slider-navigation__count_this').innerHTML = '0' + (i + 1);
  slide[i].style.zIndex = '1';
  slide[i].style.opacity = '1';
}
slideClickPrev.onclick = function () {
  slide[i].style.zIndex = '0';
  slide[i].style.opacity = '0';
  i--;
  if (i < 0) {
    i = slide.length - 1;
  }
  document.querySelector('.slider-navigation__count_this').innerHTML = '0' + (i + 1);
  slide[i].style.zIndex = '1';
  slide[i].style.opacity = '1';
}
//SLIDER END