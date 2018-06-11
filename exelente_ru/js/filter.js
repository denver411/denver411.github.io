window.onload = function () {
let sidebarPartButtonProg = document.querySelector('.sidebar__part-button-prog'),
    sidebarPartButtonSpec = document.querySelector('.sidebar__part-button-spec'),
    sidebarPartButtonCount = document.querySelector('.sidebar__part-button-count'),
    chooseProgramCheckboxes = document.querySelector('.choose-program__checkboxes'),
    chooseSpecialtyCheckboxes = document.querySelector('.choose-specialty__checkboxes'),
    chooseCountryCheckboxes = document.querySelector('.choose-country__checkboxes'),
    showAll = document.querySelector('.show-all'),
    arrowProg = document.querySelector('.arrow-prog'),
    arrowSpec = document.querySelector('.arrow-spec'),
    arrowCount = document.querySelector('.arrow-count');

sidebarPartButtonProg.onclick = function () {
    if (chooseProgramCheckboxes.style.display == 'block') {
        chooseProgramCheckboxes.style.display = 'none';
        arrowProg.style.transform = 'rotate(0deg)';
    } else {
        chooseProgramCheckboxes.style.display = 'block';
        arrowProg.style.transform = 'rotate(180deg)';
    }
}
sidebarPartButtonSpec.onclick = function () {
    if (chooseSpecialtyCheckboxes.style.display == 'block') {
        chooseSpecialtyCheckboxes.style.display = 'none';
        arrowSpec.style.transform = 'rotate(0deg)';
    } else {
        chooseSpecialtyCheckboxes.style.display = 'block';
        arrowSpec.style.transform = 'rotate(180deg)';
    }
}
sidebarPartButtonCount.onclick = function () {
    if (chooseCountryCheckboxes.style.display == 'block') {
        chooseCountryCheckboxes.style.display = 'none';
        arrowCount.style.transform = 'rotate(0deg)';
    } else {
        chooseCountryCheckboxes.style.display = 'block';
        arrowCount.style.transform = 'rotate(180deg)';
    }
}
showAll.onclick = function () {
    chooseProgramCheckboxes.style.display = 'block';
    chooseSpecialtyCheckboxes.style.display = 'block';
    chooseCountryCheckboxes.style.display = 'block';
    arrowProg.style.transform = 'rotate(180deg)';
    arrowSpec.style.transform = 'rotate(180deg)';
    arrowCount.style.transform = 'rotate(180deg)';
    return false;
}}