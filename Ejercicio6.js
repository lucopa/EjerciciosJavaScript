function buscarOcurrenciasPalabra(texto, palabra) {
    const regex = new RegExp(palabra, 'gi');
    let ocurrencias = [];
    let match;
    while ((match = regex.exec(texto)) !== null) {
        ocurrencias.push(match.index);
    }
    return ocurrencias;
}

// Ejemplo de uso
const textoEjemplo = 'Esta es una prueba, una prueba de búsqueda de palabras en un texto. Es importa' +
        'nte probar bien la función.';
const palabraBuscar = 'prueba'; // Cambia esta palabra por la que quieres buscar
const posicionesEncontradas = buscarOcurrenciasPalabra(
    textoEjemplo,
    palabraBuscar
);
console.log(
    `Las ocurrencias de "${palabraBuscar}" están en las posiciones: ${posicionesEncontradas}`
);
