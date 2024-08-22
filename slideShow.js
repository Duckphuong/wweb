let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const displayTime = 5000; // Time each slide is displayed (3 seconds)

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === slideIndex) ? 1 : 0;
    });

    slideIndex = (slideIndex + 1) % slides.length;

    setTimeout(showSlides, displayTime); // Change slide after displayTime
}

// Start the slideshow
showSlides();
