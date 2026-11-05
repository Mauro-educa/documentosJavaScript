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
    x: 0,
    y: 0,
    mover: function (x, y) {
        this.x = x;
        this.y = y;
    }
}

let nombreFiguras = ["p", "p", "p", "p", "a", "a", "k", "q", "c", "c", "t", "t", "p", "p", "p", "p", "a", "a", "k", "q", "c", "c", "t", "t"];

// nombreFiguras.map(nombre => {let p =  Object.create(figura);})


let arrFiguras = nombreFiguras.map(nombre => {
    let p = Object.create(figura);
    p.tipo = nombre;
    return p;
});

function colocarPieza(figura, tablero) {
    let posX = Math.floor(Math.random() * 8);
    let posY = Math.floor(Math.random() * 8);
    console.log(posX, posY);
  
    if (tablero[posX][posY] == " ") {
        figura.mover(posX, posY);
      
        console.log(figura.tipo);
        tablero[posX][posY] = figura.tipo;
    }
}

for (let i = 0; i < arrFiguras.length; i++) {

    colocarPieza(arrFiguras[i], tablero);
}

console.table(tablero);

