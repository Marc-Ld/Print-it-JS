const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotContainer = document.querySelector(".dots")

let currentSlide = 0;

for (let i=0 ; i<slides.length ; i++){
	const dot = document.createElement("span");
	dot.classList.add("dot")
	dotContainer.appendChild(dot)
}

const dots = document.querySelectorAll(".dot");
function showSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;

  dots[currentSlide].classList.remove("dot_selected");
  dots[index].classList.add("dot_selected");

  currentSlide = index;
}

arrowLeft.addEventListener("click", function () {
  const prevSlide = currentSlide - 1;
  if (prevSlide < 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(prevSlide);
  }
});

arrowRight.addEventListener("click", function () {
  const nextSlide = currentSlide + 1;
  if (nextSlide >= slides.length) {
    showSlide(0);
  } else {
    showSlide(nextSlide);
  }
});



dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    showSlide(index);
  });
});

showSlide(0);