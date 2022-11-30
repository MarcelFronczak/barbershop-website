window.onload = () => {
    const hamburger = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.nav-mobile');
    
    hamburger.addEventListener('click', function() {
        mobile_nav.classList.toggle('is-active');
    })
}