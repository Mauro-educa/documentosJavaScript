import { Saludo } from "./saludo.js";

console.log("main.js cargado");

const s = new Saludo("Mauro");

document.getElementById("salida1").innerHTML = "main.js funciona";
document.getElementById("salida2").innerHTML = s.decirHola();