// This script is used to control the hero slider functionality. It's used on the landing page and is quite similar in nature to carousel.js
document.addEventListener('DOMContentLoaded', function () { // Ensure the page content is loaded before running the function.
  
  // 1) Get the relevant page elements and store them in variables
  const slides = document.querySelectorAll(".landing-slide"); // This stores all the slides in an array
  const slideContainer = document.querySelector('.hero-slider');
  const paginationContainer = document.querySelector('.heropagination');

  // 2) Set some additional initial variables
  let currentSlide = 0;
  const itemWidth = slides[0].offsetWidth; // Get the width of a single slide to use in our calculations
  let translateX = itemWidth;

  // 3) Iterate over the number of slides present and create a dot for each
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    dot.addEventListener('click', () => { // Add an event listener to each dot that, when clicked, runs the ToSlide Function
      goToSlide(i);
    });
    paginationContainer.appendChild(dot);
  }

  // 4) Create the goToSlide function
  function goToSlide(slideIndex) {
    slideContainer.style.transition = 'transform 0.5s';
    slideContainer.style.transform = `translateX(-${slideIndex * itemWidth}px)`; // Translate the full container by the width of the slide. This provides the illusion of sliding.
    currentSlide = slideIndex;
    const dots = paginationContainer.querySelectorAll('.dot');

    // Update the 'current' dot with the 'active' class to style it differently
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // 5) Create a function to transition to the next slide automatically
  function autoTransition() {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextSlideIndex);
  }

  // 6) Set the timeout to call the autotransition function every 5 seconds, thus sliding the slide every 5 seconds.
  setTimeout(autoTransition, 5000); 
});
