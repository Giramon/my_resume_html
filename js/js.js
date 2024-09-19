var slideIndex = 1;
showSlides(slideIndex);
      
function plusSlides(n) {showSlides(slideIndex += n);}
      
function currentSlide(n) {
    showSlides(slideIndex = n);
}
      
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

document.getElementById("about_me").onclick=function () {
    document.getElementById("info_about").scrollIntoView({behavior: "smooth"});
}

document.getElementById("skills").onclick=function () {
    document.getElementById("my_skills").scrollIntoView({behavior: "smooth"});
}

document.getElementById("my_works").onclick=function () {
    document.getElementById("my_work").scrollIntoView({behavior: "smooth"});
}

document.getElementById("skill").onclick=function () {
    document.getElementById("my_skills").scrollIntoView({behavior: "smooth"});
}

document.getElementById("info_about_me").onclick=function () {
    document.getElementById("info_about").scrollIntoView({behavior: "smooth"});
}

document.getElementById("why_i_btn").onclick=function () {
    document.getElementById("why_i").scrollIntoView({behavior: "smooth"});
}

const elem = document.querySelector(".my_sait");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '1400' - (1.9 * window.pageYOffset) + 'px';
})
