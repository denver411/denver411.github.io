//Проверка поля почта

let restoreButton1 = document.querySelector('.button-action__reset-password');
    
restoreButton1.onclick = function () {
    let checkMailInput = document.querySelector('.e-mail__field').value;
    let checkMailInputLink = document.querySelector('.button-action__reset-password > a');
	

    if (!(/^[\w\d]+[\-\_\.\w\d]+\@+[\w\d]+\.[\w]+$/).test(checkMailInput)) {
        document.querySelector('.e-mail__field').style.background = '#c82e2e24';
        // document.querySelector('.e-mail__field').style.display = 'block';
        checkMailInputLink.href = null;
		console.log(checkMailInputLink.href);
        return false;
    } else {
        document.querySelector('.e-mail__field').style.background = '#5ac82e24';
        checkMailInputLink.href = 'password-restore-2-step.html';
		console.log(checkMailInputLink.href);
        //document.querySelector('.e-mail__field').value = 'none';
    }
}
