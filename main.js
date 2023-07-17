// color slider
function sliderImg(anything) {
  document.querySelector(".color").src = anything;
}

//Testimonial carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    center: true,
    autoplay: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      976: {
        items: 2,
      },
      1440: {
        items: 3,
      },
    },
  });
});

//Mobile menu
const openButton = document.getElementById("open_menu");
const slidePanel = document.getElementById("mobile_menu");
const closeButton = document.getElementById("close_menu");

openButton.addEventListener("click", () => {
  slidePanel.classList.add("slide-in");
  slidePanel.classList.remove("slide-out");
});

closeButton.addEventListener("click", () => {
  slidePanel.classList.remove("slide-in");
  slidePanel.classList.add("slide-out");
});

//Hero Slider
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slideNum = document.getElementById("slideNum");
const slides = document.getElementsByClassName("hero_slide");

let currentSlide = 0;
let autoplayInterval;

// Function to show the current slide
function showSlide() {
  console.log(slides.length);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "flex";
  slideNum.textContent = String(currentSlide + 1).padStart(2, "0");
}

// Function to advance to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  clearInterval(autoplayInterval);
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  clearInterval(autoplayInterval);
  nextSlide();
});

// Function to start autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 3000); // Adjust the interval duration as needed (in milliseconds)
}

// Function to stop autoplay
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Show the initial slide
showSlide();

// Start autoplay
startAutoplay();
