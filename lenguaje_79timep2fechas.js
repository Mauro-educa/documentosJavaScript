

let fecha1= new Date("2026-10-8");

let fecha2= new Date("2006-02-12");

let diferencia= new Date(Date.parse(fecha1)-Date.parse(fecha2));

let diferenciaMilisegundos = fecha1 - fecha2;
let aniosTranscurridos = diferenciaMilisegundos / (31536000000);


let mesesTranscurridos=diferenciaMilisegundos -aniosTranscurridos

console.log(aniosTranscurridos);
