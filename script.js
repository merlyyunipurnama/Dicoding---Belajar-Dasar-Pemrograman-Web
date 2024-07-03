// script.js

// Toggle dropdown menu
document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click event from propagating to the window
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("show");
  });

// Close the dropdown menu
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    var dropdowns = document.querySelectorAll(".dropdown-menu");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
});
