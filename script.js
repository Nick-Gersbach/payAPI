// Form Validation Vars
const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const errorText = document.querySelector("small");

//Event Listeners
form.addEventListener("click", sendEmail);

// Mobile Nav
document
  .querySelector(".mobile-nav-btn")
  .addEventListener("click", () =>
    document.querySelector(".mobile-nav").classList.add("show")
  );

document
  .querySelector(".close-menu")
  .addEventListener("click", () =>
    document.querySelector(".mobile-nav").classList.remove("show")
  );

function sendEmail(e) {
  if (emailInput.value === "") {
    errorText.style.visibility = "visible";
  }

  e.preventDefault();
}
