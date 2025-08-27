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

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
const currentSlide = document.getElementById("banner-img");
const currentTagline = document.getElementById("tag-line");

let currentIndex = 0;
let sliderSize = slides.length;

const dots = new Array(sliderSize);
const dotsContainer = document.querySelector(".dots");

function updateSlide(index) {
	currentSlide.setAttribute("src", `./assets/images/slideshow/${slides[index].image}`);
	currentTagline.innerHTML = slides[index].tagLine;
}

function generateDots() {
	for (let i = 0; i < sliderSize; i++) {	
		dots[i] = document.createElement("button");
		if (i === currentIndex) {
			dots[i].classList.add("dot", "dot_selected");
		}
		else {
			dots[i].classList.add("dot");
		}

		dots[i].addEventListener("click", () => {
			updateSlide(i);
			updateDots(i);
			currentIndex = i;
		});

		try {
			dotsContainer.appendChild(dots[i]);
		} catch (error) {
			console.error("Erreur lors de l'ajout des dots au html.", error);
		}
	}
}

function updateDots(currentIndex) {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

addEventListener("DOMContentLoaded", () => {
	// Initialisation de la diapositive et des points
	try {
		updateSlide(currentIndex);
		generateDots();
	} catch (error) {
		console.error("Erreur lors de l'initialisation du carrousel.", error);
	}
});

arrowLeft.addEventListener("click", () =>{
	// Code pour changer de diapositive vers la gauche
	try {
		if (currentIndex > 0) {
			updateSlide(currentIndex - 1);
			currentIndex--;
		}
		else {
			updateSlide(sliderSize - 1);
			currentIndex = sliderSize - 1;
			console.warn("retour à la dernière diapositive.");
		}
		console.log('Cliquer sur la flèche gauche changement pour la diapositive n°', currentIndex);
		updateDots(currentIndex);
	} catch (error) {
		console.error("Erreur lors du changement de diapositive vers la gauche.", error);
	}

});

arrowRight.addEventListener("click", () =>{
	// Code pour changer de diapositive vers la droite
	try {
		// Vérifie si l'index actuel est inférieur au nombre total de diapositives
		if (currentIndex < slides.length - 1) {
			updateSlide(currentIndex + 1);		
			currentIndex++;
		} else {
			updateSlide(0);
			currentIndex = 0;
			console.warn("Retour à la première diapositive.");
		}
		console.log('Cliquer sur la flèche droite changement pour la diapositive n°', currentIndex);
		updateDots(currentIndex);
	} catch (error) {
		console.error("Erreur lors du changement de diapositive vers la droite.", error);
	}
});


