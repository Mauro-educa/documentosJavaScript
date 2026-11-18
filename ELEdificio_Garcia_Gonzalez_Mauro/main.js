
// import { Edificio } from "./edificio.js";
// import { Propietario } from "./propietario.js";
// var edificio1= new Edificio("calle melancolía");
// var prop1= new Propietario();
// prop1.Nombre("paco");
// prop1.Genero("m");
// prop1.Miembros(4);
// edificio1.agregaPlantasYPuertas(2,3);
// console.warn("nuevos propietarios");





// edificio1.agregaPropietario("edu",0,0);
// edificio1.agregaPropietario("antonio",0,1);
// edificio1.agregaPropietario("erik",0,2);
// edificio1.agregaPropietario("mayte",1,0);
// edificio1.agregaPropietario("monica",1,1);
// edificio1.agregaPropietario("santiago",1,2);

// edificio1.imprimePlantas();

import { Edificio } from "./edificio.js";
import { Propietario } from "./propietario.js";
import { Inmobiliaria } from "./inmobiliaria.js";

var edificio1 = new Edificio("calle melancolía", 1, 10000);
var prop1 = new Propietario();
var inmo1 = new Inmobiliaria();
prop1.Nombre = "paco";
prop1.Genero = "m";
prop1.Miembros = 4;
edificio1.agregaPlantasYPuertas(2, 3);
console.warn("nuevos propietarios");

edificio1.agregaPropietario(prop1, 0, 0);

edificio1.imprimePlantas();

inmo1.addEdificio(edificio1);
inmo1.getEdificio("calle melancolía", 1).imprimePlantas();
