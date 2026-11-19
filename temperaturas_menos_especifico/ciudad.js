export class Ciudad {

    #nombre;
    #temperaturas;
    constructor(nombre) {
        this.#nombre = nombre;
        this.#temperaturas = [];
    }
    generaTemperaturas() {
        for (let i = 0; i <= 30; i++) {
            this.#temperaturas[i] = Math.floor((Math.random() * 60) + -20);
        }
    }
    modificarTemperatura(dia, temperatura) {
        this.#temperaturas[dia] = temperatura;
    }
    toHtml() {
        let cadena = "<tr>";
        cadena += "<td><strong>" + this.#nombre + "</strong></td>";
        this.#temperaturas.forEach(temp => {
            cadena += "<td>" + temp + "</td>";
        });
        cadena += "</tr>";
        return cadena;
    }

}