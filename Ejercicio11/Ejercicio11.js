document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
  
    if (validarNombre(nombre) && validarEmail(email) && validarEdad(edad)) {
      document.getElementById('resultado').textContent = 'Formulario válido. ¡Enviado con éxito!';
    } else {
      document.getElementById('resultado').textContent = '¡El formulario tiene errores! Por favor, revisa los campos.';
    }
  });
  
  function validarNombre(nombre) {
    return nombre.length > 3;
  }
  
  function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
  
  function validarEdad(edad) {
    return !isNaN(edad) && edad >= 0 && edad <= 120;
  }
  