
export class Vehiculo {
    #pasajeros;
    constructor(pasajeros) {
        this.#pasajeros = pasajeros;
    }
    set Pasajeros(value) {
        this.#pasajeros = value;
    }
    get Pasajeros() {
        return this.#pasajeros;
    }
}