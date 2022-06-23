const pricingPage = document.querySelector(".pricing-page");
const emailModal = document.querySelector("#email-modal");
const closeModal = document.querySelector(".x-icon");

// pricingPage.addEventListener("mouseleave", displayModal);
closeModal.addEventListener("click", modalClose);

//Show modal after 5 seconds
setTimeout(displayModal, 3000);

function displayModal() {
  pricingPage.classList.add("dark-bg");
  emailModal.style.display = "flex";
}

function modalClose() {
  pricingPage.classList.remove("dark-bg");
  emailModal.style.display = "none";
}
