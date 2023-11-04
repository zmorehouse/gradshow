document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const pagination = document.querySelector('.pagination');
    const pageIndicators = [];

    const cloneCount = 7; // Number of clones at each end
    let currentIndex = cloneCount; // Start with the first non-clone item
    let totalPages = carouselItems.length;
    const itemWidth = carouselItems[0].offsetWidth;
    let translateX = itemWidth;

    // Function to set the transform property with a transition
    function setTransform() {
        const itemWidth = carouselItems[0].offsetWidth;
        carouselContainer.style.transition = 'transform 0.5s';
        carouselContainer.style.transform = `translateX(-${(currentIndex - cloneCount) * itemWidth + translateX - (itemWidth / 2)}px)`;

        // Update the active page indicator
        pageIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex - cloneCount) {
                indicator.classList.add('active');
            }
        });
    }

    // Move to the next item with a smooth transition
    function next() {
        currentIndex++;
        if (currentIndex >= totalPages + cloneCount) {
            currentIndex = cloneCount;
        }
        setTransform();
    }

    // Move to the previous item with a smooth transition
    function prev() {
        currentIndex--;
        if (currentIndex < cloneCount) {
            currentIndex = totalPages + cloneCount - 1;
        }
        setTransform();
    }

    // Create and initialize page indicators
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('page-indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i + cloneCount;
            setTransform();
        });
        pageIndicators.push(indicator);
        pagination.appendChild(indicator);
    }

    // Initially, set the transform to show the first non-clone item and activate the first page indicator
    setTransform();
    pageIndicators[0].classList.add('active');

    // Clone the first and last items multiple times and insert them before and after the original items
    for (let i = 0; i < cloneCount; i++) {
        const firstClone = carouselItems[i].cloneNode(true);
        const lastClone = carouselItems[totalPages - 1 - i].cloneNode(true);
        carouselContainer.appendChild(firstClone);
        carouselContainer.insertBefore(lastClone, carouselContainer.firstChild);
    }

    // Event listeners for the next and prev buttons
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
});
