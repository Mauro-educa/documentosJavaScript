
"use strict";
import {Rio} from "./rio.js";
// document.open();
let rioA=new Rio("Duero","cuenca Atlántica");
let rioB=new Rio("Ebro","cuenca Mediterránea");

rioB.modificarCaudalmedio(50);
console.log(rioB.imprimeCaudal());
rioB.agregarPoblacion("Miranda de Ebro","Tortosa","Valladolid");


console.log(rioB.imprimePoblaciones());
rioB.eliminarPoblacion("Valladolid");
console.log(rioB.imprimePoblaciones());

document.getElementById("salida1").innerHTML=rioB.modificarCaudalmedio(50);
document.getElementById("salida2").innerHTML=rioB.imprimeCaudal();
document.getElementById("salida3").innerHTML=rioB.agregarPoblacion("Miranda de Ebro","Tortosa","Valladolid");
document.getElementById("salida4").innerHTML=rioB.imprimePoblaciones();
document.getElementById("salida5").innerHTML=rioB.eliminarPoblacion("Valladolid");
// document.getElementById("salida1").innerHTML="rioB.imprimePoblaciones()";
document.getElementById("salida6").innerHTML=rioB.imprimePoblaciones();

// document.close();