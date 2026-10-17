

let b = [10, 22, 31,24];


console.log("reduce() ");
 console.log("reduce() ",b.reduce((acc, e,i) => (acc+e))/b.length);

console.log("reduceRigth() ", b.reduceRight((acc, e) => e - acc));

console.log("find() ", b.find(e => e == 20));

const c=[10,20,30];
console.log(c.reduce(previusValue=>previusValue));


let frase= "hola me llamo Mauro y soy de geria";
let arrFrase= frase.split(" ");
console.log("find() ", arrFrase.find(e => e.length >= 5));