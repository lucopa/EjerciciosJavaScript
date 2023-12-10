function contarVocalesConsonantes(cadena) {
    // Convertir la cadena a minúsculas para contar sin importar mayúsculas/minúsculas
    const cadenaMinusc = cadena.toLowerCase();
    
    let vocales = 0;
    let consonantes = 0;
  
    for (let i = 0; i < cadenaMinusc.length; i++) {
      const caracter = cadenaMinusc[i];
      // Verificar si el caracter es una letra
      if (/^[a-z]$/.test(caracter)) {
        // Verificar si el caracter es una vocal
        if ('aeiou'.indexOf(caracter) !== -1) {
          vocales++;
        } else {
          consonantes++;
        }
      }
    }
  
    return { vocales, consonantes };
  }
  
  const texto = 'Esta es una cadena de ejemplo';
  const resultado = contarVocalesConsonantes(texto);
  
  console.log('Número de vocales:', resultado.vocales);
  console.log('Número de consonantes:', resultado.consonantes);
  