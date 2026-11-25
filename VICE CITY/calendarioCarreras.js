import { Carrera } from "./carrera.js";
export class CalendarioCarreras {

    #carreras;

    constructor() {
        this.#carreras = [];
    }
    anadirCarrera(carrera) {
        this.#carreras.forEach(ca => {
            if (ca.Fecha == carrera.Fecha) {
                console.log("Ya existe una carrera en ese dia")
                return false;
            }
        })
        this.#carreras.push(carrera);
        console.log("carrera " + carrera.Nombre + " añadida")
        return true;
    }
    consultarListadoCarreras() {

        let arrCarreras = [[], []];
        let carrera = []
        this.#carreras.forEach((ca, i) => {
            carrera = [];
            carrera.push(i);
            carrera.push(ca.Nombre);
            carrera.push(ca.Barrio);
            carrera.push(ca.FechaIndicada);
            carrera.push(ca.FechaAsignada);
            ca.listarEquipos();
            arrCarreras.push(carrera);
        })
        console.log("orden de registro  carrera barrio fecha indicada fecha asignada")
        console.table(arrCarreras);
    }

    consultarListadoCarrerasBarrio() {
        let arrCarreras = [[], []];

        let carrera = []
        this.#carreras.forEach(ca => {
            carrera = [];
            carrera.push(ca.Barrio); carrera.push(ca.FechaAsignada); carrera.push(ca.Nombre)
            arrCarreras.push(carrera);
        })
        console.log(" barrio fecha nombre  ");
        console.table(arrCarreras);
    }

}


