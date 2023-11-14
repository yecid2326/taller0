/**Calcular Entero a partir de un Binario de 4 dígitos.

Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

Ejemplos:

Entrada: [0, 0, 0, 1]
Salida :  1

Entrada: [0, 0, 1, 0]
Salida :  2

Entrada: [0, 1, 0, 1]
Salida :  5

Entrada: [1, 0, 0, 1]
Salida :  9

Entrada: [0, 0, 1, 0]
Salida :  2

Entrada: [0, 1, 1, 0]
Salida :  6

Entrada: [1, 1, 1, 1]
Salida :  15

Entrada: [1, 0, 1, 1]
Salida :  11. */

const lista=[1, 0, 1, 1];
let acum=0;

for (let i = 0; i < lista.length; i++) {
    acum = acum * 2 + lista[i];
}
console.log('El número que dijiste en binario es el: ', acum);











