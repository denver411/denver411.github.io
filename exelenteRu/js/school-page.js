'use strict'

document.addEventListener('DOMContentLoaded', function () {
  let programItemList = document.querySelectorAll('.programs__list-item');
  let programItemInfo = document.querySelectorAll('.programs__info-item');

  if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {
    programItemList.forEach = Array.prototype.forEach;
  }

  programItemList.forEach(function (item, index) {
    item.onclick = function () {
      let activeItemList = document.querySelector('.programs__list-item_active');
      let activeItemInfo = document.querySelector('.programs__info-item_active');
      activeItemList.classList.remove('programs__list-item_active');
      this.classList.add('programs__list-item_active')
      activeItemInfo.classList.remove('programs__info-item_active');
      programItemInfo[index].classList.add('programs__info-item_active')
    }
  })

});