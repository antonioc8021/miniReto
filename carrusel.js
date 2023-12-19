let currentIndex = 0;

function cambiarImagen(n) {
  currentIndex += n;
  mostrarImagen();
}

function mostrarImagen() {
  const carruselContainer = document.querySelector('.carrusel-container');
  const carruselItems = document.querySelectorAll('.carrusel-item');
  const carruselWidth = carruselItems[0].clientWidth;

  if (currentIndex < 0) {
    currentIndex = carruselItems.length - 1;
  } else if (currentIndex >= carruselItems.length) {
    currentIndex = 0;
  }

  carruselContainer.style.transform = `translateX(${-currentIndex * carruselWidth}px)`;
}

// Añade la siguiente parte para hacer el carrusel automático
// Obtén la referencia al contenedor del carrusel
var carruselContainer = document.querySelector('.carrusel-container');

// Función para cambiar la imagen del carrusel
function cambiarImagen(n) {
    currentIndex += n;
    mostrarImagen();
}

// Función para mostrar la imagen actual
function mostrarImagen() {
    var carruselItems = document.querySelectorAll('.carrusel-item');
    
    // Verifica los límites del índice
    if (currentIndex >= carruselItems.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = carruselItems.length - 1;
    }

    // Calcula la transformación para mostrar la imagen actual
    var transformValue = -currentIndex * 100 + '%';
    carruselContainer.style.transform = 'translateX(' + transformValue + ')';
}
// Establece un intervalo para cambiar automáticamente las imágenes cada 5 segundos
setInterval(function () {
    cambiarImagen(1);
}, 3000);