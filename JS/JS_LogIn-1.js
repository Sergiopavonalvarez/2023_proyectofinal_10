function iniciarSesion() {
  var nombre = document.getElementById("login_nombre").value;
  var contrasena = document.getElementById("login_contrasena").value;

  // Obtener los registros almacenados en localStorage
  var registros = localStorage.getItem("registros");
  if (registros) {
    registros = JSON.parse(registros);

    // Buscar el usuario en los registros
    var usuarioEncontrado = registros.find(function (usuario) {
      return usuario.nombre === nombre && usuario.contrasena === contrasena;
    });

    if (usuarioEncontrado) {
      alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuarioEncontrado.nombre + "!");
      // Redirigir al usuario a la página deseada
      window.location.href = "peliculon-1.html"; 
    } else {
      alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo nuevamente.");
    }
  } else {
    alert("No hay usuarios registrados. Por favor, regístrate primero.");
  }
}