

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

function scrollToMainSection() {
  var pelPrincipal = document.getElementById("pel_principal");
  pelPrincipal.innerHTML = `
      <div class="contenedor">
          <h3 class="titulo"></h3>
          <p class="descripcion"></p>
          <a href="https://www.youtube.com/watch?v=EBJ_Nm8KXKc" target="_self" class="boton reproducir">Reproducir</a>
          <a href="https://www.filmaffinity.com/es/film734628.html" target="_self" class="boton informacion">Informacion</a>
      </div>
  `;
  pelPrincipal.style.backgroundImage = "url('Imagenes/portada.jpg')";
}







