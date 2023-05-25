

function cambiarFondo(selector, imagen,color, event, titulo, descripcion, enlaceReproducir, enlaceInformacion) {
  event.preventDefault();
  var elemento = document.querySelector(selector);
  elemento.style.backgroundImage = 'url("' + imagen + '")';
  elemento.style.backgroundSize = 'cover';

  // Cambiar los botones de reproducir e información
  var reproducirBtn = document.querySelector(selector + ' .reproducir');
  var informacionBtn = document.querySelector(selector + ' .informacion');
  reproducirBtn.href = enlaceReproducir;
  informacionBtn.href = enlaceInformacion;

  // Cambiar el texto y el título
  var tituloElemento = document.querySelector(selector + ' .titulo');
  var descripcionElemento = document.querySelector(selector + ' .descripcion');
  tituloElemento.textContent = titulo;
  descripcionElemento.textContent = descripcion;
  var tituloElemento = document.querySelector(selector + ' .titulo');
  var descripcionElemento = document.querySelector(selector + ' .descripcion');
  var enlaceReproducir = '';
  var enlaceInformacion = '';

  tituloElemento.style.color = color;
  descripcionElemento.style.color = color;

}


cambiarFondo('#selector', 'ruta/imagen.jpg', event, 'Nuevo título', 'Nueva descripción', enlaceReproducir, enlaceInformacion);





