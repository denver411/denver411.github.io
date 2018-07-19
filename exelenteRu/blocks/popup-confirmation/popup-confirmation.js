document.addEventListener('DOMContentLoaded', function () {

  let confirmationPopup = document.querySelector(".confirmation"),
    confirmationButton = document.querySelector(".confirmation__button"),
    confirmationClose = document.querySelector(".confirmation__close");

  function ConfirmationVisible() {
    confirmationPopup.classList.add("confirmation_visible");
  }

  function ConfirmationClose() {
    confirmationPopup.classList.remove("confirmation_visible");
  }

  confirmationButton.addEventListener("click", ConfirmationVisible);

  confirmationClose.addEventListener("click", ConfirmationClose);
  confirmationPopup.addEventListener("click", ConfirmationClose);

});