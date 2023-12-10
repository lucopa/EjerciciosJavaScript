document.getElementById('generar').addEventListener('click', function() {
    const longitud = document.getElementById('longitud').value;
    const password = generarPassword(longitud);
    document.getElementById('password').textContent = `Contraseña generada: ${password}`;
  });
  
  function generarPassword(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';
    
    for (let i = 0; i < longitud; i++) {
      const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      password += caracterAleatorio;
    }
    
    return password;
  }
  