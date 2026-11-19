import { Ciudad } from "./ciudad.js";

export class CentralMedidas {

    #medidas;
    constructor() {
        this.#medidas = new Map();
    }
    insertaMedidas(cadena, valores) {
        this.#medidas.set(cadena, valores);
    }
    devolverTabla() {
        let htmlTabla = "";
        
        htmlTabla += "<tr><th>Ciudad / Día</th>";
        for (let i = 0; i <= 30; i++) {
            htmlTabla += "<th>Día " + i + "</th>";
        }
        htmlTabla += "</tr>";

        // Añadir las filas de cada ciudad
        this.#medidas.forEach(ciudad => {
            htmlTabla += ciudad.toHtml();
        });
        return htmlTabla;
    }
}