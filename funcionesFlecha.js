let saludo1 = function () {
    return "hola";
}

let esVocal = vocal => {
    if (/[aeiouAEIOU]/.test(vocal)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(esVocal("e"));
console.log(esVocal("b"));

let a = ["a", "b", "c"];

a.forEach(function (e) {
    console.log(e)
});

a.forEach((e, i, arr) => console.log(e, i, arr));

let b = [10, 20, 30];
console.log(b.map(e => e + 1));

console.log(b.map(e => e + b[1]));

console.log(b.map((e, i) => e + 1 + b[1] + i));

console.log("reduce() ", b.reduce((acc, e) => e + acc));
console.log("reduceRigth() ", b.reduceRight((acc, e) => e - acc));
console.log("filter() ", b.filter(e => e > 15));
console.log("every() ", b.every(e => e > 9));
console.log("some() ", b.some(e => e > 21));
console.log("find() ", b.find(e => e == 20));
console.log("findIndex() ", b.findIndex(e => e == 20));

const c=[10,20,30];
console.log(c.reduce(previusValue=>previusValue));