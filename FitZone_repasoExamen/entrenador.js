import { Persona } from "./persona.js";

export class Entrenador extends Persona {
    #actividades = [];

    constructor(nombre, apellidos, dni, telefono, actividades) {
        super(nombre, apellidos, dni, telefono);
        this.#actividades = actividades;
    }

    valorarSesion(numeroClase, nota) {
        return "El entrenador " + this.Nombre + " valora la clase nº " + numeroClase + " con una nota de " + nota;
    }

    get Actividades() {
        return this.#actividades;
    }
}