import { Persona } from "./persona.js";

export class Estudiante extends Persona {
    #asignaturas;

    constructor( nombre, apellidos, dni) {
        this.#asignaturas = [];
        super(nombre,apellidos,dni);

        console.log(" he sido creado y mis atributos son: " + nombre + " " + apellidos + " " + dni);
    }
    set Asignaturas(valor) {
        this.#asignaturas = valor;
    }
    get Asignaturas() {
        return this.#asignaturas;
    }
    entregaEjercicio(ejercicio,profesor) {
        profesor.recogeEjercicio(ejercicio,this.Nombre);
        console.log(" se ha entregado " + ejercicio + "al profesor " +profesor.Nombre);
        return " se ha entregado " + ejercicio + "al profesor " +profesor.Nombre;
    }


}