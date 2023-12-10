// a) Función para calcular la media aritmética
function calcularMedia(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
}

// b) Función para generar un array con 1000 números aleatorios del 0 al 99
function generarArray() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

// b) Función para calcular la frecuencia de cada número
function calcularFrecuencia(array) {
    let frecuencia = Array(100).fill(0);
    array.forEach(num => {
        frecuencia[num]++;
    });
    return frecuencia;
}

// c) Función para ordenar el array de menor a mayor sin usar métodos de
// JavaScript
function ordenarArraySinMetodos(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Generar el array de números aleatorios
let numerosAleatorios = generarArray();

// Calcular la media aritmética
let media = calcularMedia(numerosAleatorios);
console.log('Media aritmética:', media);

// Calcular la frecuencia de cada número
let frecuenciaNumeros = calcularFrecuencia(numerosAleatorios);
console.log('Frecuencia de números:', frecuenciaNumeros);

// Ordenar el array de menor a mayor sin métodos de JavaScript
let arrayOrdenadoSinMetodos = ordenarArraySinMetodos([...numerosAleatorios]); // Crear una copia del array para no modificar el original
console.log('Array ordenado sin métodos:', arrayOrdenadoSinMetodos);

// Ordenar el array usando método de JavaScript (sort)
let arrayOrdenadoConMetodo = [...numerosAleatorios].sort((a, b) => a - b);
console.log('Array ordenado con método sort:', arrayOrdenadoConMetodo);
