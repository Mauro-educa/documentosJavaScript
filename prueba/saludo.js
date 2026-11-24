export class Saludo {
    constructor(nombre) {
        this.nombre = nombre;
    }

    decirHola() {
        return "Hola, " + this.nombre;
    }
}