// This script is used to control the lightbox functionality - it's used on the gallery innerpages.
document.addEventListener('DOMContentLoaded', function () { // Ensure the page content is loaded before running the function.
  
// 1) Get the relevant page elements and store them in variables
const openIcon = document.querySelector('.open');
const closeIcon = document.querySelector('.close');
const lightbox = document.querySelector('.lightbox');

// 2) Add a click event listener to the open icon. When clicked, set the lightbox to visible and fade it in.
openIcon.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightbox.style.display = 'flex';
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
});

// 3) Add a click event listener to the close icon. When clicked, set the lightbox to hidden.
closeIcon.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 500);
});

});