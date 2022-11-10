
const PARTNERS_SLIDER = tns ({
    container: '.partners-slider',
    lazyload: true,
    speed: 600,
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: '.partners-slider-arrows',
    center: true,
    responsive: {
        000: {
        items: 1,
        gutter: 0,
        },
        340: {
            items: 2,
            gutter: 5,
        },
        576: {
            items: 3,
            gutter: 10,
        },
        768: {
            items: 4,
            gutter: 10,
        },
        1200: {
        items: 5,
        gutter: 20,
        }
    }
})

const EVENTS_SLIDER = tns ({
    container: '.events-slider',
    lazyload: true,
    speed: 500,
    slideBy: 1,
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    // fixedWidth: 227,
    autoWidth: true,
    controlsContainer: '.events-slider-arrows',
    // center: true,
    responsive: {
        000: {
        items: 1,
        center: true,
        },
        576: {
            items: 3,
            center: false,
        },
        1200: {
        items: 5,
        center: false,
        }
    }   
})