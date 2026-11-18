export class DptoInformatica {
    #aulas;

    constructor() {
        // clave: número de aula  valor: { aula, grupo }
        this.#aulas = new Map();
    }
    set Aulas(value) {
        this.#aulas = value;
    }

    get Aulas() {
        return this.#aulas;
    }

    addAula(aula, grupo) {
        if (this.#aulas.has(aula.Numero)) {
            return false;
        }
        this.#aulas.set(aula.Numero, { aula: aula, grupo: grupo });
        return true;
    }

    getUbicacion(idEquipo) {
        let cadenaSalida = "No encontrado";
        this.#aulas.forEach((valor) => {
            const pos = valor.aula.getPosicion(idEquipo);
            if (pos !== null) {
                cadenaSalida = "numero: " + valor.aula.Numero + " fila: " + pos[0] + " columna: " + pos[1];
            }
        });
        return cadenaSalida;
    }

    getNEquipos() {
        let nEquipos = 0;
        this.#aulas.forEach((valor) => {
            valor.aula.Equipos.forEach((fila) =>
                fila.forEach((eq) => {
                    if (eq !== null) nEquipos++;
                }));
        });
        return nEquipos;
    }
}



// import { Aula } from "./aula.js";
// export class DptoInformatica {
//     #aulas;

//     constructor() {
//         this.#aulas = new Map();
//     }
//     set Aulas(value) {
//         this.#aulas = value;
//     }

//     get Aulas() {
//         return this.#aulas;
//     }


//     addAula(aula, grupo) {
//         let existe = false;

//         this.#aulas.forEach((aul) => {
//             if (aul === aula) {
//                 existe = true;
//             }
//         });

//         if (!existe) {
//             this.#aulas.set(aula,grupo );
//             return true;
//         }

//         return false;
//     }

//     getUbicacion(idEquipo) {

//         let cadenaSalida = "No encontrado";
//         this.#aulas.forEach((i,aul) => {
//             if (aul.getPosicion(idEquipo) != null) {
//                 cadenaSalida = "numero: " + aul.Numero + " fila: " + aul.getPosicion(IdEquipo)[0] + " columna: " + aul.getPosicion(IdEquipo)[1];
//             }
//         });
//         return cadenaSalida;
//     }
//     getNEquipos() {
//         let nEquipos = 0;
//         this.#aulas.forEach((i,aul) => {
//             if (aul.Equipos != null) {
//                 nEquipos += aul.Equipos.length;
//             }
//         });
//         return nEquipos;
//     }

// }