let password = document.getElementsByName('password');
let confirmPassword = document.getElementsByName('passwordConfirm');
console.log(password);

confirmPassword[0].addEventListener('change', () => {
    console.log('aaa');
    if (password[0].value !== '' && password[0].value != confirmPassword[0].value) {
        document.getElementById('warningUnmatch').style.color = 'red';
        document.getElementById('warningUnmatch').textContent = "* password do not match";
    } else {
        document.getElementById('warningUnmatch').textContent = "";        
    }
});

