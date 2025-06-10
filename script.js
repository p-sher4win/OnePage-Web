// EVENT IMAGE AUTOMATIC SLIDER
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    speed: 500,
    width: '100%',
    focus: 'center',
    autoplay: false,
    fixedWidth: '19rem',
    gap: '2em',
    arrows: false,

    breakpoints: {
      576: {
        fixedWidth: '19rem',
        gap: '2rem',
        width: '90%',
        arrows: false,
      },
      768: {
        fixedWidth: '19rem',
        gap: '2rem',
        width: '90%',
        arrows: false,
      }
    },

    autoScroll: {
      speed: .5,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  });

  // Mount with AutoScroll extension loaded from global Splide namespace
  splide.mount(window.splide?.Extensions || {});
});



// SCROLL TO TOP BTN
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}