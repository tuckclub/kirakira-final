let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let images = document.getElementsByClassName("slideshow-image");
    let dots = document.getElementsByClassName("slideshow-dot");
    if (n > images.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = images.length
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideshow-dot-white", "");
    }
    images[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slideshow-dot-white";
}
