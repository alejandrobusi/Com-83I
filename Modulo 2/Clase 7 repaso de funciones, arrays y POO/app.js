//----declarativas
// let test;
// console.log(test);

function saludar(name = 'bienvenido', lastName = 'de nuevo') {
  alert(`Hola ${name} ${lastName}`);
}

// saludar('Ale', 'Busi');

function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function resta(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

function obtenerParametrosYResolver(operation) {
  const numeroA = parseInt(prompt('Ingresa el primer numero'));
  const numeroB = parseInt(prompt('Ingresa el segundo numero'));
  const result = operation(numeroA, numeroB);
  printResult(`El resultado es ${result}`);
}

function printResult(dataToPrint) {
  document.getElementById('test').textContent = dataToPrint;
}

//---- anonimas
//---- Funciones flecha

const dividir = function (a, b) {
  return a / b;
};

// const multiplicar = (a, b) => {
//   return a * b;
// };

// const multiplicar = (a, b) => a * b;

const multiplicar = (a) => a * 5;

// ---- metodos para arrays

var personas = ['alejandro', 'jose', 'jose', 'raul', 'fran', 'charly'];

// Recorrer array con un forEach

// personas.forEach((x, i) => {
//   console.log(x, i);
// });

//find

const resultado = personas.find((persona) => persona === 'jose');
console.log(resultado);

//filter

const resultado2 = personas.filter((persona) => persona === 'jose');
console.log(resultado2);

//findIndex

const resultado3 = personas.findIndex((persona) => persona === 'jose');
console.log(resultado3);

//map

const resultado4 = personas.map((persona) => {
  return persona.concat(' xd');
});
console.log(resultado4);

//some
console.log(personas.some((persona) => persona.length == 4));

// every
console.log(personas.every((persona) => persona.length == 4));
