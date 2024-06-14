document.getElementById('signInForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let isValid = true;

  // First Name Validation
  const firstName = document.getElementById('firstName');
  const firstNameError = document.getElementById('firstNameError');
  if (firstName.value.length < 12) {
      firstNameError.textContent = 'First name must be at least 12 characters';
      firstNameError.style.display = 'block';
      isValid = false;
  } else {
      firstNameError.style.display = 'none';
  }

  // Last Name Validation
  const lastName = document.getElementById('lastName');
  const lastNameError = document.getElementById('lastNameError');
  if (lastName.value.length < 6) {
      lastNameError.textContent = 'Last name must be at least 8 characters';
      lastNameError.style.display = 'block';
      isValid = false;
  } else {
      lastNameError.style.display = 'none';
  }

  // Phone Number Validation
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^\+92\d{10}$/;
  if (!phoneRegex.test(phone.value)) {
      phoneError.textContent = 'Phone number must be a valid Pakistani number';
      phoneError.style.display = 'block';
      isValid = false;
  } else {
      phoneError.style.display = 'none';
  }

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

  // Gender Validation
  const gender = document.getElementById('gender');
  const genderError = document.getElementById('genderError');
  if (gender.value === '') {
      genderError.textContent = 'Please select a gender';
      genderError.style.display = 'block';
      isValid = false;
  } else {
      genderError.style.display = 'none';
  }

  // Password Validation
  const password = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  if (password.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters';
      passwordError.style.display = 'block';
      isValid = false;
  } else {
      passwordError.style.display = 'none';
  }

  // Confirm Password Validation
  const confirmPassword = document.getElementById('confirmPassword');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = 'Passwords do not match';
      confirmPasswordError.style.display = 'block';
      isValid = false;
  } else {
      confirmPasswordError.style.display = 'none';
  }

  if (isValid) {
      alert('Form submitted successfully!');
      // Submit form logic here
  }
});

function togglePassword() {
  const password = document.getElementById('password');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  event.target.textContent = type === 'password' ? 'Show' : 'Hide';
}
