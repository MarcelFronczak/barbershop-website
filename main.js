window.onload = () => {
    const hamburger = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.nav-mobile');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle("is-active");
        mobile_nav.classList.toggle('is-active');
    })

    const anchors = document.querySelectorAll('.anchor');
    anchors.forEach(item => item.addEventListener('click', function(e){
        e.preventDefault();
        if(mobile_nav.classList.contains('is-active')) {
            mobile_nav.classList.remove('is-active');
            hamburger.classList.remove('is-active');
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior : 'smooth'
        })
    }))
}