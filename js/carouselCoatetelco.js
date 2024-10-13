let slideIndex = 0;
let slides = document.querySelectorAll('.carousel-image2');
let totalSlides = slides.length;

function showSlide(index) {
	// Ajusta el índice para que siempre esté entre 0 y el número total de imágenes
	if (index >= totalSlides) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = totalSlides - 1;
	}

	// Mueve las imágenes (cambiamos el selector a '.carousel-images2')
	document.querySelector('.carousel-images2').style.transform = `translateX(-${
		slideIndex * 100
	}%)`;
}

// Funciones para cambiar de imagen
function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}

function prevSlide() {
	slideIndex--;
	showSlide(slideIndex);
}

// Carrusel automático cada 7 segundos
setInterval(() => {
	nextSlide();
}, 4000); // Cambia de imagen cada 7 segundos

// Mostrar la primera imagen inicialmente
showSlide(slideIndex);
