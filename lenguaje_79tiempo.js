
let fecha1 = new Date(2006, 2, 12);
let fecha2 = new Date( 2026,10,10);

let milisegundosDiferencia = fecha2.getTime() - fecha1.getTime();
let milisegundoDia = 86400000;
let milisegundoMes = 2628288000;
let milisegundoAnio =31556952000;
let milisegundos = milisegundosDiferencia;

let anios = Math.floor(milisegundos / milisegundoAnio);
milisegundos = milisegundos - anios * milisegundoAnio;

let meses = Math.floor(milisegundos / milisegundoMes);
milisegundos = milisegundos - meses * milisegundoMes;

let dias = Math.floor(milisegundos / milisegundoDia);
milisegundos = milisegundos - dias * milisegundoDia;


console.log("años: " +anios+" meses: "+meses+ " dias: "+dias);
