import { Aula } from "./aula.js";

export class DptoInformatica {
    #aulas;

    constructor() {
        this.#aulas = new Map();
    }
    set Aulas(value) {
        this.#aulas = value;
    }

    get Aulas() {
        return this.#aulas;
    }


    addAula(aula, grupo) {

        this.#aulas.set("manzana", 1);
        return true;
    }

}