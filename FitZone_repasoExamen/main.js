import { Socio } from "./socio.js";
import { Entrenador } from "./entrenador.js";

// nombre, apellidos, dni, telefono
let arrayActividades = ["crossfit", "pesas", "bicicleta"];


let nombre = window.prompt("inserta el nombre");
let apellidos = window.prompt("inserta el apellido");
let dni = window.prompt("inserta el dni");
let telefono = window.prompt("inserta el telefono");
let socio1 = new Socio(nombre, apellidos, dni, telefono,arrayActividades);
// let entrenador1 = new Entrenador(arrayActividades);
document.getElementById("salida1").innerHTML = socio1.reservarClase(1);