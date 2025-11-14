// Toggle Password Visibility
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Registration Form Validation
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }
  alert("Registration Successful!");
});

// Login Form Validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }
  alert("Login Successful!");
});