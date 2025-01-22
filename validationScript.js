document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (username.value.length < 3) {
        showError(username, 'Username must be at least 3 characters long.');
        isValid = false;
    }

    if (!email.value.includes('@')) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords must match.');
        isValid = false;
    }
});
