export class Persona {
    #nombre;
    #apellidos;
    #dni;
    constructor(nombre, apellidos, dni) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#dni = dni;
    }
    set Nombre(valor) {
        this.#nombre = valor;
    }
    set Apellidos(valor) {
        this.#apellidos = valor;
    }
    set Dni(valor) {
        this.#dni = valor;
    }

    get Nombre() {
        return this.#nombre;
    }

    get Apellidos() {
        return this.#apellidos;
    }
    get Dni() {
        return this.#dni;
    }


}