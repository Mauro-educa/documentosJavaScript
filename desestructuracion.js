// const array=["jose","perez","garcia", "c mayor,1"];
// const [nombre, ,,calle]=array;
// console.log(nombre);

// console.log(calle);

// const array2=["jose", "perez" ,912345678,345678901];

// const [nombreJ,,...telefonos]=array2;
// console.log(nombreJ);

// console.log(telefonos);

// const array=["jose","perez","garcia", "c mayor,1"];
// const [nombre,apellido="rodriguez"]=array;
// console.log(nombre);
// console.log(apellido);

// let a =0;
// let b=0;
// let c=0;
// [a,b,c]=[1,2,3];
// console.log(a,b,c);

const persona = {
    nombre: "sarah",
    pais: "nigeria",
    trabajo: "desarrollador",
    lugar: { pais: "nigeria", ciudad: "lagos" }
}
//se recoge por el nombre 
const { nombre, pais, trabajo } = persona;

console.log(nombre);

const { nombre: firstName, pais: country = "españa" } = persona;
console.log(firstName);

const{ nombre: foo, lugar:{ pais:bar,ciudad:x}}=persona;
console.log(x);

function visualizarDatos({nombre,pais}){
    console.log(nombre,pais);
}
visualizarDatos(persona);