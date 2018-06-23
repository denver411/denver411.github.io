let contentWeworking = document.querySelector(".content-weworking");

contentWeworking.onclick = function (event) {
    if (screen.width > 576) {
        if (!event.target.classList.contains('content-weworking-item-text-ulist__list--open')) return;
        let item = event.target.closest('.content-weworking-item')
        if (item.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
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
            switch(item.querySelector(".content-weworking-item-text-ulist-img").src.substring(item.querySelector(".content-weworking-item-text-ulist-img").src.lastIndexOf("/") + 1)) {
                case "conversation-white.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/conversation.png"
                break
                case "kurator-white.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/kurator.png"
                break
                case "docs-white.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/docs.png"
                break
                case "search-white.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/search.png"
                break
                case "wallet-white.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/wallet.png"
                break
            }

        } else {
            console.log(item.querySelector(".content-weworking-item-text-ulist-img").src.substring(item.querySelector(".content-weworking-item-text-ulist-img").src.lastIndexOf("/") + 1))
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "block"
            }
            switch(item.querySelector(".content-weworking-item-text-ulist-img").src.substring(item.querySelector(".content-weworking-item-text-ulist-img").src.lastIndexOf("/") + 1)) {
                case "conversation.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/conversation-white.png"
                break
                case "kurator.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/kurator-white.png"
                break
                case "docs.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/docs-white.png"
                break
                case "search.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/search-white.png"
                break
                case "wallet.png":
                item.querySelector(".content-weworking-item-text-ulist-img").src = "img/slider_content/wallet-white.png"
                break
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/slider_content/close-white.png) top left no-repeat";
            item.style.background = "#004391"
            item.style.boxShadow = "7px 7px 10px rgba(0, 67, 145, 0.3)"
            item.style.zIndex = "100"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";
            item.querySelector(".content-weworking-item-text-ulist__list").style.color = "#FFFFFF";
        }
    } else {
        if (!event.target.classList.contains('content-weworking-item-text-ulist__list--open')) return;
        let item = event.target.closest('.content-weworking-item')
        if (item.querySelector(".content-weworking-item-text-ulist__list-desc").style.display == "block") {
            let text = item.querySelectorAll(".content-weworking-item-text-ulist__list-desc");
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "none"
            }
            item.querySelector(".content-weworking-item-text-ulist__list--open").style.background = "url(img/svg-content/open.svg) top left no-repeat";
            item.style.background = "#FFFFFF"
            item.querySelector(".content-weworking-item-text-ulist__list").style.marginBottom = "0";

        } else {
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
