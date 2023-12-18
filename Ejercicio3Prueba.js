// a. Crea un array "datos" vacío con un literal.
const datos = [];

// b. Añade a "datos" los números del 1 al 50 con un bucle for.
for (let i = 1; i <= 50; i++) {
  datos.push(i);
}

// c. Elimina los elementos del 25 al 50 asignando un nuevo tamaño a la propiedad length
datos.length = 24;

// d. Usa el operador spread para hacer una copia del array anterior.
const copiaDatos = [...datos];

// e. Crea un array de tamaño 50 con el constructor Array.
const datosTamaño50 = new Array(50);

// f. Copia el array anterior a otro con la factoría from.
const copiaDatosFrom = Array.from(datos);

// g. Crea un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializa cada celda con el valor i*j.


// h. Crea un array con la factoría of con los números del 1 al 5. Después añade un elemento en la posición 10 y otro en la 50.
const array2 = Array.of(1,2,3,4);
array2[9] = 38;
array2[11]= 59;
console.log(array2);

// i. Elimina dos elementos con deconste.
delete array2[0];
console.log(array2);


// j. Calcula el producto de todos los números del array "datos" con forEach.
const producto =1;

datos.forEach(element => {
  resultado=producto * element;
});
console.log(resultado);

// k. Cada elemento x del array datos debe cambiarse por x*x. Usa forEach
datos.forEach((element, indice, array) => {
  array[indice] = element * element;
});
console.log(datos);

// l. Crea un nuevo array con map recorriendo cada elemento x de "datos", donde cada elemento sea un string "El valor es: x". Usa template string.
nuevoArra= datos.map(element => `El valor es: ${element}`);
console.log(nuevoArra);

// m. Crea un array nuevo mediante map que incremente cada elemento de "datos" en 5 unidades.
nuevoarray2= datos.map(element => element + 5);
console.log(nuevoarray2);


// n. Mediante filter quédate con los números impares en un nuevo array impares.
const impares = datos.filter(element => element %2 !==0);
console.log(impares);

// o. Usa find para buscar el número 13.
const encontrar= datos.find(element => element===9);
console.log(encontrar);

// p. Usa every para comprobar si todos los números son positivos.
const positivos = datos.every(element => element>0);
console.log(positivos);


// q. Calcula la sumatoria del array datos mediante reduce.
const sumatoria = datos.reduce((total, valor)=> total + valor,0);
console.log(sumatoria);

// r. Calcula el valor más pequeño del array mediante reduce.
const pequeño = datos.reduce


// s. Usa flat para aplanar el array multidimensional que creaste anteriormente.


// t. Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays". Separa mediante split las distintas frases. Después mediante map quita los espacios sobrantes (trim). A continuación usa flatMap para extraer todas las palabras de cada frase en un único array.


// u. Crea el array a [1,2,3,4,5] y b [6,7,8,9,10] con literales. Concatena los arrays a y b con concat. Después con operador spread. Crea una variable const cola. Usa unshift y shift para añadir y quitar elementos. Dado el array resultante de la concatenación de a y b, obten el subarray desde el índice 2 al penúltimo elemento (slice). Usa splice para quitar los 2 últimos elementos de un array.
const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];
const concatenado = array1.concat(array2);
const concantenado2 = [...array1,...array2];
const cola = [];
const shift = array1.shift();
const shift2 = array2.unshift();

// v. Rellena con fill un array de 100 elementos con -1
const arrayRellenar = new Array(100).fill(-1);
console.log(arrayRellenar);

// w. Crea un array de cadenas. Busca con indexOf una cadena.
const arrayCadenas = ["hola", "mundo", "hola", "mundo", "hola"];
const index = arrayCadenas.indexOf("mundo");
console.log(arrayCadenas);

// x. Comprueba si la cadena "hola" está dentro del array anterior.
arrayCadenas.includes("hola");

// y. Ordena la lista de cadenas anterior de forma alfabética con sort.
arrayCadenas.sort();

// z. Crea un array vacío de 50 posiciones. Con forEach asigna valores aleatorios entre 0 y 100. Después ordena con sort de menor a mayor. Cambia y ordena de mayor a menor.

