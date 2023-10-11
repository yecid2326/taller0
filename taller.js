
//let array = [8, 1, 3, 5, 2];
/*let array = [1, 2, 3, 5, 2];
let copi = array;
let temp = array[0];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        i=i+1;
        if (array.length==0){
            if (array[j]>array[i]) {
                temp=array[j];
            } else{
                temp=array[i];
            }
            copi[i]=temp;
        }
    }
}
console.log(copi);
*/

/** De un listado de frutas determinar cuales son los productos que estan entre 10 y 20 dolares */  

const frutas = [     
    { nombre: 'Mangostino', precio: 34 },            
    { nombre: 'Mora', precio: 17 },           
    { nombre: 'Banano', precio: 11 },             
    { nombre: 'Papaya', precio: 13 },           
    { nombre: 'Lulo', precio: 8 }       
]

let temp= [];

for (let i = 0; i < frutas.length; i++) {
    if(frutas[i].precio>=10 && frutas[i].precio<=20){
        temp.push(frutas[i].nombre);
    }
}
console.log(temp);


//segundo método

const resul=frutas.filter(fruta =>
    fruta.precio>=10 &&
    fruta.precio<=20
    )

console.log(resul);





//************************************************************************************* */



// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, 
// es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. 
// El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30




function IBM (peso, altura) {
    calcu=peso / altura**2;
    if (calcu < 18.5) {
        console.log("Bajo de peso (Desnutrido)");
    } else if (calcu >= 18.5 && calcu <25) {
        console.log("disque Normal");
    } else if (calcu >= 25 && calcu <30) {
        console.log("Sobrepeso (Gordis)");
    }else {
        console.log("Obeso (Regorgis)");
    }
}

IBM(prompt('Ingrese el pesito en kilos (no libras)'), prompt('Cual su altura en metros'));
















