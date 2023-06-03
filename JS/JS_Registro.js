function registrar() {
  var nombre = document.getElementById("username").value;
  var contrasena = document.getElementById("password").value;

  var usuario = {
    nombre: nombre,
    contrasena: contrasena
  };

  // Verificar si hay registros almacenados en localStorage
  var registros = localStorage.getItem("registros");
  if (registros) {
    registros = JSON.parse(registros);
  } else {
    registros = [];
  }

  // Agregar el nuevo usuario al arreglo de registros
  registros.push(usuario);

  // Almacenar los registros actualizados en localStorage
  localStorage.setItem("registros", JSON.stringify(registros));

  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  var checkboxTerms = document.getElementById("terms");
var btnRegistrarse = document.querySelector('input[type="submit"]');

// Deshabilitar el botón de "Registrarse" inicialmente
btnRegistrarse.disabled = true;

// Agregar evento de cambio al checkbox
checkboxTerms.addEventListener("change", function() {
  // Habilitar o deshabilitar el botón de "Registrarse" según el estado del checkbox
  btnRegistrarse.disabled = !checkboxTerms.checked;
});
window.location.href = "login.html";
}



  