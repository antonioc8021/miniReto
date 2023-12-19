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