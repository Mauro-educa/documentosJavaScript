// queremos obtener por la pantalla del navegador una
//  relación de algunas comunidades autónomas y algunas de sus provincias
// castilla y leon valladolid burgos leon palencia
// valencia: valencia alicante 
// andalucia: sevilla cordoba almeria 

// a- definir los arrays necesarios con los datos
// b- recorrer los arrays para que se muestre lo de arriba
// c- hacer un recorrido como el del caso anterior, pero mostrando 
// sololas provincias que empiezan por "V" o "C" y en mayúsculas;

let castilla = ["Valladolid", "Burgos", "León", "Palencia"];
let valencia = ["Valencia", "Alicante"];
let andalucia = ["Sevilla", "Córdoba", "Almería"]

function funCastilla() {
    let salida = "Castilla y Leon: ";
    castilla.forEach(e => salida += " " + e);
    return salida;
}


function funValencia() {
    let salida = "Valencia:  ";
    valencia.forEach(e => salida += " " + e);
    return salida;
}

function funAndalucia() {
    let salida = "Andalucia: ";
    andalucia.forEach(e => salida += " " + e);
    return salida;
}


/////////
console.log(funCastilla());
console.log(funValencia());
console.log(funAndalucia());

let funCastillaFiltrado=()=>castilla.filter(e => e.charAt(0) == "C" || e.charAt(0) == "V").join(" ");
let funValenciaFiltrado=()=>valencia.filter(e => e.charAt(0) == "C" || e.charAt(0) == "V").join(" ");
let funAndaluciaFiltrado=()=>andalucia.filter(e => e.charAt(0) == "C" || e.charAt(0) == "V").join(" ");
console.log("Castilla y leon filtrado: " + funCastillaFiltrado());
console.log("Valencia filtrado: " +funCastillaFiltrado() );
console.log("Andalucía filtrado: " + funCastillaFiltrado());


document.write(`<br> ${funCastilla()}`);
document.write(`<br> ${funValencia()}`);
document.write(`<br> ${funAndalucia()}`);








// document.write(`<td> ${arrayGlobal[i].Pasajeros}</td>`);
