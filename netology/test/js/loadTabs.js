'use strict'
// console.log('test');

let dataLink = document.getElementsByClassName('active')[0].getAttribute('href');
let contentTarget = document.getElementById('content');
let onProgressIndicator = document.getElementById('preloader');
let buttons = Array.from(document.getElementsByClassName('tabs')[0].getElementsByTagName('a'));
let contentXhr = new XMLHttpRequest();
contentXhr.open("GET", dataLink, false);
contentXhr.addEventListener("loadstart", onLoadStart);
contentXhr.addEventListener("loadend", onLoadEnd);
contentXhr.send();
contentTarget.innerHTML = contentXhr.responseText;


function tabChange(event) {
  event.preventDefault();
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
  dataLink = event.currentTarget.getAttribute('href');
  contentXhr.open("GET", dataLink, false);
  contentXhr.send();
  contentTarget.innerHTML = contentXhr.responseText;
}

function onLoadStart() {
  onProgressIndicator.classList.remove('hidden');
}

function onLoadEnd() {
  onProgressIndicator.classList.add('hidden');
}

buttons.forEach(btn => {
  btn.addEventListener('click', tabChange);
});