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
      pauseOnHover: true,
      pauseOnFocus: false,
    },
  });

  // Mount with AutoScroll extension loaded from global Splide namespace
  splide.mount(window.splide?.Extensions || {});
});
