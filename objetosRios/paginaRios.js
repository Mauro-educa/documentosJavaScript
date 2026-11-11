import {Rio} from "./rio.js";

let rioA=new Rio("Duero","cuenca Atlántica");
let rioB=new Rio("Ebro","cuenca Mediterránea");

rioB.modificarCaudalmedio(50);
console.log(rioB.imprimeCaudal());
rioB.agregarPoblacion("Miranda de Ebro","Tortosa","Valladolid");


console.log(rioB.imprimePoblaciones());
rioB.eliminarPoblacion("Valladolid");
console.log(rioB.imprimePoblaciones());