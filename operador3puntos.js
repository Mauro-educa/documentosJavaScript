
//operador spread con objetos
let persona={nombre: "pepe",edad: 27};
let cliente={ventas: 120,...persona};
console.log(cliente);
persona.nombre="laura";
console.log(persona);
console.log(cliente);
let cliente2={...persona};
persona.nombre="alberto";
console.log(persona);
console.log(cliente2);
// let copiaCliente={...cliente};
// console.log(copiaCliente);
