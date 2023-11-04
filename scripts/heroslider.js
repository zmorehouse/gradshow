 
 document.addEventListener('DOMContentLoaded', function () {

 // Get all the slides
 const slides = document.querySelectorAll('.landing-slide');
 // Set the index of the current slide
 let currentSlide = 0;
 // Set the time interval for changing slides
 const slideInterval = setInterval(nextSlide, 4000);

 // Function to show the next slide
 function nextSlide() {
   // Hide the current slide
   slides[currentSlide].classList.remove('active');
   // Increment the current slide index
   currentSlide = (currentSlide + 1) % slides.length;
   // Show the next slide
   slides[currentSlide].classList.add('active');
   // Translate the slider to show the next slide
   document.querySelector('.hero-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
 }
 });