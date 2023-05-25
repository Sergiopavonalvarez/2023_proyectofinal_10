function registrar() {
    var nombre = document.getElementById("registro_nombre").value;
    var contrasena = document.getElementById("registro_contrasena").value;

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
  }