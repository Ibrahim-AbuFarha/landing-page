// our program
let indx1 = 0;
const programList = document.querySelector(".our-program-list");
const programRightBtn = document.querySelector(".our-program-rightBtn");
const programLeftBtn = document.querySelector(".our-program-leftBtn");
const programCard = document.querySelectorAll(".our-program-card");

programLeftBtn.addEventListener("click", function () {
  if (indx1 === 0) return;
  indx1--;
  console.log(indx1);
  programList.style.transform = `translate(-${
    programCard[0].clientWidth * indx1
  }px)`;

  disableBtn();
});

programRightBtn.addEventListener("click", function () {
  if (indx1 === programCard.length - 4) return;
  indx1++;
  console.log(indx1);
  programList.style.transform = `translate(-${
    programCard[0].clientWidth * indx1
  }px)`;

  disableBtn();
});
//to change the color of btn (disabled)
function disableBtn() {
  indx1 === 4
    ? programRightBtn.classList.add("disabled")
    : programRightBtn.classList.remove("disabled");

  indx1 === 0
    ? programLeftBtn.classList.add("disabled")
    : programLeftBtn.classList.remove("disabled");
}

disableBtn();

//menu section slider
let indx2 = 0;
const menuRightBtn = document.querySelector(".our-menu-rightBtn");
const menuLeftBtn = document.querySelector(".our-menu-leftBtn");
const menuSlider = document.querySelector(".our-menu-slider");
const menuSlides = document.querySelectorAll(".slide");
menuLeftBtn.addEventListener("click", function () {
  if (indx2 === 0) return;
  indx2--;
  console.log(indx2);
  menuSlider.style.transform = `translate(-${
    menuSlides[0].clientWidth * indx2
  }px)`;

  disableBtn2();
});
menuRightBtn.addEventListener("click", function () {
  if (indx2 === menuSlides.length - 1) return;
  indx2++;
  console.log(indx2);
  menuSlider.style.transform = `translate(-${
    menuSlides[0].clientWidth * indx2
  }px)`;
  disableBtn2();
});
//to change the color of btn (disabled)

function disableBtn2() {
  indx2 === 5
    ? menuRightBtn.classList.add("disabled")
    : menuRightBtn.classList.remove("disabled");

  indx2 === 0
    ? menuLeftBtn.classList.add("disabled")
    : menuLeftBtn.classList.remove("disabled");
}
disableBtn2();
//testimonial slider
const testimonialRightBtn = document.querySelector(".testimonial-rightBtn");
const testimonialLeftBtn = document.querySelector(".testimonial-leftBtn");
const testimonialCardList = document.querySelector(".testimonial-cardsList");
const testimonialCard = document.querySelectorAll(".testimonial-card");
let indx3 = 0;

testimonialLeftBtn.addEventListener("click", function () {
  if (indx3 === 0) return;
  indx3--;
  console.log(indx3);
  testimonialCardList.style.transform = `translate(-${
    testimonialCard[0].clientWidth * indx3
  }px)`;
  disableBtn3();
});

testimonialRightBtn.addEventListener("click", function () {
  if (indx3 === testimonialCard.length - 1) return;
  indx3++;
  console.log(indx3);
  testimonialCardList.style.transform = `translate(-${
    testimonialCard[0].clientWidth * indx3
  }px)`;
  disableBtn3();
});
//to change the color of btn (disabled)
function disableBtn3() {
  indx3 === 3
    ? testimonialRightBtn.classList.add("disabled")
    : testimonialRightBtn.classList.remove("disabled");

  indx3 === 0
    ? testimonialLeftBtn.classList.add("disabled")
    : testimonialLeftBtn.classList.remove("disabled");
}
disableBtn3();

// smooth scrolling animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//scroll to top of the page
// Get the scroll-to-top button element
const scrollToTopButton = document.getElementById("scrollToTopButton");
// Show the button when user scrolls down 20% of the viewport height
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  // Hide the button initially
  scrollToTopButton.style.display = "none";

  // Show the button when user scrolls down 20% of the viewport height
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.2) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
});

//header menu

const headerMenu = document.querySelector(".header-menu");
const sideBarLinks = document.querySelectorAll(".sidebar-link");
const sideBar = document.querySelector(".sidebar");
headerMenu.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar-active");
});
sideBarLinks.forEach((item) => {
  item.addEventListener("click", function () {
    sideBar.classList.toggle("sidebar-active");
  });
});

//reset url
window.onload = function () {
  history.replaceState(null, null, " "); // Replace with your default URL
  window.scrollTo(0, 0); // Scroll to the top of the page
};
