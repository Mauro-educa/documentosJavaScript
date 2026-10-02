// console.log("/^hello/.test('hola mundo')");
// console.log(/^hello/.test('hola mundo'));

// console.log("/^world$/.test('hola mundo');");
// console.log(/^world$/.test('hola mundo'));

// console.log("/^hola/.test('hola mundo');");
// console.log(/^hola/.test('hola mundo'));

// console.log("/mundo$/.test('hola mundo')");
// console.log(/mundo$/.test('hola mundo'));

// console.log("/^h.*o$/.test('hola mundo')");
// console.log(/^h.*o$/.test('hola mundo'));

// console.log("/^h.o$/.test('h o'));");
// console.log(/^h.o$/.test('h o'));

// console.log("/^h/.test('hola mundo')");
// console.log(/^h/.test('hola mundo'));

// console.log("/^[0-9]/.test('hola mundo')");
// console.log(/^[0-9]/.test('hola mundo'));

// console.log("/^[u-v]/.test('hola mundo')");
// console.log(/[u-v]/.test('hola mundo'));

// console.log("/[^0-9]/.test('3')");
// console.log(/[^0-9]/.test('3'));

// //si hay un valorno numerico da true a pesar que haya un numero
// console.log("/[^0-9]/.test('a3')");
// console.log(/[^0-9]/.test('a3'));

// console.log("/[^0-9]$/.test('a3')");
// console.log(/[^0-9]$/.test('a3'));

// //necesita que haya solo vaores numericos
// console.log("/^[0-9]$/.test('a3')");
// console.log(/^[0-9]$/.test('a3'));

// console.log("/^[a-d]/.test('hola')");
// console.log(/^[a-d]/.test('hola'));

// console.log("/^[a-l]/.test('hola')");
// console.log(/^[a-l]/.test('hola'));

// console.log(/^[0-12-3]/.test('hola3'));


// console.log("/\d[a-h]/.test('hola mundo')");
// //busca un dígito 0-9 seguido de una letra de la "a" a la "h"
// console.log(/\d[a-h]/.test('hola mundo'));   // false 
// console.log(/\d[a-h]/.test('3a'));         // true


// //busca un carácter que no sea un dígito  al lado de una letra de la a-h
// console.log(/\D[a-h]/.test('hola mundo'));   // true 
// console.log(/\D[a-h]/.test('1a'));    // false 


// //busca un carácter seguido de una letra de la a-h
// console.log(/\w[a-h]/.test('1hola mundo'));   // true 
// console.log(/\w[a-h]/.test('1234'));     // false 


// //busca un carácter que no sea alfabético, seguido de una letra de a-h
// console.log(/\W[a-h]/.test('hola mundo'));  // true 
// console.log(/\W[a-h]/.test('hola-mundo'));   // false

// //busca un espacio seguido de una letra de la a-h
// console.log(/\s[a-h]/.test('hola mundo'));    // false 
// console.log(/\s[a-h]/.test('hola a'));    // true


// //Busca un carácter que no sea un espacio seguido de una letra de a-h
// console.log(/\S[a-h]/.test('hola mundo'));   // true 
// console.log(/\S[a-h]/.test('holamundo'));     // false


// //busca un salto de línea seguido de una letra de la a-h
// console.log(/\n[a-h]/.test('hola mundo'));     // false 
// console.log(/\n[a-h]/.test(`hola
// mundo`));  // true


// //busca cualquier carácter excepto salto de línea  después de una letra de la a-h
// console.log(/.[a-h]/.test('hola mundo'));      // true 
// console.log(/.[a-h]/.test('123456'));    // false


console.log(/^a\d?/.test('abc')); //true

console.log(/^a\d?/.test('bbc')); //false

console.log(/^a\d?/.test('abc3')); //true

console.log(/^a\d*/.test('abc')); //true

console.log(/^a\d/.test('abc3')); //false

console.log(/^a\d/.test('a3bc')); //true

console.log(/^a\d{3}/.test('ab22c')); //false

console.log(/^a\d{3}/.test('a232c')); //true

console.log(/^a\d{3}/.test('a2-32c')); //false

console.log(/[a-c]{3,}\d?/.test('--abbb--')); //true

console.log(/^[a-c]{3,}\d?/.test('--abbb--')); //false

console.log(/[a-c]{3,7}$/.test('aaaaaaaxaaaaaaaaaaa')+("<=="));

console.log(/^a.*a$/.test('aba')+(""));//true


console.log(/^(Sba)?c7$/.test('Sbac7')+(""));

console.log(/^(abc){2}(.\d)/.test('--abcabcx4')+("<=="));

console.log(/^[a-c]{3,9}[a-c]{3,9}$|/.test('abclabc')+("<=="));

// comprobar que una expresion comienze por un conjunto de letras ^[a-c]{3,9}  [a-c]{3,9}$

// abc true
// abclabc true
// abcabclabcabc true
// abcabcabcabc true 