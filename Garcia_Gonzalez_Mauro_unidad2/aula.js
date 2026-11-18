import { Equipo } from "./equipo.js";

export class Aula {
    #numero;
    #equipos ;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;

        this.#puestos = filas * columnas;
        this.#equipos = [[], []];
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

    activaEquipo(equipo, fila, columna) {
        if (this.#equipos.length > fila) {
            this.#equipos[fila][columna] = equipo;
            return true;
        } else {
            return false;
        }
    }
    getPosicion(IdEquipo) {
        let arrFilCol = null;
        this.#equipos.forEach((e, fila) =>
            this.#equipos[fila].forEach(eq, columna =>
                eq.Id == IdEquipo ? arrFilCol = [fila, columna] : null));

        return arrFilCol;
    }

    // getPorcentajeOcupacion() {
    //     let nEquipos = 0;
    //     let nPosiciones = 0;
    //     this.#equipos.forEach((e, fila) =>
    //         this.#equipos[fila].forEach((eq, columna) => {
    //             if (eq != null) {
    //                 nEquipos++
    //             }
    //             nPosiciones++;
    //         }));
    //     return Math.floor(nEquipos * 100 / nPosiciones);
    // }

    getPorcentajeOcupacion() {
        let nEquipos = 0;
        this.#equipos.forEach((fila) =>
            fila.forEach((eq) => {
                if (eq != null) {
                    nEquipos++;
                }
            }));
        return Math.floor(nEquipos * 100 / this.#puestos);
    }
}