document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll(".landing-slide");
  const slideContainer = document.querySelector('.hero-slider');
  const paginationContainer = document.querySelector('.pagination-dots');
  let currentSlide = 0;
  const itemWidth = slides[0].offsetWidth;
  let translateX = itemWidth;
  const slideInterval = 5000; // Interval between slide transitions in milliseconds

  // Create pagination dots
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
    paginationContainer.appendChild(dot);
  }

  // Function to go to a specific slide
  function goToSlide(slideIndex) {
    slideContainer.style.transition = 'transform 0.5s';
    slideContainer.style.transform = `translateX(-${slideIndex * itemWidth}px)`;
    currentSlide = slideIndex;

    // Update the active dot
    const dots = paginationContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Function to automatically transition to the next slide
  function autoTransition() {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextSlideIndex);
  }

  // Call autoTransition to start the slideshow
  setInterval(autoTransition, slideInterval);
  autoTransition(); // Show the first slide immediately
});
