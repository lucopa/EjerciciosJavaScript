function calcularFactorial(numero) {
    let factorial = 1;
    if (numero === 0 || numero === 1) {
        return factorial;
    } else {
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Ejemplo
const numeroFactorial = 5; // Cambiar este número para calcular el factorial deseado
const resultadoFactorial = calcularFactorial(numeroFactorial);
console.log(`El factorial de ${numeroFactorial} es: ${resultadoFactorial}`);
