
let stringFrase = "en un lugar de la mancha";
// let f4 = frase => {
//     let cadenas = [];
//     let cadena = "";
//     cadenas = frase.split(" ");
//     for (let i in cadenas) {
//         cadena = cadenas[i];
//         cadena.toUpperCase();
//         cadenas[i] = cadena;
//     }

//     return cadenas.join("");
// }

// console.log(f4(stringFrase));

// let f5 = frase => {
//     let cadenas = [];
//     let cadena = "";
//     let sumaTama = 0;
//     console.log(frase);
//     cadenas = frase.split(" ");
//     for (let i in cadenas) {
//         cadena = cadenas[i];
//         sumaTama += cadena.length;
//     }


//     return sumaTama / cadenas.length;
// }

// console.log(f5(stringFrase));


let f4 = frase =>
    frase.split(" ")
        .map((n) => n[0].toUpperCase() + n.slice(1))
        .reduce((fraseFinal, palabra) => fraseFinal + palabra);
console.log(f4(stringFrase));

let f5 = frase =>
    frase.split(" ")
        .reduce((ac, n) =>  ac + n.length , 0) / frase.split(" ").length;
console.log(f5(stringFrase));

let f6= frase => frase.split(" ").filter(a=> a.includes
    
    
    
    
    ("a")).map(a=> a.length);

console.log(f6(stringFrase));


