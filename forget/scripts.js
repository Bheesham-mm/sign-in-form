document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (isValid) {
        alert('Password reset link has been sent to your email address!');
        // Reset password logic here
    }
});
