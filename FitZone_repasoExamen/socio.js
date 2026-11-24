import { Persona } from "./persona.js";

export class Socio extends Persona {
    #actividades = [];

    constructor(nombre, apellidos, dni, telefono, actividades) {
        super(nombre, apellidos, dni, telefono);
        this.#actividades = actividades;
    }

    reservarClase(numeroClase) {
        return "El socio " + this.Nombre + " reserva la clase nº " + numeroClase;
    }

    set Actividades(valor) {
        this.#actividades.push(valor);
    }

    get Actividades() {
        return this.#actividades;
    }
}
