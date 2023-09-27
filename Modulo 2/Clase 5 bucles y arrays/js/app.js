// const inputUser = parseInt(prompt('ingresa un numero'), 2);
// console.log(inputUser);
// const numDefault = 10;

// if (inputUser > numDefault) {
//   alert(`el numero ${inputUser} es mayor al numero por default`);
// } else if (inputUser < numDefault) {
//   alert('el numero que ingresaste es menor al numero por default');
// } else {
//   alert('el numero que ingresaste es igual al numero por default');
// }
//--------- switch

// const estacion = prompt('Ingresa una estacion del año').toLowerCase();

// switch (estacion) {
//   case 'primavera':
//     alert('mg la primavera!');
//     break;
//   case 'verano':
//     alert('no mg tanto');
//     break;
//   case 'invierno':
//     alert('eeee masoomeeno');
//     break;
//   case 'otoño':
//     alert('esta buena la estacion');
//     break;
//   default:
//     console.log(estacion);
//     alert('no coincide con nada men');
//     break;
// }

// let num = 15;
// if (num >= 10 && num <= 20) {
//   console.log('esta entre 10 y 20');
// }

//----- bucles
// -- While
// let i = 0;
// while (confirm('Quieres  repetir el loop?')) {
//   console.log('Hola Mundo');
//   i++;
// }

//----doWhile
// let i = 0;
// do {
//   console.log('Hola Mundo');
//   i++;
// } while (i < 5);

//--- for

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//.----arrays

let nuestroArray = ['Juan', 5, true, [1, 2, 3, 4], 'Tornese'];
// console.log(nuestroArray[nuestroArray.length - 1]);
for (let i = 0; i < nuestroArray.length; i++) {
  if (Array.isArray(nuestroArray[i])) {
    for (let e = 0; e < nuestroArray[i].length; e++) {
      console.log(nuestroArray[i][e]);
    }
  }
}

let arr = ['test', 4];
arr.push(78);
console.log(arr);
