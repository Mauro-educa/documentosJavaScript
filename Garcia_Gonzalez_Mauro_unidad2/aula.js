import { Equipo } from "./equipo.js";

export class Aula {
    #numero;
    #equipos;
    #puestos;
    // #filas;
    // #columnas
    constructor(numero, filas, columnas) {
        this.#numero = numero;
        // this.#equipos=Equipo;
        this.#puestos = filas * columnas;

    }
    set Numero(value) {
        this.#numero = value;
    }
    set Equipos(value) {
        this.#equipos = value;
    }
    set Puestos(value) {
        this.#puestos = value;
    }
    get Numero() {
        return this.#numero;
    }
    get Equipos() {
        return this.#equipos;
    }
    get Puestos() {
        return this.#puestos;
    }

    activarEquipo(equipo, fila, columna) {
        if (this.#equipos.length >= fila) {
            this.#equipos[fila][columna].push(equipo);
            return true;
        } else {
            return true;
        }
    }
    getPosicion(IdEquipo) {
        let arrFilCol = [0, 0];
        this.#equipos.foreach(e, fila =>
            this.#equipos[fila].forEach(eq, columna =>
                eq.Id == IdEquipo ? arrFilCol = [fila, columna] : arrFilCol = [null]));
    }

    getPorcentajeOcupacion() {
        let nEquipos = 0;
        this.#equipos.foreach(e, fila =>
            this.#equipos[fila].forEach(eq, columna =>
                eq != NULL ? nEquipos++ : nEquipos));
        return Math.floor(nEquipos * 100 / this.#puestos);

    }
}