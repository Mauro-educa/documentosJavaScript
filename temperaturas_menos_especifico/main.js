// import { Ciudad } from "./ciudad.js";

// let ciudad1 = new Ciudad("valladolid");
// let ciudad2 = new Ciudad("madrid");
// let ciudad3 = new Ciudad("sevilla");
// let ciudad4 = new Ciudad("bilbao");

// ciudad1.recogerTemperaturas();
// ciudad2.recogerTemperaturas();
// ciudad3.recogerTemperaturas();
// ciudad4.recogerTemperaturas();

// let mapaCiudades = new Map();
// mapaCiudades.set(1, ciudad1);
// mapaCiudades.set(2, ciudad2);
// mapaCiudades.set(3, ciudad3);
// mapaCiudades.set(4, ciudad4);

// function crearTabla() {
//     let htmlTabla = "";


//     htmlTabla += "<tr><th>Ciudad / Día</th>";
//     for (let i = 0; i <= 30; i++) {
//         htmlTabla += "<th>Día " + i + "</th>";
//     }
//     htmlTabla += "</tr>";

//     // Añadir las filas de cada ciudad
//     mapaCiudades.forEach(ciudad => {
//         htmlTabla += ciudad.toHtml();
//     });

//     document.getElementById("tabla").innerHTML = htmlTabla;
// }

// crearTabla();

// document.getElementById("p").innerHTML = "Tabla generada correctamente.";


import { Ciudad } from "./ciudad.js";
import { CentralMedidas } from "./centralMedidas.js";

let ciudad1 = new Ciudad("valladolid");
let ciudad2 = new Ciudad("madrid");
let ciudad3 = new Ciudad("sevilla");
let ciudad4 = new Ciudad("bilbao");

ciudad1.recogerTemperaturas();
ciudad2.recogerTemperaturas();
ciudad3.recogerTemperaturas();
ciudad4.recogerTemperaturas();

let centralMedidas = new CentralMedidas();

centralMedidas.insertaMedidas("valladolid", ciudad1);
centralMedidas.insertaMedidas("madrid", ciudad2);
centralMedidas.insertaMedidas("sevilla", ciudad3);
centralMedidas.insertaMedidas("bilbao", ciudad4);

document.getElementById("tabla").innerHTML = centralMedidas.devolverTabla();

document.getElementById("p").innerHTML = "Tabla generada correctamente.";