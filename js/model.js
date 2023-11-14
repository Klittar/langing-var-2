// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  var modal = document.getElementById('myModal');
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };
  
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
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  // Получите модальное окно
  var modal = document.getElementById('myModal');
  
  // Закрывает модальное окно при клике вне его
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
  
  
  $(".burger-menu ").on("click",".bar",function(){
    
      $(".menu").slideToggle();
      $(".bar").toggleClass('change');
      $(".menu li").slideRight();
    
     });
     

    