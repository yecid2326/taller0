/* Crea un programa que solicite al usuario tres notas calcular el promedio. El rango permitido es de 0 a 5, incluidos decimales. Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:

Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
Si saca 4.1 y hasta 5.0 ( 'Excelente' )
*/



/* Usa el prompt para solicitar un número que representará el mes del año (por ejemplo, 1 para enero, 2 para febrero, etc.). Utiliza una estructura switch para mostrar cuántos días tiene ese mes. */



/* Usa el prompt para que tome un valor numérico del 1 al 12 (representando un mes) como argumento y devuelva el nombre del mes utilizando una estructura switch. */



/* Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 2 para "Editar configuración", etc.) y utilice una estructura switch para realizar la acción correspondiente. */



/* Usa el prompt para capturar un numero que representará una dirección cardinal (Norte, Sur, Este, Oeste). Utiliza una estructura switch para determinar en qué dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur). */






/*Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola bing.
Si el número es múltiplo de 5 debe imprimir en la consola bong.
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.*/

const num=prompt('Escribe aquí un número');
nume=Number(num);

let message= '';

if (nume%3==0){
    message=message+'Bing';
}
if (nume%5==0){
    message=message+'Bong';
}

if (!message) {
    console.log(nume);
} else {
    console.log(message)
}