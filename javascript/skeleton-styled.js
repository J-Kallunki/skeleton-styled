var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var icon = this.firstElementChild;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      icon.className = 'fas fa-plus';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.className = 'fas fa-minus';
    }
  });
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showContent(element) {
    document.getElementById(element).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
function openModal(modalName){
    document.getElementById(modalName).style.display = "block";
}

function closeModal(modalName) {
    document.getElementById(modalName).style.display = "none";
}
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);    
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
} 