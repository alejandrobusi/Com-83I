// const logPrint = () => {
//   console.log('hey');
// };

// const interval = setInterval(logPrint, 1000);

// setTimeout(() => clearInterval(interval), 4000);

//----DOM

// console.log(document.body);

// document.body.innerHTML = '<h1>Hola</h1>';
// // document.body.innerText = '<h1>Hola</h1>';

// const mih1 = document.createElement('h1');
// mih1.innerText = 'Hello';
// console.log(mih1);

// Formas de seleccionar elementos del documento con js
console.log(document.getElementById('test'));
// solo trae el elemento con el id unico, que no debe repetirse entre otros elementos.

console.log(document.querySelector('#test'));
console.log(document.querySelectorAll('h1'));
// permite traer elementos por clases. tag y id.

console.log(document.getElementsByClassName('adios'));
// nos devuelve un array con los, o el elemento.
const myElement = document.getElementsByTagName('p')[0];
myElement.textContent = 'jajaj';

document.body.appendChild(myElement);
