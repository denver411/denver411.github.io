//SLIDER
let slide = document.querySelectorAll('.slider__item');
document.querySelector('.slider-navigation__count_all').innerHTML = '0' + slide.length;
let slideClickNext = document.querySelector('.slider-navigation__arrow_right');
let slideClickPrev = document.querySelector('.slider-navigation__arrow_left');
let sliderIndex = 0;
document.querySelector('.slider-navigation__count_this').innerHTML = '0' + (sliderIndex + 1);
slide[sliderIndex].style.zIndex = '2';
slideClickNext.onclick = function () {
  slide[sliderIndex].style.zIndex = '0';
  slide[sliderIndex].style.opacity = '0';
  sliderIndex++;
  if (sliderIndex >= slide.length) {
    sliderIndex = 0;
  }
  document.querySelector('.slider-navigation__count_this').innerHTML = '0' + (sliderIndex + 1);
  slide[sliderIndex].style.zIndex = '2';
  slide[sliderIndex].style.opacity = '1';
}
slideClickPrev.onclick = function () {
  slide[sliderIndex].style.zIndex = '0';
  slide[sliderIndex].style.opacity = '0';
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = slide.length - 1;
  }
  document.querySelector('.slider-navigation__count_this').innerHTML = '0' + (sliderIndex + 1);
  slide[sliderIndex].style.zIndex = '2';
  slide[sliderIndex].style.opacity = '1';
}
//SLIDER END