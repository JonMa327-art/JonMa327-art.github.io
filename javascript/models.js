//just runs at the beginning
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //i is just an int
    var i;
    //These are arrays
    var slides = document.getElementsByClassName("slideshow__slide");
    var buttons = document.getElementsByClassName("slideshow__button");

    //takes care of the wrapping issue
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    //turns all of the displays off
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //changes all of the dot colors to light grey
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    //shows to correct image and show which dot to hover over
    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].className += " active";
}