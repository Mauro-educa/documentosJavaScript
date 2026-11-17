
export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;
    constructor(descripcion, personal, dias) {

        this.#fecha = new Date("2027-06-30");
        this.#descripcion = descripcion;
        this.#personal = personal;
        

        let letra = "";
        this.#personal = true ? letra = "P" : letra = "S";
        this.#id = letra + "-" + descripcion.slice(-3) + "-" + this.#fecha.getDate() + "-" + this.#fecha.getMonth() + "-" + this.#fecha.getFullYear();
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


    toString(){
        return this.#id;
    }
}