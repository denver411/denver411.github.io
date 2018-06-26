let restoreButton1 = document.querySelector('.button-action__reset-password');

restoreButton1.onclick = function () {
    let checkMailInput = document.querySelector('.e-mail__field').value;
    let checkMailError = document.querySelector('.e-mail__error');
    
    
    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(checkMailInput)) {
        document.querySelector('.e-mail__field').style.background = '#c82e2e24';
        checkMailError.style.display = 'block';
        return false;
    } else {
        document.querySelector('.e-mail__field').style.background = '#5ac82e24';
        // document.location.href = 'password-restore-2-step.html';
        checkMailError.style.display = 'none';
    }
}