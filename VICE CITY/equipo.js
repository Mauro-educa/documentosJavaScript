export class Equipo {
    #piloto1;
    #piloto2;
    #lema;
    #infracciones;
    #premios;
    // #premioNeto;
    #estrellas;
    constructor(piloto1, piloto2, lema) {
        this.#piloto1 = piloto1;
        this.#piloto2 = piloto2;
        this.#lema = lema;
        this.#infracciones = [];
        this.#premios = [];
        this.#estrellas = 0;
    }
    set Premios(premio) {
        this.#premios.push(premio);
    }
    get Piloto1() {
        return this.#piloto1;
    }
    get Piloto2() {
        return this.#piloto2;
    }
    get Estrellas() {
        return this.#estrellas;
    }
    calcularNombreClave() {
        let nombre1 = this.#piloto1.Nombre.split(" ")
            .map((n) => n[0].toUpperCase()).join("");
        let apellidos1 = this.#piloto1.Apellidos.split(" ")
            .map((n) => n[0].toUpperCase()).join("");

        let nombre2 = this.#piloto2.Nombre.split(" ")
            .map((n) => n[0].toUpperCase()).join("");
        let apellidos2 = this.#piloto2.Apellidos.split(" ")
            .map((n) => n[0].toUpperCase()).join("");
        return nombre1 + apellidos1 + "&" + nombre2 + apellidos2;
    }

    calcularMatricula() {
        let inicialesLema = "";
        this.#lema.split(" ")
            .map((n) => n.length % 2 == 0 ? inicialesLema += n[0].toUpperCase() : inicialesLema);
        return inicialesLema += "-" + this.#lema.split(" ").length;


    }

    nivelBusqueda(infraccion) {
        infraccion.trim();
        switch (infraccion) {
            case "exceso de velocidad":
                this.#estrellas++;
                break;
            case "saltarse un semáforo":
                this.#estrellas++;
                break;
            case "conducción temeraria":
                this.#estrellas += 2;
                break;
            case "huir de la policía":
                this.#estrellas += 3;
                break;
        }

        return this.#estrellas;
    }

    premioNeto() {
        let dineroFinal = 0;
        if (this.#premios != null) {
            this.#premios.forEach(prem => prem > 5000 ? dineroFinal += prem - prem * 0.2 : dineroFinal += prem);
        }
        return dineroFinal;
    }
}


