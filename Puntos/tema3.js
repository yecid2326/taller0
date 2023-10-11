/*Crea un programa que solicite al usuario dos números usando el prompt y realice operaciones de suma, resta, multiplicación y división con estos números. Muestra los resultados en la consola para cada una de estas operaciones.*/

let num1 = prompt('Indica el primer número');
let num2 = prompt('Indica el segundo número');
nume1= parseInt(num1);
nume2= parseInt(num2);

console.log('La suma de los dos números es: ', nume1+nume2);
console.log('La resta de los dos números es: ', nume1-nume2);
console.log('La multiplicación de los dos números es: ', nume1*nume2);
console.log('La división de los dos números es: ', nume1/nume2);

/*Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. Utiliza operadores de comparación para determinar si son iguales o si una es mayor que la otra. Muestra los resultados en la consola.*/

let adiv = prompt('Adivina el número que tengo alojado, escribe el número');
adiv=parseInt(adiv);
let ocul=32;

if (adiv==ocul){
    console.log ('Felicidades!!!!, adivinaste el número');
} else if (adiv<ocul) {
    console.log ('Casi aciertas, el número digitado es menor que el número que oculto en mi memoria');
} else {
    console.log ('Casi aciertas, el número digitado es mayor que el número que oculto en mi memoria');
}

/*Usando el prompt solicita al usuario digitar su nombre y utilice el operador de concatenación (+) para unir el nombre ingresado de manera que el resultado se despliegue en un alert y sea el siguiente Hola Juan, bienvenido!*/

let nombre = prompt('Indica tu nombre por favor');

alert('Hola ' + nombre +', bienvenide!')

/*Crea un programa que calcule el área de un triángulo utilizando la fórmula: área = (base * altura) / 2. Solicita al usuario que ingrese los valores de la base y la altura usando el prompt*/

let base = prompt('Indica el valor de la base de nuestro triángulo');
base= parseInt(base);

let altura = prompt('Indica el valor de la altura de nuestro triángulo');
altura= parseInt(altura);

alert('El área de nuestro triángulo es: '+(base*altura)/2);

/*Declara una variable booleana llamada esMayor y asigna el resultado de una comparación entre dos edades (por ejemplo, 18 y 25). Luego, muestra el valor de esMayor en la consola.*/

let primer = prompt('Indica el valor del primer número a comparar');
primer= parseInt(primer);

let segundo = prompt('Indica el valor del segundo número a comparar');
segundo= parseInt(segundo);

let esMayor=true;

if (primer>segundo) {
    esMayor=primer;
}else if (primer<segundo) {
    esMayor=segundo;
} else {
    alert('No puedes digitar dos números iguales');
    esMayor=false;
}

alert('El número mayor es '+esMayor);
