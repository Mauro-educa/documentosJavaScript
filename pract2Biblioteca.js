
let OBJETO1 = {
    nombre: "El quijote", color: "azul", autor: "Cervantes", npaginas: 1000, editorial: "Anaya", forrado: true, urlcover: "url1",
    comprar: function () {
        console.log(`libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return this.nombre, " ", this.autor, " ", this.npaginas, " ", this.forrado;
    }
};


let OBJETO2 = {
    nombre: "La hipótesis más peligrosa", color: "blanco", autor: "Arturo Pérez-Reverte", npaginas: 500, editorial: "Salvia", forrado: false, urlcover: "url2",
    comprar: function () {
        console.log(`libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return this.nombre, " ", this.autor, " ", this.npaginas, " ", this.forrado;
    }
};
let OBJETO3 = {
    nombre: "Un hombre de honor", color: "verde", autor: "Paloma Sánchez", npaginas: 200, editorial: "El Barco de Vapor", forrado: true, urlcover: "url3",
    comprar: function () {
        console.log(`libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return this.nombre, " ", this.autor, " ", this.npaginas, " ", this.forrado;
    }
};

let OBJETO4 = {
    nombre: "Cosamala", color: "rojo", autor: "Alana S. Portero", npaginas: 300, editorial: "Grupo Planeta", forrado: true, urlcover: "url4",
    comprar: function () {
        console.log(`libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return this.nombre, " ", this.autor, " ", this.npaginas, " ", this.forrado;
    }
};

let biblioteca = [OBJETO1, OBJETO2, OBJETO3];


console.log(biblioteca.toString());

for (let libro of biblioteca) {
    console.log(libro.editorial);

}

biblioteca.forEach(libro => libro.comprar());

let checkPages = libro => libro.npaginas > 150;

console.log(checkPages(OBJETO1));

let checkLibro = (biblioteca, libro) => biblioteca.includes(libro);

let checkLibro2 = (libroNombre, biblioteca) => {

    if (biblioteca.filter(libro => libro.nombre == libroNombre).length > 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log(checkLibro(biblioteca, OBJETO1));

console.log("por titulo",checkLibro2("El quijote",biblioteca));














//nombre, color, autor, npaginas, editorial, forrado, urlcover
// function comprar(objeto1) {
//     let autor = objeto1.autor;
//     console.log(`libro de aventuras del autor ${autor} comprado`);

// }

// function toString(nombre, autor, npaginas, forrado,) {
//     return nombre, " ", autor, " ", npaginas, " ", forrado;
// }
