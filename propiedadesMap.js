//constructor recibe un conjunto de pares-valor.
let mapa1=new Map([["platano",4],["sandia",5]]);
//set añade una pareja clave-valor
mapa1.set("manzana", 1);
mapa1.set("naranja", 2);
mapa1.set("pera", 3);
//get obtiene el valor asociado a una clave
console.log(mapa1.get("manzana"));
//delete borra una pareja clave-valor mediante la clae
mapa1.delete("manzana");
console.log(mapa1.get("manzana"));
mapa1.has("naranja");
console.log(mapa1.values());
console.log(mapa1.keys());
console.log(mapa1.entries());
console.log(mapa1.size);
mapa1.clear();
console.log(mapa1.keys());
