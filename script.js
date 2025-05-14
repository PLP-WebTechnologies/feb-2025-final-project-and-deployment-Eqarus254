document.getElementById("darkToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  
  // Contact form mock behavior
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formResponse").classList.remove("hidden");
    this.reset();
  });
  