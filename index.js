document.addEventListener('DOMContentLoaded', function() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevButton = document.querySelector('.gallery-arrow.prev');
    const nextButton = document.querySelector('.gallery-arrow.next');
    const slides = document.querySelectorAll('.gallery-slide');
    let currentIndex = 0;

    function scrollToSlide(index) {
        const slideWidth = slides[index].offsetWidth;
        galleryWrapper.scrollLeft = slideWidth * index;
        currentIndex = index;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToSlide(currentIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            scrollToSlide(currentIndex);
        }
    });

    // Optional: Initialize to the first slide
    scrollToSlide(0);
});
