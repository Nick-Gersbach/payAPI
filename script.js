// Form Validation Vars
const submitEmailBtn = document.getElementById("submit");
const emailInput = document.getElementById("email-input");
const errorText = document.querySelector("small");

//Event Listeners
submitEmailBtn.addEventListener("click", sendEmail);

// Mobile Nav
document
  .querySelector(".mobile-nav-btn")
  .addEventListener("click", () =>
    document.querySelector(".mobile-nav").classList.add("show")
  );

document
  .querySelector(".close-menu")
  .addEventListener("click", () =>
    document.querySelector(".mobile-nav").classList.removexxx("show")
  );

function sendEmail(e) {
  if (emailInput.value === "") {
    errorText.style.visibility = "visible";
  }

  e.preventDefault();
}
