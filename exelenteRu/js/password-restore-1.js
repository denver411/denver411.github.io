//Проверка поля почта

let restoreButton1 = document.querySelector('.button-action__reset-password');
restoreButton1.onclick = function () {
    let checkMailInput = document.querySelector('.e-mail__field').value;
    let checkMailInputLink = document.querySelector('.e-mail__field > a');
    console.log(checkMailInputLink);

    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(checkMailInput) || !checkMailInput) {
        document.querySelector('.e-mail__field').style.background = '#c82e2e24';
        // document.querySelector('.e-mail__field').style.display = 'block';
        checkMailInputLink.href = null;
        return false;
    } else {
        document.querySelector('.e-mail__field').style.background = '#5ac82e24';
        checkMailInputLink.href = 'password-restore-2-step.html';
        //document.querySelector('.e-mail__field').value = 'none';
    }
}
