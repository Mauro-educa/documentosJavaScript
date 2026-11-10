
import {Vehiculo} from "./vehiculo.js";

export class Camion extends Vehiculo {
    #tara;
    constructor(pasajeros, tara) {
        super(pasajeros);
        this.#tara = tara;
    }
    set Tara(value) {
        this.#tara = value;
    }
    get Tara() {
        return this.#tara;
    }
}