const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle");

// Show Menu
menuBtn.addEventListener('click', () => {
  sideMenu.style.display= 'block';
})

// Close Menu
closeBtn.addEventListener('click', () => {
  sideMenu.style.display='none';
})

// Dark themeToggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
})