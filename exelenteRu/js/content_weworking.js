let contentWeworking = document.querySelector(".content-weworking");
let allBlock = document.querySelectorAll(".content-weworking-item");

contentWeworking.onclick = function (event) {
    // Декстоп
    if (screen.width > 576) {
        if (!event.target.classList.contains('content-weworking-item-text-ulist__list--open')) return;
        let item = event.target.closest('.content-weworking-item')
        // Закрытыие блока
        if (item.querySelector(".content-weworking-item-text-ulist__list-desc")
            .style.display == "block") {
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "none"
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/open.svg) top left no-repeat";
            item.style.background = "#FFFFFF"
            item.style.boxShadow = "none"
            item.style.zIndex = "0"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";
            item.querySelector(".content-weworking-item-text-ulist__list").style.color = "#004391";
            switch (item.querySelector(".content-weworking-item-text-ulist-img").src.substring(item.querySelector(".content-weworking-item-text-ulist-img").src.lastIndexOf("/") + 1)) {
                case "conversation-white.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/conversation.svg"
                    break
                case "kurator-white.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/kurator.svg"
                    break
                case "docs-white.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/docs.svg"
                    break
                case "search-white.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/search.svg"
                    break
                case "wallet-white.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/wallet.svg"
                    break
            }

        }
        // Открытие блока
        else {
            for (let block of allBlock) {
                if (block != item) {
                    let text = block.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
                    for (var i = 0; i < text.length; i++) {
                        text[i].style.display = "none"
                    }
                    block.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/open.svg) top left no-repeat";
                    block.style.background = "#FFFFFF"
                    block.style.boxShadow = "none"
                    block.style.zIndex = "0"
                    block.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";
                    block.querySelector(".content-weworking-item-text-ulist__list").style.color = "#004391";
                    switch (block.querySelector(".content-weworking-item-text-ulist-img").src.substring(block.querySelector(".content-weworking-item-text-ulist-img").src.lastIndexOf("/") + 1)) {
                        case "conversation-white.svg":
                            block.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/conversation.svg"
                            break
                        case "kurator-white.svg":
                            block.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/kurator.svg"
                            break
                        case "docs-white.svg":
                            block.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/docs.svg"
                            break
                        case "search-white.svg":
                            block.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/search.svg"
                            break
                        case "wallet-white.svg":
                            block.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/wallet.svg"
                            break
                    }
                }
            }
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "block"
            }
            switch (item.querySelector(".content-weworking-item-text-ulist-img").src.substring(item.querySelector(".content-weworking-item-text-ulist-img").src.lastIndexOf("/") + 1)) {
                case "conversation.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/conversation-white.svg"
                    break
                case "kurator.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/kurator-white.svg"
                    break
                case "docs.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/docs-white.svg"
                    break
                case "search.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/search-white.svg"
                    break
                case "wallet.svg":
                    item.querySelector(".content-weworking-item-text-ulist-img").src = "img/svg-content/wallet-white.svg"
                    break
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/slider_content/close-white.png) top left no-repeat";
            item.style.background = "#004391"
            item.style.boxShadow = "7px 7px 10px rgba(0, 67, 145, 0.3)"
            item.style.zIndex = "100"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";
            item.querySelector(".content-weworking-item-text-ulist__list").style.color = "#FFFFFF";
        }
    }
    // Мобильная версия
    else {
        if (!event.target.classList.contains('content-weworking-item-text-ulist__list--open')) return;
        let item = event.target.closest('.content-weworking-item')
        // Закрытие блока

        if (item.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "none"
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/open.svg) top left no-repeat";
            item.style.background = "#FFFFFF"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";
        }
        // Открытие блока
        else {
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "block"
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/close.svg) top left no-repeat";
            item.style.background = "#F7F7F7"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "43px";

        }
    }
}

document.querySelector('.content-weworking-item-1-text-ulist__list--open').click();