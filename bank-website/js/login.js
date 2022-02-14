document.getElementById('login-submit').addEventListener('click', function () {
    //get User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //chack Email and Password
    if (userEmail == 'user@gmail.com' && userPassword == '123') {
        console.log('valid user');
        window.location.href = 'banking.html';

    }
});


