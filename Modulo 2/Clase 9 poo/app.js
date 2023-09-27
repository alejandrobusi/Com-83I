// console.log(auto.marca);
// console.log(auto['marca']);

// auto.precio = 8000;

// // delete auto.precio;
// console.log(auto);

// document.write(`$ ${auto.precio}`);

// for (const llave in auto) {
//   if (auto.hasOwnProperty(llave)) {
//     console.log(`${llave}: ${auto[llave]}`);
//   }
// }
/*
let products = [
  {
    id: 1232,
    name: 'Leche',
    price: 120,
    categories: ['familiar', 'comida'],
  },
  {
    id: 1232,
    name: 'Arroz',
    price: 80,
    categories: ['familiar', 'comida'],
  },
  {
    id: 3442,
    name: 'Lavadora',
    price: 7800,
    categories: ['electrodomésticos'],
  },
];

products.forEach((product) => {
  console.group(`ID: ${product.id}`);
  console.log(`Producto: ${product.name}`);
  console.log(`Precio: ${product.price}`);
  console.log(`Categoria: ${product.categories.join(' - ')}`);
  console.groupEnd();
});

const result = products.find((product) => product.name === 'Leche');
console.log(result);
let filterImport = 100;
const result2 = products.filter((product) => product.price >= filterImport);
console.log(result2);

Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

for (let i = 1; i < 500; i++) {
  document.write(i);
  if (i % 4 === 0) {
    document.write(' <-- Es multiplo de 4');
  }
  if (i % 9 === 0) {
    document.write(' <-- Es multiplo de 9');
  }
  if (i % 5 === 0) {
    document.write('<br>');
    document.write('---------------');
  }
  document.write('<br>');
}
*/
//Formas de crear objetos
// notacion literal
const auto = {
  marca: 'Peugeot',
  modelo: '208',
  potencia: [120, 170],
  esFull: false,
  encender: () => {
    alert('encendiendo señorr');
  },
};

//Funcion constructora

function Persona(nombre, apellido, edad) {
  this.name = nombre;
  this.lastName = apellido;
  this.age = edad;
  this.greet = function () {
    alert(`Hola ${this.name}`);
  };
}

let persona1 = new Persona('Ale', 'Busi', 29);
let persona2 = new Persona('Juan', 'Topo', 68);
// console.log(persona1, persona2);

// persona1.greet();

//El constructor Object

const persona3 = new Object();

// persona3.name = 'Bruno';

//Object.create

const auto2 = Object.create(auto);
auto2.marca = 'Chevrolet';

// Comparando objetos

let personaA = { nombre: 'juan' };
let personaB = personaA;

personaB.nombre = 'jajaja';
console.log(personaA);

//Objetos globales

console.log(Math);
const date = new Date(1993, 10, 13);
console.log(date.getTime);
