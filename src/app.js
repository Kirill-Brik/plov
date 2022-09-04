import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 720px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
    },
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
