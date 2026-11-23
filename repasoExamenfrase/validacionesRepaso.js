// Realiza una expresión regular que permita validar un teléfono con formato 000-000-000
// Explica paso a paso que hace la siguiente expresión regular /[^<]+|<(\/?)([A-Zaz]+)>/g
// Busca en la cadena todas las apariciones  que sean
//   uno o más caracteres  que no sean "<", o bien
//   empieza por "<" seguida de una "/" opcional,
//       luego una o más letras[A-Zaz]  y termina en ">"
let numtelefono="123-123-123";
let validTelefono=/^[0-9]{3}\-[0-9]{3}\-[0-9]{3}$/.test(numTelefono) ;

