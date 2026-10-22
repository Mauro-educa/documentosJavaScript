// Escribir la siguientes funciones flecha que admitan el array a=[1,2,3,4] como parámetro.

// Una función f1 que devuelva un array con los números que sean el resultado de multiplicar
//  cada elemento por 3, filtrando los resultantes no divisibles por 4.

// Una función f2 visualice en consola los elementos que no sean divisibles por 2.

// Una función f3 que devuelva la suma de todos los elementos que estén en una posición par.
let arrayA = [1, 2, 3, 4];

let arrayB = [];
let f1 = (a, b) => {
    for (let val of a) {
        let num = val * 3;
        if (num % 4 == 0) {
            b.push(num);
        }
    }
    return b;
};
console.log("---------------f1------------");
console.log(f1(arrayA, arrayB));

let f2 = a => {
    for (let val of a) {
        if (val % 2 != 0) {
            console.log(val);
        }
    }
};
console.log("---------------f2------------");
f2(arrayA);

console.log("---------------f3------------");
let f3 = a => {
  return a.filter((a,i)=>i%2==0).reduce((acc,n)=>acc+n);
};
console.log(f3(arrayA));

arrayA.filter


// let f1 =a => a.filter(valor =>valor%4==0).map(valor=>valor *=3);
// console.log(f1(arrayA));