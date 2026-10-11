//lenguaje_72.js - Ejercicio de expresiones regulares:
//  A partir de una cadena CSV almacenar en un array de forma ordenada
// Orden --> Nombre, DNI, teléfono, código postal y matrícula

var cadenaCSV = "Ana,34567881A,983123456,47030,8948RGH,38012,2145SDC,Luis,912323232,81233234H,87654321Q,23456,4532PLF,Marta,671223344,656778899,76543,Jose Luis,4567KJL,98765432W";

var valNombre = /^([A-Z][a-z]*)( [A-Z][a-z]*)*$/;
var valDNI = /^(0-9){8}[A-B]$/;
var valTelef = /^(9|6)[0-9]{8}$/;
var valCp = /^[1-9]{5}$/;
var valMatricula = /^[A-B]{7}(0-9)$||^[A-B]{4}(0-9){3}$/;

let arrayValidaciones = Array(/^([A-Z][a-z]*)( [A-Z][a-z]*)*$/, /^(0-9){9}[A-B]$/, /^(9|6)[0-9]{8}/, /^[1-9]{5}/, /^[A-B]{7}(0-9)$/);
let arrayCSV = cadenaCSV.split(",");
let arrayCSVValido = Array();
let a = -1;
for (let i = 0; i < arrayCSV.length; i++) {
    for (let j = 0; j < 5; j++) {
        let esValido = arrayValidaciones[j].test(arrayCSV[i]);

        if (esValido) {
            let posicion = Math.floor(i / 5) * 5 + j;
            arrayCSVValido[posicion]=arrayCSV[i];
        }
    }
}

console.log(arrayCSV);
console.log();
console.log(arrayCSVValido);