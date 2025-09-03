// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  // Custom validation logic
  if (name === "" || email === "" || message === "") {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});

// INTERACTIVE FEATURE 1: Click Counter
let count = 0;
document.getElementById("clickBtn").addEventListener("click", function () {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// INTERACTIVE FEATURE 2: Theme Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
