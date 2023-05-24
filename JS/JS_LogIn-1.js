function iniciarSesion() {
  var usuario = document.getElementById('nombre').value;
  var password = document.getElementById('password').value;

  // Verificar las credenciales del usuario (puedes agregar tu lógica de autenticación aquí)
  if (usuario === 'admin' && password === 'contraseña') {
      // Inicio de sesión exitoso, redirigir al usuario a la página web
      window.location.href = 'peliculon-1.html';
  } else {
      // Las credenciales son incorrectas, mostrar un mensaje de error
      alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
  }
}