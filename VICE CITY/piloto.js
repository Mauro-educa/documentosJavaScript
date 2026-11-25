export class Piloto {
    #nombre;
    #apellidos;
    #especialidad;
    constructor(nombre, apellidos, especialidad) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#especialidad = especialidad;
    }
    set Nombre(valor) {
        this.#nombre = valor;
    }
    set Apellidos(valor) {
        this.#apellidos = valor;
    }
    set Especialidad(valor) {
        this.#especialidad = valor;
    }

    get Nombre() {
        return this.#nombre;
    }
    get Apellidos() {
        return this.#apellidos;
    }
    get Especialidad() {
        return this.#especialidad;
    }
}