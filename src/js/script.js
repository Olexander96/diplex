// зміна мови--------------------------------------------------------------------------------------------!
const SELECT = document.querySelector('.header-dropdown');

SELECT.addEventListener('change', changeURL);

const allLanguages = ['en', 'ua', 'ru'];
// додавання приставки hash в кінець url
function changeURL() {
    let lang = SELECT.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    // console.log(hash)
    // помилка при невірному url
    if (!allLanguages.includes(hash)) {
        location.href = window.location.pathname + "#ua";
        location.reload()
    }
    SELECT.value = hash;
    // зміна мови для title
    document.querySelector('title').textContent = langArr['title'][hash];
    
    for (let key in langArr) {
        let elem  = document.querySelector(".lng-" + key);
        if (elem) {
            elem.textContent = langArr[key][hash];
        }
    }
}

changeLanguage()

// tiny slider1 --------------------------------------------------------------------------------------------!
const PARTNERS_SLIDER = tns({
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

const EVENTS_SLIDER = tns({
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


