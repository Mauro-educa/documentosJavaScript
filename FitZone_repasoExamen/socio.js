export class Socio extends Persona{
    #actividades=[];
    construct(nombre,apellidos,dni,telefono,actividades){
        this.#actividades=actividades;
        super(nombre,apellidos,dni,telefono);

    }
    reservarClase(numeroClase){
        return "el socio "+super(nombre)+" reserva la clase "+numeroClase;
    }
    set Atividades(valor){
        this.#actividades.push(valor);
    }
     get Actividades(){
      return  this.#actividades;
    }
}
