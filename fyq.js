function mostrarRespuesta(elementoBurbuja) {
  const respuesta = elementoBurbuja.querySelector('.respuesta');
  const flecha = elementoBurbuja.querySelector('.flecha');

  if (respuesta.style.display === 'block') {
    respuesta.style.display = 'none';
    flecha.classList.remove('arriba');
  } else {
    respuesta.style.display = 'block';
    flecha.classList.add('arriba');
  }
}