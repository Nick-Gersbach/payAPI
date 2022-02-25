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
