document.querySelector('.menu-btn').addEventListener('click', () => {
    console.log("Muy Bien Herma hiciste Click");
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {
    delay: 500
});
ScrollReveal().reveal('.cards-banner-one', {
    delay: 500
});
ScrollReveal().reveal('.cards-banner-two', {
    delay: 500
});

ScrollReveal().reveal('.footer-links', {
    delay: 500
});