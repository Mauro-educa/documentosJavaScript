export class Persona {
    #nombre;
    #apellidos;
    #dni;
    #telefono;
    constructor(nombre, apellidos, dni, telefono) {
        this.#apellidos = apellidos;
        this.#nombre = nombre;
        this.#dni = dni;
        this.#telefono = telefono;
        console.log("se ha creado una persona con los datos " + this.#nombre + " "
            + this.#apellidos + " " + this.#dni + " " + this.#telefono + " ")
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
    set Telefono(valor) {
        this.#telefono = valor;
    }
    //
    get Nombre() {
        return this.#nombre;
    }
    get Apellidos() {
        return this.#apellidos;
    }
    get Dni() {
        return this.#dni;
    }
    get Telefono() {
        return this.#telefono;
    }
}