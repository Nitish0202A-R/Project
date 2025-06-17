document.getElementById("jobForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const position = document.getElementById("position").value.trim();
  const resume = document.getElementById("resume").files[0];

  if (!name || !email || !phone || !position || !resume) {
    alert("Please fill in all fields and upload your resume.");
    return;
  }

  // You can send this data to a backend server here
  document.getElementById("message").innerText = "Application submitted successfully!";
  document.getElementById("jobForm").reset();
});
