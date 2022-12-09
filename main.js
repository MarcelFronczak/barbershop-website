window.onload = () => {
  //Anchor links navigation scroll to sections
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

  //Slide in on scroll
  function debounce(func, wait = 7, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliders = document.querySelectorAll('.slide-in');
const toTop = document.querySelector('.to-top');

  function scrollEvents(e) {
    if(window.scrollY > 250) {
      toTop.classList.add('is-active');
    } else {
      toTop.classList.remove('is-active');
    }

    sliders.forEach(slider => {
        const slideInAt = (window.scrollY + window.innerHeight) - (slider.clientHeight / 2);
        const sliderBottom = slider.offsetTop + slider.clientHeight;
        const isHalfShown = slideInAt >= slider.offsetTop;
        const isNotScrolledPast = window.scrollY < sliderBottom;

        if(isHalfShown && isNotScrolledPast) {
            slider.classList.add('is-active');
        } else {
            slider.classList.remove('is-active');
        }
    })
  }

  window.addEventListener('scroll', debounce(scrollEvents));

  //Mobile navbar slide-in/out
  const hamburger = document.querySelector('.hamburger');
  const mobile_nav = document.querySelector('.nav-mobile');

  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle("is-active");
      mobile_nav.classList.toggle('is-active');
  }) 
}