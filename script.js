// Precios
let precioPlatea = 30000;
let precioCampo = 15000;

// Saludo

let salute = prompt("Ingrese su nombre: ");
alert(
  `Hola ${salute.toUpperCase()} bienvenido/a a nuestra pagina, aquí podra sacar entradas de los eventos patrocinados.`
);

// Lista

class User {
  constructor(name, lastName, age) {
    this.name = name.toUpperCase();
    this.lastName = lastName.toUpperCase();
    this.age = age;
  }
}

function registerUsers() {
  let numberUsers = parseInt(
    prompt("Ingrese el numero de personas que van a asistir")
  );
  let users = [];
  for (let i = 0; i < numberUsers; i++) {
    let name = prompt("Ingrese nombre");
    let lastName = prompt("Ingrese apellido");
    let age = parseInt(prompt("Ingrese su edad"));
    let user = new User(name, lastName, age);
    users.push(user);
  }
  return users;
}

function registeredUsers(users) {
  for (const user of users) {
    console.log(user);
    alert(
      `Nombre: ${user.name} \n Apellido: ${user.lastName} \n Edad: ${user.age}`
    );
  }
}

function main() {
  let users = registerUsers();
  registeredUsers(users);
}

// Funciones

function platea(adulto, niño) {
  let total = adulto + niño;
  if (adulto <= 0 && niño !== 0) {
    alert("No se puede asistir sin un adulto");
  } else if (total >= 4) {
    alert("Solo se puede comprar 3 entradas por persona para platea");
  } else if (total <= 3) {
    alert(`El total a pagar es: $${precioPlatea}`);
  }
  else (total <= 3) 
  {
    main();
  }
  return total;
}

function campo(adulto, niño) {
  let total = adulto + niño;
  if (adulto <= 0 && niño !== 0) {
    alert("No se puede asistir sin un adulto");
  } else if (total >= 7) {
    alert("Solo se puede comprar 6 entradas por persona para el campo");
  } else if (total <= 6) {
    alert(`El total a pagar es: $${precioCampo}`);
  }
  else (total <= 6) 
  {
    main();
  }
  return total;
}

function Total(total) {
  alert(`El total de personas ingresadas es : ${total}`);
}

function Opciones() {
  let opciones = prompt(
    "Elige una opción, o escribe cancelar si quieres terminar. \n 1. Platea hasta 3 entradas por persona \n 2. Campo hasta 6 entradas por persona \n"
  );
  return opciones;
}

function concierto() {
  let opcionSeleccionada = Opciones();
  while (opcionSeleccionada !== "cancelar") {
    if (!isNaN(opcionSeleccionada !== "")) {
      let adulto = parseInt(prompt("Ingrese el número de adultos"));
      let niño = parseInt(prompt("Ingrese el número de niños"));
      opcionSeleccionada = parseInt(opcionSeleccionada);

      switch (opcionSeleccionada) {
        case 1:
          let totalOne = platea(adulto, niño);
          Total(totalOne);
          break;
        case 2:
          let totalTwo = campo(adulto, niño);
          Total(totalTwo);
          break;
        default:
          alert("Ingrese 1 para platea o 2 campo");
          break;
      }
    } else {
      alert("Seleccione una opción válida");
    }
    Opciones();
  }
}

concierto();
