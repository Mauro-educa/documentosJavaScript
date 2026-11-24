import { Socio } from "./socio.js";
import { Entrenador } from "./entrenador.js";

let arrayActividades = ["crossfit", "pesas", "bicicleta"];

let nombre = window.prompt("Inserta el nombre");
let apellidos = window.prompt("Inserta el apellido");
let dni = window.prompt("Inserta el dni");
let telefono = window.prompt("Inserta el telefono");

let socio1 = new Socio(nombre, apellidos, dni, telefono, arrayActividades);
let entrenador1 = new Entrenador("Ana", "López", "12345678Z", "600-000-000", ["crossfit"]);

document.getElementById("salida1").innerHTML = socio1.reservarClase(1);
document.getElementById("salida2").innerHTML = entrenador1.valorarSesion(1, 8);