
console.log("/\d[a-h]/.test('hola mundo')");
//busca un dígito 0-9 seguido de una letra de la "a" a la "h"
console.log(/\d[a-h]/.test('hola mundo'));   // false 
console.log(/\d[a-h]/.test('3a'));         // true


//busca un carácter que no sea un dígito  al lado de una letra de la a-h
console.log(/\D[a-h]/.test('hola mundo'));   // true 
console.log(/\D[a-h]/.test('1a'));    // false 


//busca un carácter seguido de una letra de la a-h
console.log(/\w[a-h]/.test('1hola mundo'));   // true 
console.log(/\w[a-h]/.test('1234'));     // false 


//busca un carácter que no sea alfabético, seguido de una letra de a-h
console.log(/\W[a-h]/.test('hola mundo'));  // true 
console.log(/\W[a-h]/.test('hola-mundo'));   // false

//busca un espacio seguido de una letra de la a-h
console.log(/\s[a-h]/.test('hola mundo'));    // false 
console.log(/\s[a-h]/.test('hola a'));    // true


//Busca un carácter que no sea un espacio seguido de una letra de a-h
console.log(/\S[a-h]/.test('hola mundo'));   // true 
console.log(/\S[a-h]/.test('holamundo'));     // false


//busca un salto de línea seguido de una letra de la a-h
console.log(/\n[a-h]/.test('hola mundo'));     // false 
console.log(/\n[a-h]/.test(`hola
mundo`));  // true


//busca cualquier carácter excepto salto de línea  después de una letra de la a-h
console.log(/.[a-h]/.test('hola mundo'));      // true 
console.log(/.[a-h]/.test('123456'));    // false
