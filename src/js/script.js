document.addEventListener('DOMContentLoaded', function() {

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
        for (let key in langArr) {
            let elem  = document.querySelector(".lng-" + key);
            if (elem) {
                elem.textContent = langArr[key][hash];
            }
        }
    }

    changeLanguage()

    // prallax --------------------------------------------------------------------------------------------!
    const PARALAX_ICON1 = hero.querySelector('.hero-parallax1');
    const PARALAX_ICON2 = hero.querySelector('.hero-parallax2');
    const PARALAX_ICON3 = hero.querySelector('.hero-parallax3');
    const PARALAX_ICON4 = hero.querySelector('.hero-parallax4');
    const PARALAX_ICON5 = hero.querySelector('.hero-parallax5');
    const PARALAX_ICON6 = hero.querySelector('.hero-parallax6');
    const PARALAX_ICON7 = hero.querySelector('.hero-parallax7');
    const PARALAX_ICON8 = hero.querySelector('.hero-parallax8');

    const fluidcoin = window.matchMedia("(min-width: 576px)");
    hero.addEventListener('mousemove', function(e) {
        if (fluidcoin.matches) {
            PARALAX_ICON1.style.transform = `translate(${e.clientX/4}px, ${e.clientY/4}px)`;
            PARALAX_ICON2.style.transform = `translate(${e.clientX/14}px, ${e.clientY/14}px)`;
            PARALAX_ICON3.style.transform = `translate(${e.clientX/10}px, ${e.clientY/10}px)`;
            PARALAX_ICON4.style.transform = `translate(${e.clientX/7}px, ${e.clientY/7}px)`;
            PARALAX_ICON5.style.transform = `translate(${e.clientX/2}px, ${e.clientY/2}px)`;
            PARALAX_ICON6.style.transform = `translate(${e.clientX/17}px, ${e.clientY/17}px)`;
            PARALAX_ICON7.style.transform = `translate(${e.clientX/9}px, ${e.clientY/9}px)`;
            PARALAX_ICON8.style.transform = `translate(${e.clientX/7}px, ${e.clientY/7}px)`;
        }
    })
})

