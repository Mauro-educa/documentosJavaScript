// //constructor recibe un conjunto de pares-valor.
// let mapa1 = new Map([["platano", 4], ["sandia", 5]]);
// //set añade una pareja clave-valor
// mapa1.set("manzana", 1);
// mapa1.set("naranja", 2);
// mapa1.set("pera", 3);
// //get obtiene el valor asociado a una clave
// console.log(mapa1.get("manzana"));
// //delete borra una pareja clave-valor mediante la clae
// mapa1.delete("manzana");
// console.log(mapa1.get("manzana"));
// mapa1.has("naranja");
// console.log(mapa1.values());
// console.log(mapa1.keys());
// console.log(mapa1.entries());
// console.log(mapa1.size);
// mapa1.clear();
// console.log(mapa1.keys());


// let mapa2 = new Map([["platano", 4], ["sandia", 5]]);

// for (var [clave, valor] of mapa2) {
//     console.log(clave + " " + valor)
// }
// //no devuelve nada
// for (const clave in mapa2.values()) {

//     console.log("clave: " + clave + " ");
// }

// // for (let par of mapa2) {
// //     var [key, value] = par;
// //     console.log(key + " = " + value);
// // }

// console.log("tamaño " + mapa2.size);
// // mapa2.add("elemento1");
// mapa2.delete(["platano", 4]);
// console.log("has " + mapa2.has(["sandia", 5]));
// console.log("values " + mapa2.values());

// for (let valor of mapa2.values()) {
//     console.log(valor);
// }
// mapa2.clear();

// console.log("entries " + mapa2.entries());

// let array = [100, 23, 23, 23, 67, 45];
// let outputArray = [];

// for (let i = 0; i < array.length; i++) {
//     if( !outputArray.includes(array[i])){
//         outputArray.push(array[i]);
//     }
// }
// for (let i = 0; i < outputArray.length; i++) {
//     console.log(outputArray[i]);
// }

// let array2 = [100, 23, 23, 23, 67, 45];
// let outputArray2 = Array.from(new Set(array2));

////función anónima asignada a una variable



// hola(adios,"laura");


// function hola(foo,parametro){
//     console.log("adiós");
//     foo();
//     console.log(parametro);
// }

// function hola(foo,parametro){

//     console.log("nuevo hola");
// }

// function adios(){
//     console.log("adiós");
// }

// var noNombrada=function (){
//      console.log("hola ");
// }

// noNombrada();

// function f1(nombre, edad) {
//     console.log(`${nombre} - ${edad}`);
// }
// f1();
// f1("Pepe");
// f1("pepe", 30, " otro dato");

// function f2(nombre, edad) {
//     console.log(`${arguments[0]} - ${arguments[1]}`);
// }
// f2();
// f2("Pepe");
// f2("pepe", 30, " otro dato");

// function f3(nombre = "paco", edad = 28) {
//     console.log(`${nombre} - ${edad}`);
// }
// f3("Pepe");
// f3();

// function suma(a, b, c, d, f) {
//     let sumaTotal = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sumaTotal += arguments[i];
//     }
//     console.log(sumaTotal);
// }
// suma(1,1,1,1,1,1,1);

function suma2(...args){
    let result=0;
    for(const a of args){
        result+=a;
    }
    return result;
}

console.log(suma2());
console.log(suma2(10));
console.log(suma2(10,20));
console.log(suma2(10,20,30));


function anadiApellido(nombre,...apellidos){
    let result=nombre;
    for(const i in apellidos){
        result+=" "+apellidos[i];
    }
    console.log(arguments.length)
    return result;
}
console.log(anadiApellido("pedro"));
console.log(anadiApellido("pedro","garcia"));
console.log(anadiApellido("pedro","garcia","gonzalez"));

let values =[1,2,3];
console.log(values);
let copy=[...values];
console.log(copy);
let morevalues=[4,5];
values.push(...morevalues);
console.log(values);
let other = [0,...morevalues];
console.log(other);

let array=[1,2,3];
let copyArray=array;

console.log("-------------------+");
array[0]=7;
console.log(array);
console.log(copyArray);

