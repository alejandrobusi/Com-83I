class Persona {
  constructor(nombre, edad) {
    this.name = nombre;
    this.age = edad;
    this.badFood = ['carne', 'pollo', 'cerdo', 'asado'];
  }
  saludar() {
    alert(`Hola ${this.name}`);
  }
  comer(comida) {
    const result = this.badFood.find((food) => food === comida.toLowerCase());
    if (result) {
      alert(`Yo no como ${comida}`);
    } else {
      alert(`Bien, la ${comida} es sana!`);
    }
  }
  get obtenerNombre() {
    return this.name;
  }
  set cambiarNombre(newName) {
    this.name = newName;
  }
}

const yo = new Persona('ale', 29);
const yo2 = new Persona('Maxi', 19);

console.log(yo);

for (const key in yo) {
  if (yo.hasOwnProperty(key)) {
    console.log(yo[key]);
  }
}

/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
imagen
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class People {
  constructor(nombre, edad, dni, sexo, peso, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.añoDeNacimiento = añoDeNacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010:
        alert(
          `${this.nombre} pertenece a la generación Z, su rasgo caracteristico es bla bla bla`
        );
        break;
      case this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <= 1993:
        alert(
          `${this.nombre} pertenece a la generación Y, su rasgo caracteristico es bla bla bla`
        );
        break;

      default:
        break;
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) return alert('Es mayor de edad');
    alert('no es mayor de edad');
  }
  mostrarDatos() {
    alert(`Datos de ${this.nombre}:\nEdad: ${this.edad}.\nDNI: ${this.dni}`);
  }
  generarDni() {
    this.dni = Math.round(Math.random() * 99999999);
  }
}

const persona1 = new People('Juan', 18, 38999774, 'Hombre', 60, 1982);
console.log(persona1);

//Dom y Bom

const titulo = document.createElement('h1');
titulo.innerText = 'Hola como va';
titulo.style = 'color: red';
document.body.appendChild(titulo);

const elBoton = document.getElementById('miBoton');
// .setAttribute('disabled', 'test');

console.log(window.location);

const testWindow = () => {
  // window.location.reload();
  // window.location.replace('https://google.com.ar');
  // window.location.href = 'https://taringa.net';
  // window.history.back();
  // window.history.go(-1);
  // window.location.pathname = '/test/1';
  clearInterval(interval);
};

// if (window.location.protocol === 'http:') {
//   const question = confirm(
//     'Esta pagina no es segura. quieres cambiar de pagina?'
//   );
//   if (question) {
//     window.location.href = 'https://taringa.net';
//   }
// }

const log = () => {
  console.log('hola');
};
const interval = setInterval(log, 500);

setTimeout(() => clearInterval(interval), 5000);

document.body.innerHTML = '<h1>Hello </h1>';
document.body.innerText = '<h1>Hello </h1>';
