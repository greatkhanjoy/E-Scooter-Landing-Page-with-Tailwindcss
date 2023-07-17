function sliderImg(anything) {
  document.querySelector(".color").src = anything;
}

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
