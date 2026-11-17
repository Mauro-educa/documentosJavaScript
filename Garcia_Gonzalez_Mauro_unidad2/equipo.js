
export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;
    constructor(descripcion, personal, dias = 0) {
        let fechaInicial = new Date("2027-06-30");
        let fechaFinal = new Date(fechaInicial.getTime() + (dias * 24 * 3600000));
        this.#fecha = fechaFinal.getDate() + "-" + fechaFinal.getMonth()+1 + "-" + fechaFinal.getFullYear();
        this.#descripcion = descripcion;
        this.#personal = personal;


        let letra = "";
        this.#personal == true ? letra = "P" : letra = "S";
        this.#id = letra + "-" + descripcion.slice(-3) + "-" + this.#fecha;
    }
    set Id(value) {
        this.#id = value;
    }
    set Fecha(value) {
        this.#fecha = value;
    }
    set Descripcion(value) {
        this.#descripcion = value;
    }
    set Personal(value) {
        this.#personal = value;
    }
    get Id() {
        return this.#id;
    }
    get Fecha() {
        return this.#fecha;
    }
    get Descripcion() {
        return this.#descripcion;
    }
    get Personal() {
        return this.#personal;
    }


    toString() {
        return this.#id;
    }
}