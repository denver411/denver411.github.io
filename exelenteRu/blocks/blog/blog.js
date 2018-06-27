'use strict'
let blogMenu = document.querySelectorAll('.blog__menu-item');
let blogNews = document.querySelectorAll('.blog__news-list');

console.log(blogNews[0], blogNews[1]);

if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {
  for (let i = 0; i < blogMenu.length; i++)  { 
    blogMenu[i].onclick = function () {
      let activeBlogMenu = document.querySelector('.blog__menu-item_active');
      let activeBlogNews = document.querySelector('.blog__news-list_active');
      activeBlogMenu.classList.remove('blog__menu-item_active');
      this.classList.add('blog__menu-item_active')
      activeBlogNews.classList.remove('blog__news-list_active');
      blogNews[i].classList.add('blog__news-list_active')
    }
  } 
} else {
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
}
