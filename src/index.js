const form = document.getElementById("registrationForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMessage = document.getElementById("successMessage");

   function toggleVisibility(id) {
    const input = document.getElementById(id);
    const btn = input.nextElementSibling;
    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "Hide";
    } else {
      input.type = "password";
      btn.textContent = "Show";
    }
  }

  function validateName() {
    if (name.value.trim() === "") {
      nameError.style.display = "block";
      return false;
    }
    nameError.style.display = "none";
    return true;
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.style.display = "block";
      return false;
    }
    emailError.style.display = "none";
    return true;
  }

  function validatePhone() {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
      phoneError.style.display = "block";
      return false;
    }
    phoneError.style.display = "none";
    return true;
  }

  function validatePassword() {
    const pass = password.value;
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!strongRegex.test(pass)) {
      passwordError.textContent =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
      passwordError.style.display = "block";
      return false;
    }
    passwordError.style.display = "none";
    return true;
  }

  function validateConfirmPassword() {
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
      confirmPasswordError.style.display = "block";
      return false;
    }
    confirmPasswordError.style.display = "none";
    return true;
  }

  name.addEventListener("blur", validateName);
  email.addEventListener("blur", validateEmail);
  phone.addEventListener("blur", validatePhone);
  password.addEventListener("blur", validatePassword);
  confirmPassword.addEventListener("blur", validateConfirmPassword);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid =
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validatePassword() &&
      validateConfirmPassword();

    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      form.reset();
      setTimeout(() => {
        successMessage.textContent = "";
      }, 4000);
    } else {
      successMessage.textContent = "";
    }
  });