const pricingPage = document.querySelector(".pricing-page");
const emailModal = document.querySelector("#email-modal");
const closeModal = document.querySelector(".x-icon");
const emailModalForm = document.getElementById("email-modal-form");

emailModalForm.addEventListener("submit", submitModalEmail);
closeModal.addEventListener("click", modalClose);

setTimeout(displayModal, 3000);

function displayModal() {
  pricingPage.classList.add("dark-bg");
  emailModal.style.display = "flex";
  //Show modal after 5 seconds
}
function modalClose() {
  pricingPage.classList.remove("dark-bg");
  emailModal.style.display = "none";
}

function submitModalEmail(e) {
  modalClose();
  e.preventDefault();
}
