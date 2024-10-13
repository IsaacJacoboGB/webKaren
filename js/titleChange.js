// document.addEventListener('DOMContentLoaded', function () {
// 	// Cargar el contenido del header desde header.html
// 	fetch('/header.html')
// 		.then((response) => response.text())
// 		.then((data) => {
// 			// Insertar el header en el placeholder
// 			document.getElementById('header-placeholder').innerHTML = data;

// 			// Después de insertar el header, cambiar el título dinámicamente
// 			const pathname = window.location.pathname;
// 			const titleElement = document.querySelector('.titleWelcome h2');

// 			if (titleElement) {
// 				// Verificar que el elemento existe
// 				// Lógica para cambiar el título según la página
// 				if (pathname.includes('coatetelco.html')) {
// 					titleElement.textContent = '¡Coatetelco!';
// 				} else if (pathname.includes('laspilas.html')) {
// 					titleElement.textContent = '¡Las Pilas!';
// 				} else if (pathname.includes('olintepec.html')) {
// 					titleElement.textContent = '¡Olintepec!';
// 				} else if (pathname.includes('yautepec.html')) {
// 					titleElement.textContent = '¡Yautepec!';
// 				} else {
// 					titleElement.textContent = '¡Bienvenidos a Morelos!';
// 				}
// 			}
// 		});
// });
document.addEventListener('DOMContentLoaded', function () {
	fetch('/header.html')
		.then((response) => response.text())
		.then((data) => {
			// Insertar el header en el placeholder
			document.getElementById('header-placeholder').innerHTML = data;

			// Después de insertar el header, cambiar el título dinámicamente
			const pathname = window.location.pathname;
			const titleElement = document.querySelector('.titleWelcome h2');

			if (titleElement) {
				// Remover la extensión .html si existe
				const cleanedPathname = pathname.replace('.html', '');

				// Lógica para cambiar el título según la página
				if (cleanedPathname.includes('coatetelco')) {
					titleElement.textContent = '¡Coatetelco!';
				} else if (cleanedPathname.includes('laspilas')) {
					titleElement.textContent = '¡Las Pilas!';
				} else if (cleanedPathname.includes('olintepec')) {
					titleElement.textContent = '¡Olintepec!';
				} else if (cleanedPathname.includes('yautepec')) {
					titleElement.textContent = '¡Yautepec!';
				} else {
					titleElement.textContent = '¡Bienvenidos a Morelos!';
				}
			}
		});
});
