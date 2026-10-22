

// let b = [10, 22, 31,24];


// console.log("reduce() ");
//  console.log("reduce() ",b.reduce((acc, e,i) => (acc+e))/b.length);

// console.log("reduceRigth() ", b.reduceRight((acc, e) => e - acc));

// console.log("find() ", b.find(e => e == 20));

// const c=[10,20,30];
// console.log(c.reduce(previusValue=>previusValue));


// let frase= "hola me llamo Mauro y soy de geria";
// let arrFrase= frase.split(" ");
// console.log("find() ", arrFrase.find(e => e.length >= 5));

// let bMap=b.map((e)=> e+10);
// console.log(b);
// console.log(typeof(bMap));
// console.log(b);
// console.log(bMap);

// // bMap.forEach(e=>{

// // })

const c = ["a", "b", "c"];
// console.log(c.reduce((ac, valor) => {
//     console.log("valor ", valor);//10 25 38 
//     console.log("ac ", ac);//10 10 10
//     return valor;
// }, 0
// ));//38

// console.log(c.reduce((ac, n,) => ac + n));
// console.log(c.reduce((ac, n, i) => ac + n + i));
// console.log(c.reduce((ac, n, i, a) => ac + n + i + a[2]));
// console.log(c.reduce((ac, n) => ac + n, 100));

console.log(c.reduce((ac, n, i) => {
    console.log(ac); //10 20
    console.log(n);  // 20 30
    console.log(i); //1 2
    return ac + n + i;
}));

const x = [10, 20, 30];

// console.log(c.reduce(ac => ac));
function funcionParaHacerFelizALaura(ac, n, i) {
    return ac + n + i;
}

console.log(x.reduce(funcionParaHacerFelizALaura));

