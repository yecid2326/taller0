/* Declara una variable y asígnale un valor booleano. Luego, utiliza una estructura condicional para determinar si el valor es verdadero o falso y muestra un mensaje apropiado, por ejemplo "Es verdadero" o "Es falso". */

const variable = true;
if(variable == true){
    console.log('Digitaste un valor verdadero');
} else{
    console.log('Dgitaste un valor falso');
}

/* Usa el prompt para que tome un número. Indique si el número es par o impar lanzando un alert() */

const num = prompt('Digita un número:');
const numero = parseInt(num);

if (numero==0){
    alert("Cero ni es par, ni es impar")
} else if (numero%2==0){
    alert("El número digitado es par")
} else {
    alert("El número digitado es impar")
}

/* Declara un lista que contenga diferentes tipos de datos (números, cadenas, booleanos, objetos, etc.). Cuenta cuantos valore contiene la lista e informa lanzando un alert() */

const listita = [0,"cadena", true, {nombre: "objeto1"}, [5,6,2]];

const conteo = listita.length;
console.log(conteo);

alert("La cantidad de objetos y elementos en esta lista es de: ${conteo}", conteo);

/* Crea un programa que declare un lista de nombres de frutas. Luego, elimina la primera fruta, ahora cambia el valor de la segunda fruta que ahora esta de primero en la lista, inserta una nueva fruta al final de la lista y muestra toda la lista en consola. */

const frutas = ["naranja", "pera", "banano", "papaya", "Pitaya", "manzana", "Uva", "Sandía"];

frutas.splice(0,1);
frutas[0]= 'Kiwi';
frutas.push('Mango');
console.log(frutas);

/* Declara un objeto que represente a una persona con propiedades como nombre, edad y dirección. Luego, muestra la información de la persona en la consola accediendo directamente a sus propiedades. El mensaje debe decir algo como: Juan tiene 45 años y vive en la calle 63 con carrera 24 */

const persona = {
    nombre:'Luciana',
    edad: 25,
    direccion: 'clle 1',
}

console.log(`Presentamos el día de hoy a ${persona.direccion}`);

