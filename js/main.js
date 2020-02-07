document.addEventListener('DOMContentLoaded', (event) => {

    const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.series__arrow',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            541: {
                slidesPerView: 2
            }
        }     
    });
    
    const menuButton = document.querySelector('.menu-button'),
        menu = document.querySelector('.header-content');
    
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('menu-button--active');
        menu.classList.toggle('header-content--active');
    });

});