document.addEventListener('DOMContentLoaded', function() {

    const BUTTON = document.querySelector('.header-button');
    const HEADER = document.querySelector('.header');
    const NAV_ITEMS = document.querySelectorAll('.header-nav__list-item');

    BUTTON.addEventListener('click', showBurger)
    
    function showBurger() {
        HEADER.classList.toggle('header--active')
        document.body.classList.toggle('no-scroll');
    }

    NAV_ITEMS.forEach(item => item.addEventListener('click', closeBurger));

    function closeBurger() {
        HEADER.classList.remove('header--active')
        document.body.classList.remove('no-scroll');
    }
})