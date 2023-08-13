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


// const container = document.querySelector("#container");

// let url = "../db/scoareBoard.json"
// function getData(){
//     fetch(url)
//     .then((res)=> res.json())
//     .then((data)=> {
//         let {scoreBoard, onlineTutorials} = data;

//         scoreBoard.forEach(element => {
//             container.insertAdjacentHTML("beforeend",`
//             <div class="first">
//             <p>${element.fullName}</p>
//             <p>Universitet</p>
//             <p>Bal</p>
//             </div>    
//             `)
//         }); 
//     })
// }

// getData()