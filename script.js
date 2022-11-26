var princingPlans = document.getElementById("pricingPlans");
var navbar = document.getElementById("navbar-navbar");

const clientCommentSwiper = new Swiper('.clientOpinion-content-opinion', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.clientOpinion-content-arrow-right',
      prevEl: '.clientOpinion-content-arrow-left',
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        700: {
          slidesPerView: 2
        },
        1023: {
          slidesPerView: 3,
        },
    },
  });