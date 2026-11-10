import {Vehiculo} from "./vehiculo.js";
export class Coche extends Vehiculo {
    #color;
    constructor(pasajeros, color) {
        super(pasajeros);
        this.#color = color;
    }
    set Color(value) {
        this.#color = value;
    }
    get Color() {
        return this.#color;
    }
}