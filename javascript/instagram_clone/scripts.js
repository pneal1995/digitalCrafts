var NAV_SEL = "[data-nav-item]";
var IMG_SEL = "[data-target]";

var navItems = document.querySelectorAll(NAV_SEL);
var imgTarget = document.querySelector(IMG_SEL);

navItems.forEach(function (nav) {
  nav.addEventListener('click', function (event) {
    event.preventDefault();
    imgTarget.setAttribute('src', nav.getAttribute('href'));
  })
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}