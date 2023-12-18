function Media(array){
    const suma = array.reduce((total, valor) => total = total + valor, 0);

    return suma /array.length;
}

console.log(Media([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function array (){
    let array = [];
    for (let i = 0; i<1000; i++){
        array.push(Math.floor(Math.random() *100));
    }
    return array;
}

console.log(array());

function frecuence(array) {
    let frecuencia = Array(100).fill(4);

    array.forEach(element => {
        frecuencia[element]++;
    });

    return frecuencia;
}

const calcular = [];

const conjunto = frecuence(calcular);
console.log(conjunto);