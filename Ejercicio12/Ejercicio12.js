document.getElementById('cifrar').addEventListener('click', function() {
    const textoOriginal = document.getElementById('textoOriginal').value;
    const desplazamiento = 3; // Número de posiciones que se desplazará en el cifrado César
    const textoCifrado = cifrarCesar(textoOriginal, desplazamiento);
    document.getElementById('textoCifrado').value = textoCifrado;
  });
  
  function cifrarCesar(texto, desplazamiento) {
    let textoCifrado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
      if (caracter.match(/[a-z]/i)) {
        let codigo = texto.charCodeAt(i);
        if ((codigo >= 65) && (codigo <= 90)) {
          caracter = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
        } else if ((codigo >= 97) && (codigo <= 122)) {
          caracter = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
        }
      }
      textoCifrado += caracter;
    }
  
    return textoCifrado;
  }
  