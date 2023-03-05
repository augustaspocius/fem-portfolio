// Get slider, slides, previous button, and next button elements
const slider = document.getElementsByClassName("portfolio__carousel-slider")[0];
const slides = document.getElementsByClassName("portfolio__carousel-slider-image");
const prevButton = document.getElementsByClassName("button--previous")[0];
const nextButton = document.getElementsByClassName("button--next")[0];

// Get media query for 768px
const mediaQuery = window.matchMedia("(min-width: 768px)");

// Set initial media query value
let initialMediaQuery = mediaQuery.matches;

// Set current slide to 2
let currentSlide = 2;


// This code is used to move the slider to the correct position when the user clicks on a particular slide.
function moveSlider(currentSlide) {
    if (mediaQuery.matches) {
        switch (currentSlide) {
            case 0:
                slider.style.transform = "translateX(1130px)";
                break;
            case 1:
                slider.style.transform = "translateX(565px)";
                break;
            case 2:
                slider.style.transform = "translateX(0)";
                break;
            case 3:
                slider.style.transform = "translateX(-565px)";
                break;
            case 4:
                slider.style.transform = "translateX(-1130px)";
                break;
        }
    } else {
        switch (currentSlide) {
            case 0:
                slider.style.transform = "translateX(574px)";
                break;
            case 1:
                slider.style.transform = "translateX(287px)";
                break;
            case 2:
                slider.style.transform = "translateX(0)";
                break;
            case 3:
                slider.style.transform = "translateX(-287px)";
                break;
            case 4:
                slider.style.transform = "translateX(-574px)";
                break;
        }
    }
}

function changeSlide(moveTo) {
    // Ensure moveTo is not out of bounds
    if (moveTo >= slides.length) {
        moveTo = 0;
    }

    if (moveTo < 0) {
        moveTo = slides.length - 1;
    }

    currentSlide = moveTo;
    moveSlider(currentSlide);
}

// This code changes the slide to the next slide when the next button is clicked
// The slide is changed when the next button is clicked
// The changeSlide function is called with the next slide number as parameter
prevButton.addEventListener("click", () => {
    changeSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
    changeSlide(currentSlide + 1);
});

window.addEventListener("resize", () => {
    if (initialMediaQuery !== mediaQuery.matches) {
        // This function moves the slider to the current slide.
        moveSlider(currentSlide);
        initialMediaQuery = mediaQuery.matches;
    }
});
