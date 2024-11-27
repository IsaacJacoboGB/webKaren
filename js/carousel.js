// let slideIndex = 0;
// let slides = document.querySelectorAll('.carousel-image');
// let totalSlides = slides.length;

// function showSlide(index) {
// 	// Ajusta el índice para que siempre esté entre 0 y el número total de imágenes
// 	if (index >= totalSlides) {
// 		slideIndex = 0;
// 	} else if (index < 0) {
// 		slideIndex = totalSlides - 1;
// 	}

// 	// Mueve las imágenes
// 	document.querySelector('.carousel-images').style.transform = `translateX(-${
// 		slideIndex * 100
// 	}%)`;
// }

// // Funciones para cambiar de imagen
// function nextSlide() {
// 	slideIndex++;
// 	showSlide(slideIndex);
// }

// function prevSlide() {
// 	slideIndex--;
// 	showSlide(slideIndex);
// }

// // Carrusel automático cada 3 segundos
// setInterval(() => {
// 	nextSlide();
// }, 7000); // Cambia de imagen cada 3 segundos

// // Mostrar la primera imagen inicialmente
// showSlide(slideIndex);
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.remove('active');
		if (i === index) {
			slide.classList.add('active');
		}
	});
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
}

// Inicializa el carrusel mostrando el primer slide
showSlide(currentSlide);
