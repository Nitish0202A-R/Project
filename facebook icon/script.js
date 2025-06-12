// Login functionality
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("feedPage").style.display = "flex";
  } else {
    alert("Please enter email and password.");
  }
}

// Show Sign-up Form
document.querySelector(".create-btn").addEventListener("click", () => {
  document.getElementById("signupBox").style.display = "block";
});

// Simulate Account Creation
function createAccount() {
  alert("Account created! (Simulated)");
  document.getElementById("signupBox").style.display = "none";
}

// Cancel Sign-up
function closeSignup() {
  document.getElementById("signupBox").style.display = "none";
}

// Log out
function logout() {
  document.getElementById("feedPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}
