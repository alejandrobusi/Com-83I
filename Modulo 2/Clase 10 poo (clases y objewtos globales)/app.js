/*
//OBJETOS GLOBALES
console.log(Math);
const fecha = new Date();
console.log(fecha.getDate());

//REGEX
const checkEmail = () => {
  const email = document.getElementById('inputUser').value;
  const password = document.getElementById('pass').value;

  const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const validationPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (validationEmail.test(email)) {
    alert('el email es correcto');
  } else {
    alert('incorrecto');
  }
  if (validationPass.test(password)) {
    alert('la contraseña cumple los requisitos');
  } else {
    alert('La contraseña no cumple los requisitos');
  }
};

//OBJ ERROR
const fail = new Error('Error generado por nosotros');
try {
  if (confirm('selecciona una opcion')) {
    throw new Error('ha ocurrido un error');
  }
  console.log('heyy');
} catch (error) {
  console.error(error.message);
}
*/
// Clases

class Persona {
  constructor(nombre, apellido, edad) {
    this.name = nombre;
    this.lastName = apellido;
    this.age = edad;
  }
  comer() {
    alert(`${this.name} esta comiendo`);
  }
  editarNombre() {
    this.name = 'test';
  }
}

// const persona1 = new Persona('Ale', 'Busi', 29);
// const persona2 = new Persona('Santi', 'Martinez', 18);

// console.log(persona1);

// for (const key in persona1) {
//   if (persona1.hasOwnProperty(key)) {
//     console.log(persona1[key]);
//   }
// }

const createUser = () => {
  const userName = prompt('Ingresa tu nombre');
  const userLastName = prompt('Ingresa tu apellido');
  const userAge = prompt('Ingresa tu edad');
  return new Persona(userName, userLastName, userAge);
};

const usuario = createUser();
const usuario1 = createUser();

console.log(usuario, usuario1);
