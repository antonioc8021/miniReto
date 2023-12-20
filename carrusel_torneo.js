document.addEventListener("DOMContentLoaded", function () {
  const carruselContainer = document.querySelector('.carrusel-container_torneo');
  const carruselItems = document.querySelectorAll('.carrusel-item_torneo');
  const flechaIzquierda = document.querySelector('.flecha-izquierda');
  const flechaDerecha = document.querySelector('.flecha-derecha');

  let currentIndex = 0;

  // Función para cambiar la posición del carrusel
  function cambiarCarrusel() {
      const nuevaPosicion = -currentIndex * 100 + '%';
      carruselContainer.style.transform = 'translateX(' + nuevaPosicion + ')';
  }

  // Función para avanzar en el carrusel
  function avanzarCarrusel() {
      if (currentIndex < carruselItems.length - 3) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      cambiarCarrusel();
  }

  // Función para retroceder en el carrusel
  function retrocederCarrusel() {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = carruselItems.length - 3;
      }
      cambiarCarrusel();
  }

  // Eventos para las flechas de navegación
  flechaDerecha.addEventListener('click', avanzarCarrusel);
  flechaIzquierda.addEventListener('click', retrocederCarrusel);

  // Configurar intervalo para cambiar automáticamente cada 5 segundos (ajustar según sea necesario)
  setInterval(avanzarCarrusel, 5000);
});