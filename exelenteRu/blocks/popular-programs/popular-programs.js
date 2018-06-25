'use strict'

let programClickPrev = document.querySelector('.popular-programs__navigation .navigation__arrow_left');
let programClickNext = document.querySelector('.popular-programs__navigation .navigation__arrow_right');
let programs = document.querySelectorAll('.item-card');
let programPosition = 1;

programClickNext.onclick = function () {
  programs[programPosition].classList.remove('item-card_active');
  for (let i = 0; i < programs.length; i++) {
    programs[i].style.order = programs.length;
  }
  programs[programPosition].style.order = -1;
  programPosition++;
  if (programPosition >= programs.length) {
    programPosition = 0;
  }
  let j = programPosition;
  for (let i = 0; i < 3; i++) {
    programs[j].style.order = i;
    j++;
    if (j >= programs.length) {
      j = 0;
    }
  }
  programs[programPosition].classList.add('item-card_active');
}

programClickPrev.onclick = function () {
  programs[programPosition].classList.remove('item-card_active');
  for (let i = 0; i < programs.length; i++) {
    programs[i].style.order = programs.length;
  }
  programPosition--;
  if (programPosition < 0) {
    programPosition = programs.length - 1;
  }
  let j = programPosition;
  for (let i = 0; i < 3; i++) {
    programs[j].style.order = i;
    j++;
    if (j >= programs.length) {
      j = 0;
    }
  }
  programs[programPosition].classList.add('item-card_active');
}