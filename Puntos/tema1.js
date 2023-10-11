//Punto 1
/**
 * Crea un programa que declare una variable para almacenar la temperatura actual en grados Celsius. Luego, convierte esta temperatura a grados Fahrenheit utilizando la fórmula correspondiente y muestra el resultado en la consola.
 */

console.log('Temperatura');
let temperaturaCe = 1;

let temperaturaFa = (temperaturaCe*9/5) + 32;

console.log('Temperatura en Fahrenheit es: ', temperaturaFa );

//Punto 2
/**Declara una constante llamada PI y asigna el valor de π (aproximadamente 3.14159) a ella. Luego, pide al usuario que ingrese el radio de un círculo y calcula su área utilizando la constante PI. */

console.log('Área de un círculo');

const PI=3.14159;

const circulo = prompt('Por favor ingresa el radio del círculo:');
const radio = parseInt (circulo);

area = radio*radio*PI;

console.log('El área del circulo es: ', area );

//Punto 3
/**Declara una variable para representar la edad de un usuario. Luego, utiliza condicionales para determinar si el usuario es mayor o menor de edad y muestra un mensaje apropiado.
 */

console.log('Edad para la rumba');

let numero = prompt('Ingresa tu edad:');
let edad = parseInt(numero);

if (edad>17) {
    console.log('Eres mayor de edad, puedes rumbear');
} else if (edad<0) {
    console.log ('Esto no es una edad, revisa e intenta nuevamente');
} else {
    console.log('Eres menor de edad, ve con tu mami');
}

/**Usa el prompt para tomar dos números como argumentos y utilice una variable para almacenar la suma de estos números. Luego, muestra el resultado en la consola. */

console.log('Suma de dos números');
let numero1 = prompt('Ingresa el primer dígito:');
let num1 = parseInt(numero1);

let numero2 = prompt('Ingresa el primer dígito:');
let num2 = parseInt(numero2);

let suma = num1+num2;

console.log('La suma de los números es: ', suma );

/* Declara una variable de tipo string con una cadena de texto larga. Luego, utiliza métodos de cadenas para obtener la longitud de la cadena, convertirla a minúsculas y mostrar la última palabra en mayúsculas. */

console.log('Minúsculas y Mayúsculas');

const cadena = prompt('Ingresa la cadena de texto que vamos a ver: ');

//Contador de cadena
const longi = cadena.length;
console.log('La longitud de la cadena digitada es: ', longi);

//Minúsculas
const minu = cadena.toLowerCase();
console.log('La cadena en minúsculas que digitaste es: ', minu);

// Ultima palabra en mayúscula
const palabra = cadena.split(' ');
const ult= palabra[palabra.length - 1].toUpperCase();
console.log('La última paalabra que dijitaste que se verá en mayúscula es: ', ult);
