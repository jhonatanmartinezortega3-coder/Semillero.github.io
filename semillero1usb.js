// script.js

// Función para mostrar información adicional de las líneas de investigación
function mostrarInfo(tema) {
    const infoDiv = document.getElementById('info-investigacion');
    let info = '';
  
    switch (tema) {
        case 'tecnologia':
            info = 'La línea de investigación en Tecnología y Sociedad busca entender el impacto de las nuevas tecnologías en la vida social y cultural.';
            break;
        case 'sostenibilidad':
            info = 'La línea de Desarrollo Sostenible está enfocada en crear soluciones para el equilibrio entre el crecimiento económico y la preservación ambiental.';
            break;
        case 'educacion':
            info = 'En Innovación en la Educación, investigamos nuevas metodologías y tecnologías educativas para mejorar el aprendizaje.';
            break;
        case 'salud':
            info = 'Salud y Bienestar estudia la mejora de la calidad de vida a través de avances en salud y políticas de bienestar social.';
            break;
        default:
            info = 'Selecciona una línea de investigación para más información.';
    }
  
    infoDiv.innerHTML = `<p>${info}</p>`;
  }
  
  // Función para agregar un nuevo evento dinámicamente
  function agregarEvento() {
    const nuevoEventoDiv = document.getElementById('nuevo-evento');
    nuevoEventoDiv.innerHTML = '<p>Nuevo Evento agregado: Conferencia Internacional - 12 de Enero 2025</p>';
  }
  
  let currentSlide = 0;

  function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.carousel-image').length;
    const width = document.querySelector('.carousel-container').offsetWidth;
    carousel.style.transform = `translateX(-${currentSlide * width}px)`;
  }
  
  function nextImage() {
    const totalImages = document.querySelectorAll('.carousel-image').length;
    if (currentSlide < totalImages - 1) {
      currentSlide++;
      updateCarousel();
    }
  }
  
  function prevImage() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  }
  
  window.addEventListener('resize', updateCarousel);
  window.addEventListener('DOMContentLoaded', updateCarousel);
  