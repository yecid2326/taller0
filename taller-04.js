/**let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
Calcular el costo total del inventario. */

let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

// Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.

const barato = [];
const prom = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].precio>=0 && products[i].precio<=5) {
        barato.push(products[i].nombre);
    }
    if (products[i].precio > 0 || products[i].cantidad > 0) {
        prom.push( products[i].precio );
    }
}

console.log('La lista de productos más baratos es: ', barato);

//Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero

let suma = prom.reduce(function(acum, valor) {
    return acum + valor;
  });

let prom1=suma/prom.length;

console.log('El costo promedio de todos productos es: ', prom1)

//Calcular el costo total del inventario.

const ct=[];

for (let k= 0; k< products.length; k++) {

    ct.push(products[k].precio * products[k].cantidad);
}

let sct = ct.reduce(function(acum, valor) {
    return acum + valor;
  });

console.log('El costo total del inventario es: ', sct);
