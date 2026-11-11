export class Rio {
    #nombre;
    #cuenca;
    #caudalMedio;
    #poblaciones;
    constructor(nombre, cuenca) {
        this.#nombre = nombre;
        this.#cuenca = cuenca;
        this.#caudalMedio=0;
        this.#poblaciones=[];
        console.log("nuevo rio " +  this.#nombre + " de la cuenca " + this.#cuenca);
    }
 
    agregarPoblacion(...poblacion) {
        this.#poblaciones.push(...poblacion);
        console.log("el rio "+ this.imprimeNombre() +" pasa por "+ this.imprimePoblaciones());
    }
    eliminarPoblacion(poblacion) {
        this.#poblaciones = this.#poblaciones.filter(p => p != poblacion);
        console.log("el rio "+ this.imprimeNombre() +" no pasa pasa por "+ poblacion);
    }
    modificarCaudalmedio(numero) {
        this.#caudalMedio = numero;
    }
    imprimeNombre() {
        return this.#nombre;
    }
    imprimeCuenca() {
        return this.#cuenca;
    }
    imprimeCaudal() {
        if (this.#caudalMedio != "" || this.#caudalMedio != null || this.#caudalMedio != undefined) {
            return this.#caudalMedio;
        } else {
            return "caudal Medio es vacío";
        }
    }
    imprimePoblaciones() {
        if (this.#poblaciones != "" || this.#poblaciones != null || this.#poblaciones != undefined) {
            return this.#poblaciones.join(" ");
        } else {
            return " poblaciones es vacío";
        }
    }
    imprimeRio() {
        return "nombre: " + this.imprimeNombre() +
            "Cuenca: " + this.imprimeCuenca() +
            "Caudal: " + this.imprimeCaudal() +
            "Poblaciones:" + this.imprimePoblaciones();
    }

}

//    set Nombre(nombre) {
//         this.#nombre = nombre;
//     }
//     set Cuenca(cuenca) {
//         this.#cuenca = cuenca;
//     }
//     set CaudalMedio(caudalMedio) {
//         this.#caudalMedio = caudalMedio;
//     }
//     set Poblaciones(poblaciones) {
//         this.#poblaciones.push(poblaciones);
//     }
//     get Nombre() {
//         return this.#nombre;
//     }
//     get Cuenca() {
//         return this.#cuenca;
//     }
//     get CaudalMedio() {
//         return this.#caudalMedio;
//     }
//     get Poblaciones() {
//         return this.#poblaciones;
//     }