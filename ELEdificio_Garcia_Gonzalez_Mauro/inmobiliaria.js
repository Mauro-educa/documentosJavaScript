export class Inmobiliaria {

    #edificios;

    constructor() {

        this.#edificios = [];
    }

    addEdificio(edificio) {
        this.#edificios.push(edificio);
    }

    getEdificio(calle, numero) {
        let ediEncontrado = null;
        if (this.#edificios.find(edi => edi.Calle == calle && edi.Numero == numero) != undefined) {
            ediEncontrado = this.#edificios.find(edi => edi.Calle == calle && edi.Numero == numero);

        }
        return ediEncontrado;

    }

}