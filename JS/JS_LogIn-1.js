var enviarButton = document.querySelector('input[type="submit"]');


enviarButton.addEventListener('click', function() {
  // Obtener los valores de los campos de entrada
  var nombre = document.getElementById('nombre').value;
  var contraseña = document.getElementById('password').value;


  console.log('Usuario:', nombre);
  console.log('Contraseña:', contraseña);
});