'use strict'

let imageClickNext = document.querySelector('.customer-reviews__navigation .navigation__arrow_right');
let imageClickPrev = document.querySelector('.customer-reviews__navigation .navigation__arrow_left');
let images = document.querySelectorAll('.customer-reviews__image');
let textBlocks = document.querySelectorAll('.customer-reviews__review-item');
let imagePosition = 0;

imageClickNext.onclick = function () {
  textBlocks[imagePosition].classList.remove('customer-reviews__review-item_active');
  images[imagePosition].classList.remove('customer-reviews__image_active');
  for (let i = 0; i < images.length; i++) {
    images[i].style.order = images.length;
  }
  imagePosition++;
  if (imagePosition >= images.length) {
    imagePosition = 0;
  }
  let j = imagePosition;
  for (let i = 0; i < 3; i++) {
    images[j].style.order = i;
    j++;
    if (j >= images.length) {
      j = 0;
    }
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  images[imagePosition].classList.add('customer-reviews__image_active');
}

imageClickPrev.onclick = function () {
  textBlocks[imagePosition].classList.remove('customer-reviews__review-item_active');
  images[imagePosition].classList.remove('customer-reviews__image_active');
  for (let i = 0; i < images.length; i++) {
    images[i].style.order = images.length;
  }
  imagePosition--;
  if (imagePosition < 0) {
    imagePosition = images.length - 1;
  }
  let j = imagePosition;
  for (let i = 0; i < 3; i++) {
    images[j].style.order = i;
    j++;
    if (j >= images.length) {
      j = 0;
    }
  }
  textBlocks[imagePosition].classList.add('customer-reviews__review-item_active');
  images[imagePosition].classList.add('customer-reviews__image_active');
}