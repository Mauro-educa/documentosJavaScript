export class Edificio {

    #calle;
    #numero;
    #codigoPostal;
    #plantas;
    constructor(calle = "calle defecto", numero = 0, codigoPostal = 12345) {
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = [[], []];
        console.log("construido edificio en la calle: " + calle + " número " + numero + " código postal " + codigoPostal)
    }

    get Calle() {
        return this.#calle;
    }

    get Numero() {
        return this.#numero;
    }
    agregaPlantasYPuertas(nPlantas, nPuertas) {
        let plantasAnteriores = 0;
        if (this.#plantas.length == undefined || this.#plantas.length == null) {
            this.#plantas.length = plantasAnteriores;
        }
        for (let i = plantasAnteriores; plantasAnteriores + nPlantas > i; i++) {
            for (let j = 0; nPuertas > j; j++) {
                this.#plantas[i][j] = " ";
            }
        }
    }
    agregaPropietario(nombre, planta, puerta) {
        if (this.#plantas[planta][puerta] != null || this.#plantas[planta][puerta] != undefined) {
            this.#plantas[planta][puerta] = nombre;
        }
    }

    imprimePlantas() {
        this.#plantas.forEach((planta, i) =>
            planta.forEach((persona, j) => {
                if (persona == " ") {
                    console.log("no vive nadie en la puerta " + j + " en el piso " + i);
                } else {
                    console.log(persona.Nombre + " es el propietario de la puerta " + j + " en el piso " + i);
                }
            }
            )
        )
        console.log();
    }

}