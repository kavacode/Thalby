$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // animateOut: 'slideOutUp',
        // animateIn: 'slideInUp',
        navText: ['', ' '],
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            674: {
                items: 2

            },
            1000: {
                items: 3
            }
        }
    });
});
// меню бургер
    const btmMenu = document.querySelector('.menu__btm');
    if (btmMenu) {
        const menuBody = document.querySelector('.menu__body');
        const menuIcon = document.querySelector('.menu__icon');
        btmMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            btmMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            menuIcon.classList.toggle('_active');
        });
    }


