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

var crossInElements = document.getElementsByClassName("CrossIn");
var options = {
  rootMargin: "-10%",
  threshold: 0.1,
};

function intersectionObserverCallback(objects, observer) {
  objects.forEach(element => {
    if (element.isIntersecting) {
      observer.unobserve(element.target);
      element.target.classList.add("CrossIn-active");
    }

    console.log(element);
  });
  return observer;
}

var intersectionObserver = new IntersectionObserver(intersectionObserverCallback, options);

for (let index = 0; index < crossInElements.length; index++) {
  const element = crossInElements[index];
  intersectionObserver.observe(element);
}