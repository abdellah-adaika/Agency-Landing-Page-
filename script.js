const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click",() => {
  mobileMenu.style.display = "block";
  menuBtn.style.opacity = "0.5";
});

menuLinks.forEach((link) => {
  link.addEventListener("click",() => {
    mobileMenu.style.display= "none";
    menuBtn.style.opacity = "1";
  })
});