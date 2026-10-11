// var tablaA = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10], ['A', 'B', 'C']];
// // console.log(tablaA[0].length);
// tablaA[1][1] = 20;
// //foreach 
// tablaA.forEach(function (e, i) {
//     tablaA[i].forEach(function (e, j) {
//         console.log(tablaA[i][j]);
//     });
// });

// //bidimensional a partir de un unidimensional
// var tablaB = new Array(5);
// tablaB.fill(['A', 'B', 'C']);
// console.log(tablaB);

// tablaB.forEach(function (e, i) {
//     let cadenaFila = "";
//     tablaB[i].forEach(function (e, j) {
//         cadenaFila += tablaB[i][j] + ","
//     });
//     console.log("\n" + cadenaFila);
// });



// //array bidimensional a partir de dos unidimensionales
// var tablaC = Array.of([1, 2, 3], [3, 4, 5], [tablaB]);
// console.log(tablaC);
// let cadenaArrayC = "";
// for (let i = 0; i < tablaC.length; i++) {

//     for (let j = 0; j < tablaC[i].length; j++) {
//         if (j == tablaC[i].length - 1) {
//             cadenaArrayC += tablaC[i][j];
//         }
//         else {
//             cadenaArrayC += tablaC[i][j] + ",";
//         }
//     }
//     cadenaArrayC += "\n";
// }
// console.log("\n" + cadenaArrayC);
// // console.log( cadenaFila);
// // for (let i = 0; i < tablaC.length; i++) {
// //     let cadenaFila = "";
// //     for (let j = 0; j < tablaC[i].length; j++) {

// //             cadenaFila += tablaC[i][j] + ","
// //     }
// //     console.log("\n" + cadenaFila);
// // }

// //vart tableD
// var tablaD = Array(Array(3), Array(3));
// console.log(tablaD);//bidimensional pero vacío

var frase = "Esto es un texto para hacer ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto String";

let arrFrase = frase.split(" ");
let cadenaPalabrasRevertida = " ";
for (let i = arrFrase.length; i > 0; i--) {
    // console.log(arrFrase[i]);
    cadenaPalabrasRevertida += " " + arrFrase[i];
}
console.log(cadenaPalabrasRevertida);

let arrLetras = frase.split("");
let cadenaLetrasRevertida = "";
for (let i = arrLetras.length; i > 0; i--) {
    // console.log(arrLetras[i]);
    cadenaLetrasRevertida += "" + arrLetras[i];
}
console.log(cadenaLetrasRevertida);


let anio = 2021;
for (let i = 0; i < 5; i++) {
    anio++;
    let fecha = new Date(anio + "-02-12");
    let dia = fecha.getDay();
    console.log(fecha);
    switch (dia) {

        case 0:
            console.log("Domingo");
            break;
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
    }
}


// let CadenaEntera = "Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.";

// let arrCadenaEntera = CadenaEntera.split(" ");
// let arr1letr = Array();
// let arr2letr = Array();
// let arr3letr = Array();
// let arr4letr = Array();
// let arr5letr = Array();
// let arrMasLetr = Array();
// let palabra = "";
// for (let i = 0; i < arrCadenaEntera.length; i++) {
//     palabra = arrCadenaEntera[i].replace(/[?¿(),.]/g, "").trim();
//     switch (palabra.length) {
//         case 1:
//             arr1letr.push(palabra);
//             break;
//         case 2:
//             arr2letr.push(palabra);
//             break;
//         case 3:
//             arr3letr.push(palabra);
//             break;
//         case 4:
//             arr4letr.push(palabra);
//             break;
//         case 5:
//             arr5letr.push(palabra);
//             break;
//         default:
//             arrMasLetr.push(palabra);
//             break;

//     }
// }
// console.log("número de palabras de una letra " + arr1letr.length);
// console.log("número de palabras de dos letras " + arr2letr.length);
// console.log("número de palabras de tres letras " + arr3letr.length);
// console.log("número de palabras de cuatro letras " + arr4letr.length);
// console.log("número de palabras de cinco letras " + arr5letr.length);
// console.log("número de palabras de más de cinco letras " + arrMasLetr.length);


// console.log(" palabras de una letra " + arr1letr.slice(0, arr1letr.length));
// console.log(" palabras de dos letras " + arr2letr.slice(0, arr2letr.length));
// console.log(" palabras de tres letras " + arr3letr.slice(0, arr3letr.length));
// console.log(" palabras de cuatro letras " + arr4letr.slice(0, arr4letr.length));
// console.log(" palabras de cinco letras " + arr5letr.slice(0, arr5letr.length));
// console.log(" palabras de más de cinco letras " + arrMasLetr.slice(0, arrMasLetr.length));


// console.log(cadenaLetrasRevertida);

//ej 58------------Ejercicio de cadenas: Alternar palabras en mayúsculas con palabras en minúsculas

// let cadena1 = "Un texto es el la una composición de signo";
// let arrCadena = cadena1.split(" ");

// for (let i = 0; i < arrCadena.length; i++) {
//     arrCadena[i] = arrCadena[i].replace(/[?¿(),.]/g, "").trim();
//     if (i % 2 == 0) {
//         arrCadena[i] = arrCadena[i].toUpperCase();
//     } else {
//         arrCadena[i] = arrCadena[i].toLowerCase();
//     }
// }
// let cadenaArr = arrCadena.join(" ");
// console.log(cadenaArr);



// let CadenaEntera = "Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.";

// let arrCadenaEntera = CadenaEntera.split(" ");
// let arr1letr = Array();
// let arr2letr = Array();
// let arr3letr = Array();
// let arr4letr = Array();
// let arr5letr = Array();
// let arrMasLetr = Array();
// let palabra = "";
// let palabra1 = false;
// let palabra2 = false;
// let palabra3 = false;
// let palabra4 = false;
// let palabra5 = false;
// let palabra6 = false;
// for (let i = 0; i < arrCadenaEntera.length; i++) {

//     if (palabra1 = /\s[a-zA-Z]\s/.test(arrCadenaEntera)) {
//         arr1letr.push(palabra);
//     }
//         if (palabra2 = /^\s[a-zA-Z]\s$/.test(palabra)) {
//         arr2letr.push(palabra);
//     }
//         if (palabra3 = /^\s[a-zA-Z]\s$/.test(palabra)) {
//         arr3letr.push(palabra);
//     }
//         if (palabra3 = /^\s[a-zA-Z]\s$/.test(palabra)) {
//         arr4letr.push(palabra);
//     }
//         if (palabra4 = /^\s[a-zA-Z]\s$/.test(palabra)) {
//         arr5letr.push(palabra);
//     }
//         if (palabra5 = /^\s[a-zA-Z]\s$/.test(palabra)) {
//         arrMasLetr.push(palabra);
//     }


// }
// console.log("número de palabras de una letra " + arr1letr.length);
// console.log("número de palabras de dos letras " + arr2letr.length);
// console.log("número de palabras de tres letras " + arr3letr.length);
// console.log("número de palabras de cuatro letras " + arr4letr.length);
// console.log("número de palabras de cinco letras " + arr5letr.length);
// console.log("número de palabras de más de cinco letras " + arrMasLetr.length);


// console.log(" palabras de una letra " + arr1letr.slice(0, arr1letr.length));
// console.log(" palabras de dos letras " + arr2letr.slice(0, arr2letr.length));
// console.log(" palabras de tres letras " + arr3letr.slice(0, arr3letr.length));
// console.log(" palabras de cuatro letras " + arr4letr.slice(0, arr4letr.length));
// console.log(" palabras de cinco letras " + arr5letr.slice(0, arr5letr.length));
// console.log(" palabras de más de cinco letras " + arrMasLetr.slice(0, arrMasLetr.length));

//ej 58------------Ejercicio de cadenas: Alternar palabras en mayúsculas con palabras en minúsculas

let cadena1 = "Un texto es el la una composición de signo";
let arrCadena = cadena1.split(" ");

for (let i = 0; i < arrCadena.length; i++) {
    arrCadena[i] = arrCadena[i].replace(/[?¿(),.]/g, "").trim();
    if (i % 2 == 0) {
        arrCadena[i] = arrCadena[i].toUpperCase();
    } else {
        arrCadena[i] = arrCadena[i].toLowerCase();
    }
}
let cadenaArr = arrCadena.join(" ");
console.log(cadenaArr);


