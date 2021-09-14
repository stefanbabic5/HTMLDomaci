/* Za padajući meni */
$(document).ready(function(){
    $("#lokacija1").click(function(){
      $("#lokacija1_beograd").slideToggle("slow");
    });

    $("#lokacija2").click(function(){
      $("#lokacija2_vanbg").slideToggle("slow");
    });
  });

/*slideshow na pocetnoj stranici*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("tackica");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Menja sliku svake 3 sekunde
}
