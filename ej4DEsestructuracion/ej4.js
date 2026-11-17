const persona = {
    nombre: "Pepe",
    apellidos: ["garcia", "perez"],
    edad: 23
};

const arr = ["lunes", "martes", "miercoles", "jueves", "viernes"];

const { nombre: ej1, edad: ej2 } = persona;
console.log(ej1, ej2);

const [lu, , mi] = arr;
console.log(ej1, ej2);

const { apellidos:[apellido1, apellido2] } = persona;
// const [apellido1, apellido2] = ejApellidos;
console.log(apellido1, apellido2);

const persona2 = {
    nombre: "Mauro",
    apellidos: ["garcia", "gonzalez"],
    edad: 25
};

const casa = {
    altura: 10,
    material: ["ladrillo", "cemento"],
    metrosCuadrados: 20
};

function verDatos(obj) {
    const { nombre= "luis", edad= 20 } = obj;
    return nombre +" "+ edad;
}
console.log("persona2: "+verDatos(persona2));
console.log("persona: "+verDatos(persona));
console.log("casa: "+verDatos(casa));