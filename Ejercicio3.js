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
const arrayMultidimensional = new Array(10);
for (let i = 0; i < arrayMultidimensional.length; i++) {
  arrayMultidimensional[i] = new Array(10);
  for (let j = 0; j < arrayMultidimensional[i].length; j++) {
    arrayMultidimensional[i][j] = i * j;
  }
}

// h. Crea un array con la factoría of con los números del 1 al 5. Después añade un elemento en la posición 10 y otro en la 50.
const numerosArray = Array.of(1, 2, 3, 4, 5);
numerosArray[9] = 10; // Añade en posición 10
numerosArray[49] = 50; // Añade en posición 50

// i. Elimina dos elementos con deconste.
delete numerosArray[0];
delete numerosArray[1];

// j. Calcula el producto de todos los números del array "datos" con forEach.
const producto = 1;
numerosArray.forEach(numero => {
  producto2= producto* numero;
});

// k. Cada elemento x del array datos debe cambiarse por x*x. Usa forEach
numerosArray.forEach((valor, indice, array) => {
  array[indice] = valor * valor;
});

// l. Crea un nuevo array con map recorriendo cada elemento x de "datos", donde cada elemento sea un string "El valor es: x". Usa template string.
const nuevoArrayMap = numerosArray.map(valor => `El valor es: ${valor}`);

// m. Crea un array nuevo mediante map que incremente cada elemento de "datos" en 5 unidades.
const incrementoArray = numerosArray.map(valor => valor + 5);

// n. Mediante filter quédate con los números impares en un nuevo array impares.
const impares = numerosArray.filter(valor => valor % 2 !== 0);

// o. Usa find para buscar el número 13.
const encontrado = numerosArray.find(valor => valor === 13);

// p. Usa every para comprobar si todos los números son positivos.
const positivos = numerosArray.every(valor => valor > 0);

// q. Calcula la sumatoria del array datos mediante reduce.
const suma = numerosArray.reduce((total, valor) => total + valor, 0);

// r. Calcula el valor más pequeño del array mediante reduce.
const minimo = numerosArray.reduce((min, valor) => (valor < min ? valor : min), numerosArray[0]);

// s. Usa flat para aplanar el array multidimensional que creaste anteriormente.
const arrayAplanado = arrayMultidimensional.flat();

// t. Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays". Separa mediante split las distintas frases. Después mediante map quita los espacios sobrantes (trim). A continuación usa flatMap para extraer todas las palabras de cada frase en un único array.
const cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays";
const palabras = cadena.split(' ').map(palabra => palabra.trim());
const palabrasAplanadas = palabras.flatMap(palabra => palabra.split(' '));

// u. Crea el array a [1,2,3,4,5] y b [6,7,8,9,10] con literales. Concatena los arrays a y b con concat. Después con operador spread. Crea una variable const cola. Usa unshift y shift para añadir y quitar elementos. Dado el array resultante de la concatenación de a y b, obten el subarray desde el índice 2 al penúltimo elemento (slice). Usa splice para quitar los 2 últimos elementos de un array.
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
const concatenados = a.concat(b);
const concatenadosSpread = [...a, ...b];
const cola = [];
cola.unshift(1, 2, 3);
cola.shift();
const subArray = concatenados.slice(2, -1);
concatenados.splice(-2);

// v. Rellena con fill un array de 100 elementos con -1
const arrayRelleno = new Array(100).fill(-1);

// w. Crea un array de cadenas. Busca con indexOf una cadena.
const arrayCadenas = ['Hola', 'Adiós', 'Buenos días'];
const indice = arrayCadenas.indexOf('Adiós');

// x. Comprueba si la cadena "hola" está dentro del array anterior.
const contieneHola = arrayCadenas.includes('hola');

// y. Ordena la lista de cadenas anterior de forma alfabética con sort.
arrayCadenas.sort();

// z. Crea un array vacío de 50 posiciones. Con forEach asigna valores aleatorios entre 0 y 100. Después ordena con sort de menor a mayor. Cambia y ordena de mayor a menor.
const arrayVacio = new Array(50);
arrayVacio.forEach((_, indice) => arrayVacio[indice] = Math.floor(Math.random() * 101));
arrayVacio.sort((a, b) => a - b); // Ordena de menor a mayor
arrayVacio.sort((a, b) => b - a); // Ordena de mayor a menor
