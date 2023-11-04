document.addEventListener('DOMContentLoaded', function () { // Run after the DOM content is loaded.

    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const pagination = document.querySelector('.pagination');
    const pageIndicators = [];

    const cloneCount = 7; 
    let currentIndex = cloneCount; 
    let totalPages = carouselItems.length;
    const itemWidth = carouselItems[0].offsetWidth;
    let translateX = itemWidth;

    function setTransform() {
        const itemWidth = carouselItems[0].offsetWidth;
        carouselContainer.style.transition = 'transform 0.5s';
        carouselContainer.style.transform = `translateX(-${(currentIndex - cloneCount) * itemWidth + translateX - (itemWidth / 2)}px)`;

        pageIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex - cloneCount) {
                indicator.classList.add('active');
            }
        });
    }

    function next() {
        currentIndex++;
        if (currentIndex >= totalPages + cloneCount) {
            currentIndex = cloneCount;
        }
        setTransform();
    }

    function prev() {
        currentIndex--;
        if (currentIndex < cloneCount) {
            currentIndex = totalPages + cloneCount - 1;
        }
        setTransform();
    }

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

    setTransform();
    pageIndicators[0].classList.add('active');

    for (let i = 0; i < cloneCount; i++) {
        const firstClone = carouselItems[i].cloneNode(true);
        const lastClone = carouselItems[totalPages - 1 - i].cloneNode(true);
        carouselContainer.appendChild(firstClone);
        carouselContainer.insertBefore(lastClone, carouselContainer.firstChild);
    }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
});
