import { Persona } from "./persona.js";

export class Profesor extends Persona {
    #nombre;
    #apellidos;
    #dni;
    #asignaturas;
    constructor(nombre, apellidos, dni) {
        this.#asignaturas = [];
        super(nombre);
        super(apellidos);
        super(dni);
    }

    recogeEjercicio(ejercicio,alumno) {
        console.log(" se ha entregado " + ejercicio + " con la nota " + Math.floor((Math.random()*10)+1)+ " del alumno " +alumno);
        return " se ha entregado " + ejercicio + " con la nota " + Math.floor((Math.random()*10)+1)+ " del alumno " +alumno;
    }
}