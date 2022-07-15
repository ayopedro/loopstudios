const navBtn = document.querySelector(".mobile-navigation");
const navlinks = document.querySelector(".navlinks");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");


const menuHandler = () => {
  navlinks.classList.toggle("active");

  if (navlinks.classList.contains("active")) {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  }

  if (!navlinks.classList.contains("active")) {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  }
};

navBtn.addEventListener("click", menuHandler);
