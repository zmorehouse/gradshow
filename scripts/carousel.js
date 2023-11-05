
// This script is used to control the graduate carousel functionality. It's used on the landing page and is quite similar in nature to heroslider.js
// The key difference is that this script clones the first 7 slides and appends them to the end of the carousel. This provides the illusion of infinite scrolling.

document.addEventListener('DOMContentLoaded', function () { // Ensure the page content is loaded before running the function.

    // 1) Get the relevant page elements and store them in variables
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselItems = document.querySelectorAll('.carousel-item'); // This stores all the carousel in an array
    const pagination = document.querySelector('.pagination');
    const pageIndicators = [];

    // 2) Set some additional initial variables.
    const cloneCount = 7;
    let currentIndex = cloneCount;
    let totalPages = carouselItems.length;
    const itemWidth = carouselItems[0].offsetWidth;
    let translateX = itemWidth;

    // 3) Create a function to transform the carousel container to the relevant slide
    function setTransform() {
        const itemWidth = carouselItems[0].offsetWidth;
        carouselContainer.style.transition = 'transform 0.5s';
        carouselContainer.style.transform = `translateX(-${(currentIndex - cloneCount) * itemWidth + translateX - (itemWidth / 2)}px)`; // Translate the full container by the width of a carousel item. This provides the illusion of sliding.

        // Add the active classes to the relevant pagination dot
        pageIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex - cloneCount) {
                indicator.classList.add('active');
            }
        });
    }

    // 4) Create a function to increment to the next slide
    function next() {
        currentIndex++;
        if (currentIndex >= totalPages + cloneCount) {
            currentIndex = cloneCount; // If we get too far, reset the index to the first slide
        }
        setTransform();
    }

    // 5) Create a function to increment to the previous slide
    function prev() {
        currentIndex--;
        if (currentIndex < cloneCount) {
            currentIndex = totalPages + cloneCount - 1; // If we get too far, reset the index to the first slide
        }
        setTransform();
    }

    // 6) Create our pagination. Iterate over the number of slides and create a dot for each
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('page-indicator');

        indicator.addEventListener('click', () => { // Add an event listener to each dot that, when clicked, runs the Transform Function
            currentIndex = i + cloneCount;
            setTransform();
        });

        pageIndicators.push(indicator); 
        pagination.appendChild(indicator);
    }
        
    // Call the setTransform function to initialize the carousel
    setTransform();
    pageIndicators[0].classList.add('active');

    // 7) Clone the carousel items for smooth looping
    for (let i = 0; i < cloneCount; i++) {
        // Clone the first and last items and append them to the carousel container
        const firstClone = carouselItems[i].cloneNode(true);
        const lastClone = carouselItems[totalPages - 1 - i].cloneNode(true);
        carouselContainer.appendChild(firstClone);
        carouselContainer.insertBefore(lastClone, carouselContainer.firstChild);
    }

    // 8) Add click event listeners to the next and previous buttons to navigate the carousel
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

});
