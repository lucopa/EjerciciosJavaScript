// a. Crear una cadena multilínea con comillas dobles.
const multilineString = "Este es un\nstring\ncon múltiples\nlíneas";
console.log(multilineString)
console.log("----------------")

// b. Añadir retorno de carro y tabuladores con el símbolo de escape
const linea = "Una linea de prueba"
multilineString2 = linea+ "\n\tEsto está\ttabulado";
console.log(multilineString2)
console.log("----------------")


// c. Añadir el carácter \
multilineString3 = linea+"\\ Agregando una barra ";
console.log(multilineString3)
console.log("----------------")


// d. Concatenar otra cadena con el operador +
multilineString4 = linea+ "Concatenando otra cadena";
console.log(multilineString4)
console.log("----------------")

// e. Concatenar cadenas usando una template string con valores de variables
const variable1 = "valor1";
const variable2 = "valor2";
const concatenationTemplate = `Valores de las variables: ${variable1} y ${variable2}`;
console.log(concatenationTemplate)
console.log("----------------")

// f. Separar un texto que tenga varias frases en un array con cada frase por separado.
const textoConFrases = "Esta es la primera frase. Esta es la segunda frase.";
const arrayDeFrases = textoConFrases.split(". ");
console.log(arrayDeFrases);
console.log("----------------")

// g. Convertir un texto dado a minúsculas.
const textoEnMinusculas = "TEXTO EN MINÚSCULAS";
textoEnMinusculas2 = textoEnMinusculas.toLowerCase();
console.log(textoEnMinusculas2);
console.log("----------------")

// h. Convertir un texto dado a mayúsculas.
const textoEnMayusculas = "texto en mayúsculas";
textoEnMayusculas2 = textoEnMayusculas.toUpperCase();
console.log(textoEnMayusculas2);
console.log("----------------")

// i. Recorrer con un bucle el texto caracter a caracter imprimiéndolo.
const textoRecorrer = "Recorriendo el texto caracter a caracter";
for (let i = 0; i < textoRecorrer.length; i++) {
  console.log(textoRecorrer[i]);
}
console.log("----------------")



// j. Buscar una subcadena en un texto.
const textoBuscar = "Este es un texto para buscar una subcadena";
const subcadenaBuscada = "buscar";
const encontrado = textoBuscar.includes(subcadenaBuscada);
console.log(encontrado);

// k. Extraer en una variable la subcadena desde la posición 3 hasta el final del texto.
const textoExtraer = "Extrayendo una subcadena desde la posición 3.";
const subcadenaExtraida1 = textoExtraer.substring(3);
console.log(subcadenaExtraida1);

// l. Extraer en una variable la subcadena desde la posición 3 hasta la primera ocurrencia de una palabra en el texto.
const subcadenaExtraida2 = textoExtraer.substring(3, textoExtraer.indexOf("subcadena"));
console.log(subcadenaExtraida2);

// m. Reemplazar todos los espacios del texto por un -
const textoConEspacios = "Texto con espacios para reemplazar";
const textoSinEspacios = textoConEspacios.replace(/ /g, "-");
console.log(textoSinEspacios);

// n. Eliminar los espacios antes y después del texto.
const textoConEspaciosLaterales = "   Texto con espacios antes y después   ";
const textoSinEspaciosLaterales = textoConEspaciosLaterales.trim();
console.log(textoSinEspaciosLaterales);

// o. Crear una cadena que no tenga ningún espacio partiendo de otra dada.
const cadenaConEspacios = "Cadena con espacios";
const cadenaSinEspacios = cadenaConEspacios.replace(/ /g, "");
console.log(cadenaSinEspacios);

// p. Crear una función que invierta una cadena de texto.
function invertirCadena(texto) {
  return texto.reverse();
}

// q. Usar una expresión regular para comprobar que la cadena tiene números.
const cadenaConNumeros = "Cadena con números: 12345";
const contieneNumeros = /[0-9]/.test(cadenaConNumeros);
console.log(contieneNumeros);

// r. Usar una expresión regular para comprobar que la cadena termina en punto.
const cadenaTerminaPunto = "Cadena que termina en punto.";
const terminaEnPunto = /\.$/.test(cadenaTerminaPunto);
console.log(terminaEnPunto);

// s. Usar una expresión regular para comprobar que la cadena comienza por una mayúscula.
const cadenaEmpiezaMayuscula = "Cadena que empieza con mayúscula.";
const empiezaMayuscula = /^[A-Z]/.test(cadenaEmpiezaMayuscula);
console.log(empiezaMayuscula);

// t. Usar una expresión regular para comprobar si la cadena contiene un teléfono con código internacional.
const cadenaTelefono = "El número de teléfono es +1234567890";
const contieneTelefono = /\+\d{1,}/.test(cadenaTelefono);
console.log(contieneTelefono);

//u.Reemplaza cualquier ocurrencia de un + seguido de números por la cadena SECRETO
const textoOriginal = "El código es +12345 y el otro es +98765.";
const textoModificado = textoOriginal.replace(/\+\d+/g, "SECRETO");
console.log(textoModificado);

