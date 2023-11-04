document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const pagination = document.querySelector('.pagination');
    const pageIndicators = [];

    let currentIndex = 0; // Start with the first item
    let totalPages = carouselItems.length;

    // Function to set the transform property
    function setTransform() {
        const itemWidth = carouselItems[0].offsetWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // Update the active page indicator
        pageIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    // Move to the next item
    function next() {
        currentIndex++;
        if (currentIndex >= totalPages) {
            currentIndex = 0;
        }
        setTransform();
    }

    // Move to the previous item
    function prev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalPages - 1;
        }
        setTransform();
    }

    // Create and initialize page indicators
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('page-indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            setTransform();
        });
        pageIndicators.push(indicator);
        pagination.appendChild(indicator);
    }

    // Initially, set the transform to show the first item and activate the first page indicator
    setTransform();
    pageIndicators[0].classList.add('active');

    // Event listeners for the next and prev buttons
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
});