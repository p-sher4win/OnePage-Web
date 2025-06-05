new Splide('.splide', {
    type: 'loop',
    speed: 500,
    width: '100%',
    focus: 'center',
    autoplay: true,
    interval: 1500,
    fixedWidth: '19rem',
    gap: '2em',

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
    }
}).mount();