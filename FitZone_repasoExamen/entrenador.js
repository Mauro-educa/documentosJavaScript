export class Entrenador extends Persona{
    #actividades=[];
    construct(nombre,apellidos,dni,telefono,actividades){
        this.#actividades=actividades;
        super(nombre,apellidos,dni,telefono);
    }
    reservarClase(numeroClase,nota){
        return "el el entrenador "+super(socio)+" valora la clase "+
        numeroClase + " con la nota "+nota;
    }
}