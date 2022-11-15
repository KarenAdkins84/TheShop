document.querySelector('html').classList.remove('no-js');
if (!window.Cypress) {
const scrollCounter = document.querySelector('.js-scroll-counter');

    AOS.init({
        mirror: true
    });

    document.addEventListener('aos:in', function(e) {
        console.log('in!', e.detail);
    });

    window.addEventListener('scroll', function() {
        scrollCounter.innerHTML = window.pageYOffset;
    });
}