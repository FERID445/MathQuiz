//FOR SLIDER
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlider");
  let dots = document.getElementsByClassName("dot");
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


const usersContainer = document.querySelector(".users-container");

function getUser(){
  fetch("/db/scoreboard.json")
  .then(res => res.json())
  .then(data => {
    const {students} = data
    students.forEach(user => {
      usersContainer.innerHTML += `
        <div class="user-card">
          <div class="color"></div>
          <img src="${user.image}" alt="">
          <p id="cardbold">Name: ${user.fullName}</p>
          <p id="card">Universitet: ${user.university}</p>
          <p id="card-points">Bal: ${user.point}</p>
        </div>
      `
    })
  })
}
getUser()