 
 document.addEventListener('DOMContentLoaded', function () { 

 const slides = document.querySelectorAll('.landing-slide');
 let currentSlide = 0;
 const slideInterval = setInterval(nextSlide, 4000);

 function nextSlide() {
   slides[currentSlide].classList.remove('active');
   currentSlide = (currentSlide + 1) % slides.length;
   slides[currentSlide].classList.add('active');
   document.querySelector('.hero-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
 }
 });