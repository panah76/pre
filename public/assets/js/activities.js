
let slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
    displaySlide(slideIndex += n);
}

function activeSlide(n) {
    displaySlide(slideIndex = n);
}

/* Main function */
function displaySlide(n) {

    var totalslidesImage =
        document.getElementsByClassName("image-slider-amin");
    var totalslidesText =
        document.getElementsByClassName("text-slider-amin");
    // var totalslides =
    //     document.getElementsByClassName("slide");

    var totaldots =
        document.getElementsByClassName("footerdot");

    if (n > totalslidesImage.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = totalslidesImage.length;
    }

    for (let i = 0; i < totalslidesImage.length; i++) {

        totalslidesImage[i].style.display = "none";
        totalslidesText[i].style.display = "none";
    }
    for (let i = 0; i < totaldots.length; i++) {
        totaldots[i].className =
            totaldots[i].className.replace(" active", "");
    }
    // debugger;
    totalslidesImage[slideIndex - 1].style.display = "block";
    totalslidesText[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}
