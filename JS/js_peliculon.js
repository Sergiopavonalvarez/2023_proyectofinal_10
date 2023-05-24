function cambiarFondo(selector, imagen, event, titulo, descripcion) {
    event.preventDefault();
    var elemento = document.querySelector(selector);
    elemento.style.backgroundImage = 'url("' + imagen + '")';
    elemento.style.backgroundSize = 'cover';

    // Cambiar los botones de reproducir e información
    var reproducirBtn = document.querySelector(selector + ' .reproducir');
    var informacionBtn = document.querySelector(selector + ' .informacion');
    reproducirBtn.href = 'https://www.youtube.com/watch?v=_F5-E1_J1yo';
    informacionBtn.href = 'https://www.filmaffinity.com/es/filmNuevaURL';

    // Cambiar el texto y el título
    var tituloElemento = document.querySelector(selector + ' .titulo');
    var descripcionElemento = document.querySelector(selector + ' .descripcion');
    tituloElemento.textContent = titulo;
    descripcionElemento.textContent = descripcion;
  }


