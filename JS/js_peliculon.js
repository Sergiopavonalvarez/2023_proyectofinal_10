// Obtiene referencias a los elementos relevantes
var fotoPrincipal = document.querySelector('.pel_principal');
var titulo = fotoPrincipal.querySelector('.titulo');
var descripcion = fotoPrincipal.querySelector('.descripcion');

// Obtiene referencias a las imágenes y agrega el evento de clic
var imagenes = document.querySelectorAll('.imagenes-container img');
var titulosImagenes = [
  "Agente 007 contra el Dr.No",
  "Título de la imagen 2",
  "Título de la imagen 3",
  // Agrega aquí los títulos de las imágenes restantes
];

var coloresTexto = [
    "#ff0000", // Color rojo
    "#00ff00", // Color verde
    "#0000ff", // Color azul
    // Agrega aquí los colores de texto correspondientes a cada imagen
  ];
var descripcionesImagenes = [
  "egfshd",
  "Descripción de la imagen 2",
  "Descripción de la imagen 3",
  // Agrega aquí las descripciones de las imágenes restantes
];

imagenes.forEach(function(imagen, index) {
  imagen.addEventListener('click', function() {
    // Obtiene la URL de la imagen clicada y actualiza el fondo, título y descripción
    var imgUrl = imagen.src;
    fotoPrincipal.style.backgroundImage = 'url("' + imgUrl + '")';
    titulo.textContent = titulosImagenes[index];
    descripcion.textContent = descripcionesImagenes[index];
  });
});
