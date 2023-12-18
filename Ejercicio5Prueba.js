function factorial2(numero) {
    let factorial = 1;
    if(numero ===0 || numero === 1) {
        return factorial;
    } else {
        for (let i =2; i<=numero;i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}

const resultado = factorial2(4);
console.log(resultado);
