//

let tablero = [
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],];
let figura = {
    x: 0, y: 0,
    mover: function (x, y) {
        this.x = x;
        this.y = y;
    }
}


let nombreFiguras = ["p", "p", "p", "p", "a", "a", "k", "q", "c", "c", "t", "t", "p", "p", "p", "p", "a", "a", "k", "q", "c", "c", "t", "t"];

function colocarPieza(figura, tablero) {
    let posX = Math.floor(Math.random() * 8);
    let posY = Math.floor(Math.random() * 8);
    console.log(posX, posY);
    let piezaEspecifica = Object.create(figura);
    piezaEspecifica.tipo = "";
    if (tablero[posX][posY] == " ") {
        piezaEspecifica.mover(posX, posY);
        piezaEspecifica.tipo = nombreFiguras.pop();

        console.log(piezaEspecifica.tipo);
        
        tablero[posX][posY] = piezaEspecifica.tipo;
        piezaEspecifica.mover(posX, posY);
    }


}

while (nombreFiguras.length > 0) {

    colocarPieza(figura, tablero);
}

console.table(tablero);

