const password= document.querySelector("#password");
const confirmPassword= document.querySelector("#confirm-password");
const errorMsg = document.getElementById("error-msg");
const submitButton = document.querySelector('button');

function checkPasswordsMatch() {
  if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
    errorMsg.style.display = "inline";
    confirmPassword.setCustomValidity("Passwords do not match");
    submitButton.disabled = true;
  } else {
    errorMsg.style.display = "none";
    confirmPassword.setCustomValidity("");
    submitButton.disabled = false;
  }
}

// Run check when user types in either password field
password.addEventListener("input", checkPasswordsMatch);
confirmPassword.addEventListener("input", checkPasswordsMatch);

const meter = document.getElementById("strength-meter");
const text = document.getElementById("strength-text");

password.addEventListener("input", () => {
  const val = password.value;
  let strength = 0;

  // Scoring rules
  if (val.length >= 8) strength += 1;
  if (/[A-Z]/.test(val)) strength += 1;
  if (/[0-9]/.test(val)) strength += 1;
  if (/[^A-Za-z0-9]/.test(val)) strength += 1;

  // Visual update
  switch (strength) {
    case 0:
      meter.style.width = "0%";
      break;
    case 1:
      meter.style.width = "25%";
      meter.style.background = "red";
      break;
    case 2:
      meter.style.width = "50%";
      meter.style.background = "orange";
      break;
    case 3:
      meter.style.width = "75%";
      meter.style.background = "yellowgreen";
      break;
    case 4:
      meter.style.width = "100%";
      meter.style.background = "green";
      break;
  }
});

const passwordInput = document.getElementById("password");
const lengthMsg = document.getElementById("password-length-msg");

passwordInput.addEventListener("input", () => {
  const length = passwordInput.value.length;

  if (length === 0) {
    lengthMsg.textContent = "";
  } else if (length < 8) {
    lengthMsg.textContent = `Password too short (${length} characters, min 8 required)`;
    lengthMsg.style.color = "red";
  } else {
    lengthMsg.textContent = ``;
  }
});


