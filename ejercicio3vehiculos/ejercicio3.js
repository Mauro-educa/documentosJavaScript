class Vehiculo {
    constructor(nombre) {
        this._nombre = nombre;
    }
    set pasajeros(value) {
        this._pasajeros = value;
    }
    get pasajeros() {
        return this._pasajeros;
    }
}

class Coche extends Vehiculo {
    constructor(pasajeros, color) {
        super(pasajeros);
        this._color = color;
    }
    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color;
    }
}
class Camion extends Vehiculo {
    constructor(pasajeros, tara) {
        super(pasajeros);
        this._tara = tara;
    }
    set tara(value) {
        this._tara = value;
    }
    get tara() {
        return this._tara;
    }
}

function capturaReloj() {
    let now = new Date();

    return (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}
console.log(capturaReloj());

let arrayGlobal = [];
function generaVehiculos() {

    let colores = ["azul", "rojo", "verde"];
    let nTurismos = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < nTurismos; i++) {
        let nPasajeros = Math.floor(Math.random() * 6) + 1;
        let posiColor = Math.floor(Math.random() * colores.length);
        let coche = new Coche(nPasajeros, colores[posiColor]);
        arrayGlobal.push(coche);
    }
    let nCamiones = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < nCamiones; i++) {
        let nPasajeros = Math.floor(Math.random() * 6) + 1;
        let tara = Math.floor(Math.random() * 9998) + 1;
        let camion = new Camion(nPasajeros, tara);
        arrayGlobal.push(camion);
    }
}

 generaVehiculos();

function mostrarVehiculos(){
  document.write("<table border='1'>");
        for (let i = 0; i < fil; i++) {
            document.write("<tr>");
                document.write(`<td> ${capturaReloj()}</td>`);
                document.write(`<td> ${arrayGlobal[i].name}</td>`);
                document.write(`<td> ${arrayGlobal[i].pasajeros}</td>`);
            if(arrayGlobal[i].name=="Coche"){
                    document.write(`<td> ${arrayGlobal[i].color}</td>`);
            }
            else{
                 document.write(`<td> ${arrayGlobal[i].tara}</td>`);
            }
            document.write("</tr>");
        }
        document.write("</table>");
}

mostrarVehiculos();