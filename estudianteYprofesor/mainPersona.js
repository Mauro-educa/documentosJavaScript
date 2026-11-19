import { Profesor } from "./profesor.js";
import { Estudiante } from "./estudiante.js";

let estudiante1 = new Estudiante("mauro", "garcia", "123456789b");
let estudiante2 = new Estudiante("alonso", "rogado", "123456789b");
let estudiante3 = new Estudiante("pepe", "alvarez", "123456789b");
let estudiante4 = new Estudiante("pedro", "perez", "143456789b");

let profesor1 = new Profesor("ramon", "gutierrez", "123456789b");
let pofesor2 = new Profesor("enrique", "benitez", "143456789b");


estudiante1.entregaEjercicio("ejer1", profesor1);
estudiante2.entregaEjercicio("ejer2", profesor2);
estudiante3.entregaEjercicio("ejer2", profesor3);

