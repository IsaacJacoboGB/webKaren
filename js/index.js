// const images = document.querySelectorAll('.carousel-image');
// let currentIndex = 0;

// document
// 	.querySelector('.carousel-button-next')
// 	.addEventListener('click', () => {
// 		images[currentIndex].classList.remove('active');
// 		currentIndex = (currentIndex + 1) % images.length;
// 		images[currentIndex].classList.add('active');
// 	});

// document
// 	.querySelector('.carousel-button-prev')
// 	.addEventListener('click', () => {
// 		images[currentIndex].classList.remove('active');
// 		currentIndex = (currentIndex - 1 + images.length) % images.length;
// 		images[currentIndex].classList.add('active');
// 	});

document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('.carousel-image');
	const prevButton = document.querySelector('.carousel-button-prev');
	const nextButton = document.querySelector('.carousel-button-next');
	let currentIndex = 0;

	function showImage(index) {
		const offset = -index * 100;
		const carouselImages = document.querySelector('.carousel-images');
		carouselImages.style.transform = `translateX(${offset}%)`;
	}

	prevButton.addEventListener('click', function () {
		currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
		showImage(currentIndex);
	});

	nextButton.addEventListener('click', function () {
		currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
		showImage(currentIndex);
	});

	// Mostrar la primera imagen al cargar
	showImage(currentIndex);
});
