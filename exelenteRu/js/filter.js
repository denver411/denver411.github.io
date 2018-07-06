let sidebarPart = document.getElementsByClassName('sidebar__part'),
    buttonOpenShowAll = document.querySelectorAll('.show-all'),
    buttonOpen = document.querySelectorAll('.sidebar__part-button');


function hiddenAllListItems() {
    sidebarPart.forEach = Array.prototype.forEach
    sidebarPart.forEach(function (elem) {
        let listItems = elem.querySelectorAll('li');
        for (let i = 8; i < listItems.length; i++) {
            listItems[i].classList.toggle('hidden')
        }
    })
}

document.addEventListener('DOMContentLoaded', hiddenAllListItems);

function openAllListItems(event) {
    event.preventDefault();
    let listItems = event.currentTarget.parentNode.querySelectorAll("li")
    for (let i = 8; i < listItems.length; i++) {
        listItems[i].classList.toggle('hidden')
    }
    event.currentTarget.innerHTML = listItems[8].classList.contains('hidden') ?
        'показать все' :
        'скрыть';
}

function openList(event) {
    let list = event.currentTarget.parentNode.querySelector("ul")
    list.classList.toggle('hidden')
    event.currentTarget.parentNode.querySelector(".show-all").classList.toggle('hidden')
    let arrow = event.currentTarget.querySelector(".sidebar-arrow")
    event.currentTarget.querySelector(".sidebar-arrow").style.transform = list.classList.contains('hidden') ?
        'rotate(0deg)' :
        'rotate(180deg)';
}
buttonOpen.forEach = Array.prototype.forEach
buttonOpenShowAll.forEach = Array.prototype.forEach

buttonOpen.forEach((function (element) {
    element.addEventListener('click', openList)
}))

buttonOpenShowAll.forEach(function (element) {
    element.addEventListener('click', openAllListItems)
})