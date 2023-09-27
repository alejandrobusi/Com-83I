/*let name = 'Alejandro';
let age = 29;
let isOld = false;

name = 'jose';
console.log(name.toUpperCase());

console.log(3 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(3 / 3);
console.log(4 % 2);
age--;
console.log(age);
console.log(!isOld);


let num1 = 8;
let num2 = '5';
let num3 = 10;
// const edadMinima = 18;

// console.log(num1 <= edadMinima);

// console.log(num1 > num2 && !(num2 > num3));
// console.log(num1 > num2 || num2 > num3);

// Metodos y propiedades para numeros

let testNum = 12.01;
let numFixed = testNum.toFixed(1);
console.log(numFixed);
//Convertir una vadena a numero entero.
console.log(parseInt(numFixed));
//convertir una cadena a numero decimal
console.log(parseFloat(numFixed));
//redondear un numero al entero mas cercano
console.log(Math.round(testNum));
// redondea hacia abajo al entero mas cercano
console.log(Math.floor(testNum));
// redondea hacia arriba al entero mas cercano
console.log(Math.ceil(testNum));
// generar numerop aleatorio entre el cero (inclusive el 0)
console.log(Math.random());
console.log(Math.round(Math.random() * 10));
// encontrar el valor mas alto entre unos numeros
console.log(Math.max(12, 58, 88));
//encontrar el numero mas bajo en una lista de numeros
console.log(Math.min(12, 5, 88));
//comprobar si un valor es un numero
console.log(isNaN(25));
//comprobar si un numero es entero
console.log(Number.isInteger(testNum));

// Metodos  propiedades para String
let exampleText = 'alejandro, Busi, Busi, Busi';
//Saber el largo de una cadena de texto
console.log(exampleText.length);
//obtener el caracter en una posicion espeficica de la cadena
console.log(exampleText.charAt(0));
//Extraer una porcion de una cadena de texto basandonos en el indice de inicio y de fin
console.log(exampleText.slice(0, 9));
//encuentra la primera posicion en una sub cadena
console.log(exampleText.indexOf('Busi'));
//encuentra la ultima pposicion en una sub cadena de una cadena
console.log(exampleText.lastIndexOf('Busi'));
//pasar todo a minusculas
console.log('HOLA COMO VA'.toLowerCase());
//pasar todo a mayusculas
console.log('hola como estas'.toUpperCase());
//eliminar los espacios en blanco al pricipio y al final de un sstring
console.log('   alejandro@blabla.com    '.trim());
//dividir una cedena espeficicandole el delimitador
let frutas = 'manzana ,jajaja, banana, pera';
console.log(exampleText.split(','));
console.log(frutas.split(','));
//reemplazar una sub cadena de texto
console.log(exampleText.replace('alejandro', 'ale'));
//concatener strings
console.log(exampleText.concat(frutas));
//comprobar si una cadenma de texto comienza con un a palabra especiofica
console.log(exampleText.startsWith('alejandro'));
//comprobar si una cadenma de texto termina con un a palabra especiofica
console.log(exampleText.endsWith('Busi'));
//comprobar si una cadena contiene una sub cadena
console.log(frutas.includes('pera'));
//repetir cadenas de texto
console.log(frutas.repeat(5));
*/
/// Condicionales
// let edadBruno = parseInt(prompt('Ingresa tu edad'));
// let edadRequerida = 18;

// if (edadBruno === edadRequerida) {
//   alert('Entramos Al after');
// }

console.log('ya pasamos el if...');

let num1 = parseInt(prompt('ingresa tu el primer numero'));
let num2 = parseInt(prompt('ingresa tu el segundo numero'));
console.log(num1, num2);

if (num1 > num2) {
  alert('El primer numero es mayor que el segundo');
} else {
  alert('El segundo numero es el mayor');
}
