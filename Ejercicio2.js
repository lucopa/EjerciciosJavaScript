// a. Desestructura día, mes y año e imprime la fecha dado el array ['06', 'Octubre', '2021'];
const fechaArray = ['06', 'Octubre', '2021'];
const [dia, mes, año] = fechaArray;
console.log(`Fecha: ${dia} de ${mes} del ${año}`);

// b. Dado un array de números, desestructura los números en posiciones impares.
const numeros = [1, 2, 3, 4, 5, 6];
const [, num2, , num4,] = numeros;
console.log(`Números impares: ${num2}, ${num4}`);

// c. Desestructura el primer número, el segundo y el resto en otra variable.
const [primerNumero, segundoNumero, ...restoNumeros] = numeros;
console.log(`Primer número: ${primerNumero}, Segundo número: ${segundoNumero}, Resto: ${restoNumeros}`);

// d. Desestructura nombre, apellidos y teléfono del siguiente objeto.
const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433'};
const { nombre, apellidos, telefono } = person;
console.log(`Nombre: ${nombre}, Apellidos: ${apellidos}, Teléfono: ${telefono}`);

// e. Desestructura cada entrada e imprime llave, valor por separado.
for(const [key, value] of Object.entries(person)) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// f. Dado [{x: 1, y: 2}, {x: 3, y: 4}], desestructura los puntos en las variables x1, y1, x2, y2
const puntos = [{x: 1, y: 2}, {x: 3, y: 4}];
const [{x: x1, y: y1}, {x: x2, y: y2}] = puntos;
console.log(`Punto 1: x=${x1}, y=${y1}, Punto 2: x=${x2}, y=${y2}`);

// g. Crea una función que desestructure la propiedad nombre y apellidos e imprima el nombre completo.
function imprimirNombreCompleto({ nombre, apellidos }) {
  console.log(`Nombre completo: ${nombre} ${apellidos}`);
}
imprimirNombreCompleto(person);

// h. Combina dos objetos en uno solo utilizando el operador spread y luego elimina alguna propiedad.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log('Objeto combinado:', combinedObj);
delete combinedObj.c; // Eliminar propiedad 'c'
console.log('Objeto con propiedad eliminada:', combinedObj);

// i. Crea una función que retorna un array con 3 valores y desestructura los valores.
function retornaArray() {
  return [10, 20, 30];
}
const [val1, val2, val3] = retornaArray();
console.log(`Valores retornados: ${val1}, ${val2}, ${val3}`);

// j. Realiza una clonación profunda de un objeto que contiene otros objetos o arrays como propiedades.
function clonacionProfunda(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const objetoOriginal = { 
  nombre: 'Objeto Original',
  nestedObj: { a: 1, b: 2 },
  nestedArray: [1, 2, 3]
};

const objetoClonado = clonacionProfunda(objetoOriginal);
console.log('Objeto original:', objetoOriginal);
console.log('Objeto clonado:', objetoClonado);
