console.log("/^hello/.test('hola mundo')");
console.log(/^hello/.test('hola mundo'));

console.log("/^world$/.test('hola mundo');");
console.log(/^world$/.test('hola mundo'));

console.log("/^hola/.test('hola mundo');");
console.log(/^hola/.test('hola mundo'));

console.log("/mundo$/.test('hola mundo')");
console.log(/mundo$/.test('hola mundo'));

console.log("/^h.*o$/.test('hola mundo')");
console.log(/^h.*o$/.test('hola mundo'));

console.log("/^h.o$/.test('h o'));");
console.log(/^h.o$/.test('h o'));

console.log("/^h/.test('hola mundo')");
console.log(/^h/.test('hola mundo'));

console.log("/^[0-9]/.test('hola mundo')");
console.log(/^[0-9]/.test('hola mundo'));

console.log("/^[u-v]/.test('hola mundo')");
console.log(/[u-v]/.test('hola mundo'));

console.log("/[^0-9]/.test('3')");
console.log(/[^0-9]/.test('3'));

//si hay un valorno numerico da true a pesar que haya un numero
console.log("/[^0-9]/.test('a3')");
console.log(/[^0-9]/.test('a3'));

console.log("/[^0-9]$/.test('a3')");
console.log(/[^0-9]$/.test('a3'));

//necesita que haya solo vaores numericos
console.log("/^[0-9]$/.test('a3')");
console.log(/^[0-9]$/.test('a3'));

console.log("/^[a-d]/.test('hola')");
console.log(/^[a-d]/.test('hola'));

console.log("/^[a-l]/.test('hola')");
console.log(/^[a-l]/.test('hola'));

console.log(/^[0-12-3]/.test('hola3'));
