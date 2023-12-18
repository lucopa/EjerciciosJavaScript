function buscarPalabra(texto,palabra){
    let posiciones = [];
    let inicio = texto.indexOf(palabra);

    while(inicio!== -1){
        posiciones.push(inicio);
        inicio = texto.indexOf(palabra, inicio + 1);
    }
    return posiciones;
}

let texto = "Este es un ejemplo de texto. Este texto tiene la palabra ejemplo varias veces.";
let palabraABuscar = "ejemplo";

let resultado = buscarPalabra(texto, palabraABuscar);
console.log("Posiciones encontradas:", resultado);
