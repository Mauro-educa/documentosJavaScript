import { Carrera } from "./carrera.js";
import { Equipo } from "./equipo.js";
import { CalendarioCarreras } from "./calendarioCarreras.js";
import { Piloto } from "./piloto.js";

let piloto1 = new Piloto("Manolo", "Garcia", "velocidad");
let piloto2 = new Piloto("Pepe", "Juarez", "derrape");

let equipo1 = new Equipo(piloto1, piloto2, "lema de vice city");

let piloto3 = new Piloto("alfredo", "martin", "velocidad");
let piloto4 = new Piloto("juan", "gonzalez", "derrape");

let equipo2 = new Equipo(piloto3, piloto4, "los mas rapidos");

equipo1.Premios = 2000;
equipo1.Premios = 6000;
equipo1.Premios = 10000;
equipo1.nivelBusqueda("exceso de velocidad");
let carrera1 = new Carrera("carrera de la playa", "puerto", "27/02/2027");
carrera1.inscribirEquipo(equipo1);
carrera1.inscribirEquipo(equipo2);
carrera1.garajeMapa(1, 2, equipo1);
carrera1.garajeMapa(0, 1, equipo1);


let carrera2 = new Carrera("carrera del centro", "centro", "26/12/2027");
carrera2.inscribirEquipo(equipo1);
carrera2.inscribirEquipo(equipo1);
carrera2.inscribirEquipo(equipo2);
carrera2.garajeMapa(0, 0, equipo1);
carrera2.garajeMapa(2, 2, equipo1);

let calendario1 = new CalendarioCarreras();
calendario1.anadirCarrera(carrera1);
calendario1.anadirCarrera(carrera1);
calendario1.anadirCarrera(carrera2);
calendario1.consultarListadoCarreras();
calendario1.consultarListadoCarrerasBarrio();
console.log(equipo1.calcularMatricula());
console.log(equipo1.calcularNombreClave());
console.log(equipo1.nivelBusqueda("exceso de velocidad"));
console.log(equipo1.premioNeto());