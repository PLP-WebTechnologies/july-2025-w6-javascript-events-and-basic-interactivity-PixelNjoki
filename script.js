/* ==============================
   Part 1: Event Handling
   ===================== */
// Change text on hover
let message = document.getElementById("message");
message.addEventListener("mouseover", function() {
  message.innerText = "You hovered over me!";
});

// Change text on button click
document.getElementById("show-btn").addEventListener("click", function() {
  message.innerText = "Button clicked!";
});


/* ==============================
   Part 2: Interactive Elements
   ============================== */
// Light/Dark mode toggle
let toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
let counterValue = document.getElementById("counter-value");

document.getElementById("increase-btn").addEventListener("click", function() {
  counter++;
  counterValue.innerText = counter;
});

document.getElementById("reset-btn").addEventListener("click", function() {
  counter = 0;
  counterValue.innerText = counter;
});

// FAQ collapsible
let faqButtons = document.getElementsByClassName("faq-btn");
for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener("click", function() {
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}


/* ==============================
   Part 3: Form Validation
   ============================== */
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault(); // stop default form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let formMessage = document.getElementById("form-message");

  if (name === "") {
    formMessage.innerText = "Name is required.";
    formMessage.style.color = "red";
    return;
  }

  // Simple email check with regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.innerText = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.innerText = "Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // If all valid
  formMessage.innerText = "Form submitted successfully!";
  formMessage.style.color = "green";
});
