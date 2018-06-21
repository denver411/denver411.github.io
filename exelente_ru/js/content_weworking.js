let contentWeworkingItemOne = document.querySelector(".content-weworking-item.content-weworking-item-1"),
    contentWeworkingItemTwo = document.querySelector(".content-weworking-item.content-weworking-item-2"),
    contentWeworkingItemThree = document.querySelector(".content-weworking-item.content-weworking-item-3"),
    contentWeworkingItemFour = document.querySelector(".content-weworking-item.content-weworking-item-4"),
    contentWeworkingItemFive = document.querySelector(".content-weworking-item.content-weworking-item-5");


contentWeworkingItemOne.querySelector(".content-weworking-item-text-ulist__list--open").onclick = function () {

    if (contentWeworkingItemOne.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
        let text = contentWeworkingItemOne.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "none"
        }
        contentWeworkingItemOne.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/open.svg) top left no-repeat";
        contentWeworkingItemOne.style.background = "#FFFFFF"
        contentWeworkingItemOne.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

    } else {
        let text = contentWeworkingItemOne.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "block"
        }
        contentWeworkingItemOne.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/close.svg) top left no-repeat";
        contentWeworkingItemOne.style.background = "#F7F7F7"
        contentWeworkingItemOne.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";
    }
}

contentWeworkingItemTwo.querySelector(".content-weworking-item-text-ulist__list--open").onclick = function () {

    if (contentWeworkingItemTwo.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
        let text = contentWeworkingItemTwo.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "none"
        }
        contentWeworkingItemTwo.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/open.svg) top left no-repeat";
        contentWeworkingItemTwo.style.background = "#FFFFFF"
        contentWeworkingItemTwo.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

    } else {
        let text = contentWeworkingItemTwo.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "block"
        }
        contentWeworkingItemTwo.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/close.svg) top left no-repeat";
        contentWeworkingItemTwo.style.background = "#F7F7F7"
        contentWeworkingItemTwo.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";
    }
}

contentWeworkingItemThree.querySelector(".content-weworking-item-text-ulist__list--open").onclick = function () {

    if (contentWeworkingItemThree.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
        let text = contentWeworkingItemThree.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "none"
        }
        contentWeworkingItemThree.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/open.svg) top left no-repeat";
        contentWeworkingItemThree.style.background = "#FFFFFF"
        contentWeworkingItemThree.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

    } else {
        let text = contentWeworkingItemThree.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "block"
        }
        contentWeworkingItemThree.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/close.svg) top left no-repeat";
        contentWeworkingItemThree.style.background = "#F7F7F7"
        contentWeworkingItemThree.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";
    }
}

contentWeworkingItemFour.querySelector(".content-weworking-item-text-ulist__list--open").onclick = function () {

    if (contentWeworkingItemFour.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
        let text = contentWeworkingItemFour.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "none"
        }
        contentWeworkingItemFour.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/open.svg) top left no-repeat";
        contentWeworkingItemFour.style.background = "#FFFFFF"
        contentWeworkingItemFour.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

    } else {
        let text = contentWeworkingItemFour.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "block"
        }
        contentWeworkingItemFour.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/close.svg) top left no-repeat";
        contentWeworkingItemFour.style.background = "#F7F7F7"
        contentWeworkingItemFour.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";
    }
}

contentWeworkingItemFive.querySelector(".content-weworking-item-text-ulist__list--open").onclick = function () {

    if (contentWeworkingItemFive.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
        let text = contentWeworkingItemFive.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "none"
        }
        contentWeworkingItemFive.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/open.svg) top left no-repeat";
        contentWeworkingItemFive.style.background = "#FFFFFF"
        contentWeworkingItemFive.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

    } else {
        let text = contentWeworkingItemFive.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
        for (var i = 0; i < text.length; i++) {
            text[i].style.display = "block"
        }
        contentWeworkingItemFive.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(../img/svg-content/close.svg) top left no-repeat";
        contentWeworkingItemFive.style.background = "#F7F7F7"
        contentWeworkingItemFive.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";
    }
}




