export class Propietario {

    nombre;
    genero;
    miembros;

    constructor() {
        this.nombre = "";
        this.genero = "m";
        this.miembros = 0;
    }
    get Nombre() {
        return this.nombre;
    }
    get Genero() {
        return this.genero;
    }
    get Miembros() {
        return this.miembros;
    }
    set Nombre(valor) {
        this.nombre = valor;
    }
    set Genero(valor) {
        this.genero = valor;
    }
    set Miembros(valor) {
        this.miembros = valor;
    }

}