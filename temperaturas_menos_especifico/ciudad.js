export class Ciudad {

    #nombre;
    #temperaturas;
    constructor(nombre) {
        this.#nombre = nombre;
        this.#temperaturas = [];
    }
    recogerTemperaturas() {
        for (let i = 0; i <= 30; i++) {
            this.#temperaturas[i] = Math.floor((Math.random() * 60) + -20);
        }
    }
    modificarTemperatura(dia, temperatura) {
        this.#temperaturas[dia] = temperatura;
    }
    toHtml() {
        let cadena = "";
        cadena += "<td>" + this.#nombre + "<tr>"
        this.#temperaturas.forEach(temp => cadena += "<td>" + temp + "<tr>")
        return cadena;
    }

}