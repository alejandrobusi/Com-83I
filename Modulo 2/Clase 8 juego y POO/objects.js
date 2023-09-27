const auto = {
  marca: 'Fiat',
  modelo: 'argo',
  potenciaHp: [120, 170],
  isFull: false,
};
/*

console.log(auto['marca']);
console.log(auto.marca);

console.log(auto.potenciaHp[1]);
// Agregar propiedades a un objeto
auto.precio = 4000;

// Editar una propiedad
auto.precio = 9000;

// Eliminar propiedad
delete auto.precio;
console.log(auto);

for (let llave in auto) {
  console.log(llave);
  if (auto.hasOwnProperty(llave)) {
    console.log(auto[llave]);
  }
}

let llaves = Object.keys(auto);

for (let i = 0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(auto[llave]);
}
*/

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

// for (let i = 0; i < products.length; i++) {
//   console.group(`Nombre: ${products[i].name}`);
//   console.log(`Precio: ${products[i].price}`);
//   console.log(`Categorias : ${products[i].categories.join(' - ')}`);
//   console.groupEnd();
// }

products.map((product, i) => {
  console.group(`Nombre: ${product.name} ${i}`);
  console.log(`Precio: ${product.price}`);
  console.log(`Categorias : ${product.categories.join(' - ')}`);
  console.groupEnd();
});

console.log(products.find((product) => product.name === 'Leche'));

console.log(products.filter((product) => product.price >= 100));
