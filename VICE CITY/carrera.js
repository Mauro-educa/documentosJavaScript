export class Carrera {

    #nombre;
    #barrio;
    #fechaIndicada;
    #fechaAsignada;
    #mapa = [];
    #equipos;

    constructor(nombre, barrio, fechaIndicada = "") {
        this.#nombre = nombre;
        this.#barrio = barrio;
        this.#fechaIndicada = fechaIndicada;
        this.#fechaAsignada = fechaIndicada;
        for (let i = 0; i < 4; i++) {
            let arr = new Array();
            this.#mapa.push(arr);
            for (let j = 0; j < 5; j++) {
                this.#mapa[i][j] = null;
            }
        }
        this.#mapa[0][2] = "P";
        this.#mapa[2][4] = "P";
        this.#equipos = [];
    }
    inscribirEquipo(equipo) {
        console.log("inscribiendo equipo");
        if (this.#equipos.some(eq => eq == equipo)) {
            console.log("el equipo ya esta inscrito");
        } else if (this.#equipos.some(eq => eq.Piloto1 == equipo.Piloto1) || this.#equipos.some(eq => eq.Piloto2 == equipo.Piloto2)) {
            console.log("el piloto no puede participar en dos carreras a la vez");
        }
        else if (this.#equipos.some(eq => eq.Estrellas > 4)) {
            console.log("el quipo no puede participar con 5 estrellas");
        }
        else if (this.#equipos.some(eq => eq.Piloto1.Especialidad == eq.Piloto2.Especialidad)) {
            console.log("el quipo no puede tener 2 pilotos con la misma especialidad");
        }
        else {
            this.#equipos.push(equipo);
        }
    }

    garajeMapa(fila, columna, equipo) {
        console.log("añadiendo equipo al mapa");
        let colComisaria1 = 2;
        let filComisaria1 = 0;
        let colComisaria2 = 4;
        let filComisaria2 = 2;
        if (this.#mapa[fila][columna] != null) {
            console.log("el garaje esta ocupado ");

        }
        if (fila <= 3 && columna <= 3) {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 5; j++) {
                    if (i == filComisaria1 && j == colComisaria1 || i == filComisaria2 && j == colComisaria2) {
                        console.log("en una comisaria");
                    }
                    else if (this.#equipos.some(eq => eq == equipo) == false) {
                        console.log("el equipo no esta inscrito");

                    }
                    else if (this.#mapa[fila][columna] != null) {
                        console.log("");

                    }
                    else {
                        this.#mapa[fila][columna] = equipo.calcularNombreClave();
                    }
                }
            }
        }

        console.table(this.#mapa);

    }
    listarEquipos() {

        let arrEquipos = [[], []];
        let equipo = []
        this.#equipos.forEach((eq, i) => {
            equipo = [];
            equipo.push(i);
            equipo.push(eq.calcularNombreClave());
            equipo.push(eq.Piloto1.Nombre + " " + eq.Piloto1.Apellidos);
            equipo.push(eq.Piloto2.Nombre + " " + eq.Piloto2.Apellidos);
            equipo.push(eq.calcularMatricula());
            equipo.push(eq.Estrellas);
            equipo.push(eq.premioNeto());
            arrEquipos.push(equipo);
        })
        console.log("nombre en clave piloto 1 piloto 2 matricula estrellas premio neto")
        console.table(arrEquipos);
    }

    set Nombre(valor) {
        this.#nombre = valor;
    }
    set Barrio(valor) {
        this.#barrio = valor;
    }
    set FechaIndicada(valor) {
        this.#fechaIndicada = valor;
    }
    set FechaAsignada(valor) {
        this.#fechaAsignada = valor;
    }

    get Nombre() {
        return this.#nombre;
    }
    get Barrio() {
        return this.#barrio;
    }
    get FechaIndicada() {
        return this.#fechaIndicada;
    }
    get FechaAsignada() {
        return this.#fechaAsignada;
    }


}