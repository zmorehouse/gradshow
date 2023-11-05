document.addEventListener('DOMContentLoaded', function () { // Run after the DOM content is loaded.
    const openIcon = document.querySelector('.open');
const closeIcon = document.querySelector('.close');
const lightbox = document.querySelector('.lightbox');

openIcon.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightbox.style.display = 'flex';
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
});

closeIcon.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 500);
});

closeIcon.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
});