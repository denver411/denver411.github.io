'use strict'
let blogMenu = document.querySelectorAll('.blog__menu-item');
let blogNews = document.querySelectorAll('.blog__news-list');

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