//Проверка поля почта

let restore-button_1 = document.querySelector('.button-action__reset-password');
restore-button_1.onclick = function () {
    let checkMailInput = document.querySelector('.e-mail__field').value;

    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(checkMailInput) || !checkMailInput) {
        document.querySelector('.e-mail__field').style.background = '#c82e2e24';
        // document.querySelector('.e-mail__field').style.display = 'block';
        return false;
    } else {
        document.querySelector('.e-mail__field').style.background = '#5ac82e24';
       //document.querySelector('.e-mail__field').value = 'none';
    }
}
