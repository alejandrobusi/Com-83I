//--- loops
let i = 6;
// while (i < 5) {
//   console.log('Estamos en el while');
//   i++;
// }

// do {
//   console.log('Estamos en el doWhile');
//   i++;
// } while (i < 5);

//------FOR

// for (let i = 0; i < 5; i++) {
//   console.log('Estamos en el for');
// }

//------ ARRAYS

let alumnos = ['Sofi', 'Benja', 'Crist', 'Bruno'];
let alumnos2 = ['ale', 'fran'];
// console.log(alumnos[alumnos.length - 1]);

// for (let i = 0; i < alumnos.length; i++) {
//   console.log(alumnos[i]);
// }
//-----Como agregar elementos al final de un array
// alumnos.push('Leon');

//----- reemplazar un elemento
// alumnos[3] = 'Rolling';

//------Agregar otro elementoen una posicion especifica

// alumnos.splice(1, 2, 'Anahi');

//------ encontrar indice de un elemento especifico
// console.log(alumnos.indexOf('Sofi'));

//---- eliminar elementos
// alumnos.splice(0, 1);

//-----eliminar el ultimo item
// alumnos.pop();
//---Eliminar el primer elemento de un array

// alumnos.shift();
//----Agregar un elemento al principio

// alumnos.unshift('Ale');
//----Unir dos arrays
// const newArr = alumnos.concat(alumnos2).reverse();
// console.log(newArr);

//---crear unc copia superficial de una rray teniendo en cuenta el inicio y el fin de el mismo
// const newArr = alumnos.slice(1, 3);
// console.log(newArr);
//---- convertir un array a string con un separador especifico
// console.log(alumnos.join(' - '));

//---- ejercicio numero 9
/* 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
*/
// let inputUser = prompt('Ingresa una frase').toLowerCase();
// let vocales = [];

// for (let i = 0; i < inputUser.length; i++) {
//   if (
//     inputUser[i] === 'a' ||
//     inputUser[i] === 'e' ||
//     inputUser[i] === 'i' ||
//     inputUser[i] === 'o' ||
//     inputUser[i] === 'u'
//   ) {
//     vocales.push(inputUser[i]);
//   }
// }
// console.log(vocales);

//----Operador ternario

let active = true;
// let result = active ? 'Activado' : 'Desactivado';
let name;
// let result = active && 'Activado';
let result = name || 'Carlitox';

// if (active) {
//   result = 'Activado';
// } else {
//   result = 'Desactivado';
// }

// console.log(result);
//-----Funciones
//---declarativas
// alert(saludar('carlitos', 'el crack'));
function saludar(name = 'Amigo', lastName = 'mio') {
  let saludo = `Hola ${name} ${lastName}`;
  console.log('se ejecuto saludar');
  return saludo;
}

function mostrarAlertaDeSaludo(name, lastName) {
  alert(saludar(name, lastName));
}
const nombre = 'Ale';
// const saludo = saludar(nombre, 'Busi');

//----Anonimas

const suma = function (a, b) {
  return a + b;
};

let resultado = suma(9, 9);

//---- Funcion flecha

const resta = (a, b) => {
  return a - b;
};

//return implicito

const resta2 = (a, b) => a - b;

const saludarV2 = (name) => alert(name);

//----Funcion dinamica

let resultado2 = resta2(4, 2);
console.log(resultado2);
