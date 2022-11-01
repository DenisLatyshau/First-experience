(function() {
  
  const slides = document.querySelectorAll('.fade-slider__item');
  const activeClass = "fade-slider__item--visible";
  let index = 0;

  setInterval( () => {
    slides[index % 3].classList.remove(activeClass);
    index++
    slides[index % 3].classList.add(activeClass);
  }, 5000);
})();