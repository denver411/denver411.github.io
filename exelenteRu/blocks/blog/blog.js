'use strict'

// переключение по заголовкам
let blogMenu = Array.from(document.querySelectorAll('.blog__menu-item'));
let blogNews = Array.from(document.querySelectorAll('.blog__news-list'));
// if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {
//   blogMenu.forEach = Array.prototype.forEach;
// }

blogMenu.forEach(function (item, index) {
  item.onclick = function () {
    let activeBlogMenu = document.querySelector('.blog__menu-item_active');
    let activeBlogNews = document.querySelector('.blog__news-list_active');
    activeBlogMenu.classList.remove('blog__menu-item_active');
    this.classList.add('blog__menu-item_active')
    activeBlogNews.classList.remove('blog__news-list_active');
    blogNews[index].classList.add('blog__news-list_active')
  }
})

// переключение по кнопкам навигации

let blogClickNext = document.querySelector('.blog__navigation .navigation__arrow_right');
let blogClickPrev = document.querySelector('.blog__navigation .navigation__arrow_left');
let blogPosition = 0;

blogClickNext.onclick = function () {
  blogPosition = blogMenu.indexOf(document.querySelector('.blog__menu-item_active'));
  
  blogMenu[blogPosition].classList.remove('blog__menu-item_active');
  blogNews[blogPosition].classList.remove('blog__news-list_active');

  blogPosition++;
  if (blogPosition >= blogMenu.length) {
    blogPosition = 0;
  }
  
  blogMenu[blogPosition].classList.add('blog__menu-item_active');
  blogNews[blogPosition].classList.add('blog__news-list_active');
}

blogClickPrev.onclick = function () {
  blogPosition = blogMenu.indexOf(document.querySelector('.blog__menu-item_active'));
  
  blogMenu[blogPosition].classList.remove('blog__menu-item_active');
  blogNews[blogPosition].classList.remove('blog__news-list_active');

  blogPosition--;
  if (blogPosition < 0) {
    blogPosition = blogMenu.length - 1;
  }
  
  blogMenu[blogPosition].classList.add('blog__menu-item_active');
  blogNews[blogPosition].classList.add('blog__news-list_active');
}
