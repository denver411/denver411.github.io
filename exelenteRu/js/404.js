let buttonBack = document.querySelector(".content-desc_desc a[href='#']")

function backPage(event) {
    event.preventDefault()
    history.back()
}

buttonBack.addEventListener('click', backPage)