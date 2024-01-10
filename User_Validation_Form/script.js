document.getElementById('myForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Username validation
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (usernameInput.value.length < 5) {
        isValid = false;
        usernameError.textContent = 'Username must be at least 5 characters.';
    } else {
        usernameError.textContent = '';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        emailError.textContent = 'Enter a valid email address.';
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (passwordInput.value.length < 8) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters.';
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
document.getElementById('myForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Username validation
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (usernameInput.value.length < 5) {
        isValid = false;
        usernameError.textContent = 'Username must be at least 5 characters.';
    } else {
        usernameError.textContent = '';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        emailError.textContent = 'Enter a valid email address.';
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (passwordInput.value.length < 8) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters.';
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordFieldType = passwordInput.type;

    // Toggle password field type between 'password' and 'text'
    passwordInput.type = passwordFieldType === 'password' ? 'text' : 'password';
}
