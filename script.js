// document.getElementById("navbarToggle").addEventListener("click", function() {
//   const navbarLinks = document.getElementById("navbarLinks");
//   if (navbarLinks.style.display === "flex") {
//     navbarLinks.style.display = "none";
//   } else {
//     navbarLinks.style.display = "flex";
//   }
// });


const burger = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
 
});

