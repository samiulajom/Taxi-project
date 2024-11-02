$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $(".sticky-header").addClass("fixed");
    } else {
      $(".sticky-header").removeClass("fixed");
    }
  });
  //slider by owl-carousel
  $(".user-feedback ").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 2,
    presentation: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// navbar navlink active calss add and remove
const navLinks = document.querySelectorAll(".nav-link");
// Loop through each nav link and add a click event listener
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Remove 'active' class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

// footer nav link active class add and remove
document.addEventListener("DOMContentLoaded", () => {
  let previousElement = null;
  document.querySelectorAll(".list-item").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      // Remove class from previously selected element
      if (previousElement) {
        previousElement.classList.remove("active");
      }
      // Add class to the currently clicked element
      this.classList.add("active");

      // Update the previousElement reference
      previousElement = this;
    });
  });
});

const bookForm = document.querySelector(".book-form ");
const standard = document.getElementById("standard");
const mainTitle = document.querySelector(".book-form-left .main-title");
standard.addEventListener("click", (e) => {
  e.preventDefault();
  bookForm.style.backgroundColor = "green";
  mainTitle.innerHTML = ` Get Our Hey <span class="text-warning">Texico standard</span> Online  Booking Form`;
});
