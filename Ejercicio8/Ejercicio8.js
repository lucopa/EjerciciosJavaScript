// Función para generar un acertijo matemático simple
function generarAcertijo() {
    const numero1 = Math.floor(Math.random() * 100); 
    const numero2 = Math.floor(Math.random() * 100);
    const operadores = ['+', '-'];
    const operador1 = operadores[Math.floor(Math.random() * operadores.length)];
    const operador2 = operadores[Math.floor(Math.random() * operadores.length)];
  
    return `${numero1} ${operador1} ${numero2} ${operador2} ${numero1}`;
  }
  
  // Mostrar el acertijo en la página
  document.getElementById('acertijo').textContent = `¿Cuál es el resultado de: ${generarAcertijo()}?`;
  
  // Comprobar la respuesta al enviar el formulario
  document.getElementById('respuestaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const respuestaUsuario = parseInt(document.getElementById('respuestaInput').value);
    const acertijo = document.getElementById('acertijo').textContent.split(': ')[1];
    const respuestaCorrecta = eval(acertijo); // Evalúa la expresión matemática
  
    if (respuestaUsuario === respuestaCorrecta) {
      document.getElementById('resultado').textContent = '¡Has acertado!';
    } else {
      document.getElementById('resultado').textContent = 'Respuesta incorrecta. Inténtalo de nuevo.';
    }
  });
  