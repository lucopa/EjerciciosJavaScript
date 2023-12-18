/*El programa FizzBuzz se ha usado habitualmente para descartar candidatos en
pruebas de selección de personal. Consiste en escribir un programa que muestre en
pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra
“fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos
de 3 y 5 (o de 15), por la palabra “fizzbuzz”.*/

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Llamamos a la función para ejecutar FizzBuzz
fizzBuzz();
