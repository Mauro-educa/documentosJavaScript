// class Vehiculo {
//     constructor(pasajeros) {
//         this._pasajeros = pasajeros;
//     }
//     set pasajeros(value) {
//         this._pasajeros = value;
//     }
//     get pasajeros() {
//         return this._pasajeros;
//     }
// }

// class Coche extends Vehiculo {
//     constructor(pasajeros, color) {
//         super(pasajeros);
//         this._color = color;
//     }
//     set color(value) {
//         this._color = value;
//     }
//     get color() {
//         return this._color;
//     }
// }
// class Camion extends Vehiculo {
//     constructor(pasajeros, tara) {
//         super(pasajeros);
//         this._tara = tara;
//     }
//     set tara(value) {
//         this._tara = value;
//     }
//     get tara() {
//         return this._tara;
//     }
// }

import {Coche} from "./coche.js";
import {Camion} from "./camion.js";

function capturaReloj() {
    let now = new Date();

    return (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}
console.log(capturaReloj());

let arrayGlobal = [];
function generaVehiculos() {

    let colores = ["blue", "red", "green"];
    let nTurismos = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < nTurismos; i++) {
        let nPasajeros = Math.floor(Math.random() * 7) + 1;
        let posiColor = Math.floor(Math.random() * colores.length);
        let coche = new Coche(nPasajeros, colores[posiColor]);
        arrayGlobal.push(coche);
    }
    let nCamiones = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < nCamiones; i++) {
        let nPasajeros = Math.floor(Math.random() * 7) + 1;
        let tara = Math.floor(Math.random() * 9999) + 1;
        let camion = new Camion(nPasajeros, tara);
        arrayGlobal.push(camion);
    }
}



// arrayGlobal.map(valor => console.log(valor));
let contador = 0;
function mostrarVehiculos() {

    generaVehiculos();
    document.write("<table border='1'>");
    for (let i = 0; i < arrayGlobal.length; i++) {
        document.write("<tr>");
        document.write(`<td>Hora: ${capturaReloj()}</td>`);
        document.write(`<td>Tipo: ${arrayGlobal[i].constructor.name}</td>`);
        document.write(`<td> ${arrayGlobal[i].Pasajeros}</td>`);
        if (arrayGlobal[i].constructor.name == "Coche") {
            document.write(`<td bgcolor= "${arrayGlobal[i].Color}">Color: ${arrayGlobal[i].Color}</td>`);
        }
        else {
            document.write(`<td>Tara: ${arrayGlobal[i].Tara}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");

    contador++;
    if (contador >= 10) {
        clearInterval(intervalo);
    }
}


let intervalo = setInterval(mostrarVehiculos, 2000);
