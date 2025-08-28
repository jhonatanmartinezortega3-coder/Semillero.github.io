// script.js

// Función para mostrar información adicional de las líneas de investigación
function mostrarInfo(tema) {
    const infoDiv = document.getElementById('info-investigacion');
    let info = '';
  
    switch (tema) {
        case 'tecnologia':
            info ="<div style='text-align: left;'>"
         +"<p><strong>INTERVENCIÓN SOCIOCOMUNITARIA EN EL MANEJO ADECUADO DE RESIDUOS SÓLIDOS EN EL MERCADO DE ABASTOS DE AMARILIS</strong></p>"
         + "<p>La gestión de los residuos sólidos en los mercados de abastos de Huánuco es un problema crítico debido al crecimiento urbano y la falta de concientización social. En el mercado de Amarilis, principal centro comercial de la provincia, la acumulación de basura y la inadecuada separación de residuos generan impactos negativos en la salud, el ambiente y la estética del lugar.</p>"
         + "<p>A pesar de existir algunos programas de reciclaje, estos no logran los resultados esperados por la escasa participación comunitaria. Frente a ello, se plantea aplicar el método de intervención sociocomunitaria, que promueve la colaboración entre comerciantes, municipio y vecinos para fomentar prácticas sostenibles.</p>"
         + "<p>Este enfoque busca empoderar a la comunidad, fortalecer sus capacidades y promover un cambio de actitudes hacia el manejo responsable de los desechos, demostrando que la solución depende tanto de infraestructura adecuada como de la transformación de comportamientos sociales.</p>";
            break;
        case 'sostenibilidad':
            info = "<div style='text-align: left;'>"
         + "<p><strong>La línea de Desarrollo Sostenible</strong> está enfocada en crear soluciones para el equilibrio entre el crecimiento económico y la preservación ambiental.</p>"
         
         + "<p><strong>Impacto Ambiental:</strong> La disposición incorrecta de los residuos sólidos contribuye a la contaminación del suelo y los cuerpos de agua cercanos, afectando los ecosistemas locales. Además, los residuos no gestionados adecuadamente pueden liberar gases de efecto invernadero, como el metano, exacerbando el cambio climático.</p>"
         
         + "<p><strong>Impacto Sanitario:</strong> Los desechos orgánicos, al no ser recolectados ni tratados de manera oportuna, atraen vectores como moscas y roedores, aumentando el riesgo de enfermedades infecciosas entre los comerciantes y consumidores del mercado. Esta situación también compromete la higiene y seguridad alimentaria de los productos que se comercializan.</p>"
         
         + "<p><strong>Impacto Social:</strong> La falta de conciencia y educación sobre el manejo de residuos sólidos genera prácticas inadecuadas por parte de los comerciantes y usuarios del mercado. Esto incluye arrojar basura en lugares no autorizados o no segregar los residuos según su tipo, lo que perpetúa el problema.</p>"
         
         + "<p><strong>Impacto Económico:</strong> Los costos asociados a la limpieza y disposición final de residuos incrementan el gasto público local. Además, el mercado pierde atractivo como un lugar limpio y organizado, afectando la competitividad frente a otros puntos de abastecimiento.</p>"
         
         + "<p>El mercado de abastos de Amarilis se encuentra en un distrito periférico de la ciudad de Huánuco, caracterizado por su rápido crecimiento poblacional y económico. Este mercado es el principal centro de comercio de alimentos frescos y otros productos básicos para la comunidad local y zonas aledañas. En él confluyen diariamente cientos de comerciantes y consumidores, lo que genera una gran cantidad de residuos sólidos, en su mayoría orgánicos, plásticos y cartones.</p>"
         
         + "<p><strong>Limitaciones en la gestión de residuos:</strong></p>"
         + "<ul>"
         + "<li><strong>Infraestructura insuficiente:</strong> No se cuenta con un sistema adecuado de recolección y segregación de residuos. Las áreas de disposición de basura son improvisadas y frecuentemente desbordadas.</li>"
         + "<li><strong>Falta de políticas claras:</strong> Si bien existen normativas municipales para la gestión de residuos, su aplicación en el mercado es débil o inexistente, debido a la falta de supervisión y recursos.</li>"
         + "<li><strong>Bajo nivel de concienciación:</strong> La mayoría de los comerciantes y usuarios del mercado no están sensibilizados sobre la importancia del manejo adecuado de residuos y las técnicas para implementarlo.</li>"
         + "<li><strong>Desafíos económicos y organizativos:</strong> Muchos comerciantes priorizan las ganancias diarias sobre prácticas sostenibles, mientras que la organización interna del mercado no facilita la implementación de soluciones colectivas.</li>"
         + "</ul>"
         
         + "<p>Además, el distrito de Amarilis, como parte de la región Huánuco, enfrenta retos estructurales en términos de planificación urbana y servicios básicos, lo que agrava los problemas en la gestión integral de residuos sólidos.</p>"
         
         + "<p>Este contexto demanda una <strong>intervención sociocomunitaria</strong> que no solo implemente soluciones técnicas, sino que involucre activamente a los actores clave (comerciantes, consumidores, autoridades locales y sociedad civil) en un proceso de educación, sensibilización y compromiso colectivo hacia un manejo adecuado de los residuos sólidos.</p>"
         + "</div>";
    break;
        case 'educacion':
            info = "<div style='text-align: left;'>"
         + "<p><strong>Justificación e Importancia de la investigación</strong></p>"

         + "<p>El manejo adecuado de los residuos sólidos es un desafío crítico en espacios de alta concurrencia como el <strong>mercado de abastos de Amarilis</strong>, un epicentro económico y social de la provincia de Huánuco. Esta intervención sociocomunitaria es de vital importancia porque ayudaría a la protección del medio ambiente, la salud pública, la conciencia colectiva, el desarrollo sostenible y el impulso económico.</p>"

         + "<p><strong>Medio Ambiente:</strong> La acumulación y disposición inadecuada de residuos generan contaminación del suelo, agua y aire, afectando los ecosistemas locales. La implementación de prácticas responsables contribuirá a reducir el impacto ambiental y preservar los recursos naturales.</p>"

         + "<p><strong>Mejora de la Salud Pública:</strong> Los residuos mal gestionados propician la proliferación de plagas y vectores de enfermedades, afectando la salud de comerciantes, consumidores y residentes cercanos. Un entorno limpio y ordenado promueve condiciones de higiene seguras para la comunidad.</p>"

         + "<p><strong>Fortalecimiento de la Conciencia Colectiva:</strong> Mediante la participación activa de comerciantes, usuarios y autoridades locales, se fomentará un cambio de actitud hacia la gestión de residuos, promoviendo la corresponsabilidad y el trabajo en equipo.</p>"

         + "<p><strong>Contribución al Desarrollo Sostenible:</strong> Esta intervención se alinea con los Objetivos de Desarrollo Sostenible (ODS), específicamente el ODS 11 (Ciudades y comunidades sostenibles) y el ODS 12 (Producción y consumo responsables). Además, sentará las bases para una cultura de sostenibilidad replicable en otros mercados de la región.</p>"

         + "<p><strong>Impulso Económico:</strong> Un mercado limpio y organizado atraerá más consumidores y reducirá los costos asociados a la limpieza y disposición de residuos, generando beneficios económicos para comerciantes y autoridades locales.</p>"

         + "<p><strong>Problemática Latente:</strong> En el mercado de Amarilis se generan diariamente grandes cantidades de residuos sólidos, los cuales no son gestionados adecuadamente por falta de infraestructura, educación ambiental y políticas efectivas. Esto ha convertido al mercado en un foco de contaminación y riesgo sanitario que requiere atención urgente.</p>"

         + "<p><strong>Participación Comunitaria:</strong> El éxito de cualquier programa depende de la participación activa de los actores involucrados. Este proyecto busca empoderar a comerciantes, consumidores y autoridades para que asuman un rol protagónico en la solución del problema.</p>"

         + "<p><strong>Relevancia Local y Regional:</strong> El mercado es el principal centro de abastecimiento del distrito. Resolver el problema no solo beneficiará a sus usuarios directos, sino también a comunidades cercanas que dependen de este espacio.</p>"

         + "<p><strong>Impacto Multidimensional:</strong> La intervención no solo aborda lo ambiental, sino también lo social, económico y educativo. Una gestión adecuada de residuos mejorará la calidad de vida, fortalecerá las capacidades de la comunidad y promoverá un desarrollo equilibrado.</p>"

         + "<p>La intervención propone <strong>estrategias basadas en la educación, sensibilización y prácticas sostenibles</strong>, garantizando resultados a largo plazo. El enfoque participativo asegura que las acciones respondan a las necesidades locales. De no intervenir, los problemas continuarán escalando, aumentando riesgos de salud, deterioro ambiental y costos económicos.</p>"

         + "<p><strong>Conclusión:</strong> Esta intervención es un paso necesario y estratégico para abordar una problemática compleja que afecta al medio ambiente y a la sociedad, cuya solución traerá beneficios significativos y duraderos para el distrito de Amarilis.</p>"
         + "</div>";
    break;
        case 'salud':
            info = "<div style='text-align: left;'>"
         + "<p><strong>Objetivos de la Investigación</strong></p>"

         + "<p><strong>Objetivo General:</strong></p>"
         + "<p>Diseñar e implementar estrategias de <em>intervención sociocomunitaria</em> que fortalezcan el manejo adecuado de residuos sólidos en el mercado de abastos de Amarilis, promoviendo la sostenibilidad ambiental, el bienestar social y la participación ciudadana.</p>"

         + "<p><strong>Objetivos Específicos:</strong></p>"
         + "<ul>"
         + "<li><strong>Diagnóstico de la situación actual:</strong> Analizar cómo se gestionan actualmente los residuos sólidos en el mercado de abastos de Amarilis, identificando problemas, limitaciones y oportunidades de mejora.</li>"
         + "<li><strong>Sensibilización comunitaria:</strong> Desarrollar actividades de concienciación dirigidas a comerciantes, trabajadores y consumidores para resaltar la importancia del manejo adecuado de residuos sólidos y fomentar un cambio de actitud.</li>"
         + "<li><strong>Implementación de un plan piloto:</strong> Poner en práctica un modelo de gestión de residuos que contemple la clasificación en origen, el reciclaje y la disposición final adecuada, adaptado al contexto del mercado.</li>"
         + "<li><strong>Evaluación del impacto:</strong> Medir los resultados obtenidos tras la implementación de las estrategias, tanto en el manejo de residuos como en la percepción y el grado de compromiso de la comunidad involucrada.</li>"
         + "</ul>"

         + "<p>Estos objetivos buscan no solo resolver una problemática ambiental y sanitaria urgente, sino también consolidar un proceso participativo y sostenible que beneficie a toda la comunidad del distrito de Amarilis.</p>"
         + "</div>";
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
  
