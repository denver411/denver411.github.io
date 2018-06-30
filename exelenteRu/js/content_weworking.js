
let allBlock = document.getElementsByClassName("content-weworking-item"),
buttons = document.getElementsByClassName("content-weworking-item-text-ulist__list--open");

function activeBlock() {
for (let i = 0; i < allBlock.length; i++) {
    if(allBlock[i] !== this) allBlock[i].classList.remove("content-weworking-item--active")
}
    this.classList.toggle("content-weworking-item--active")
}

for (let i = 0; i < allBlock.length; i++) {
    allBlock[i].onclick = activeBlock
}