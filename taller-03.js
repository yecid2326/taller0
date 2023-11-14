/**const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

A partir de la lista anterior determinar:
Cantidad de hombres y mujeres.
Promedio de edades de hombres y mujeres.
Cuántas personas se llaman igual. */


const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

const homb = [];
const muj = [];
const edadhomb = [];
const edadmuj = [];

for (let i = 0; i < values.length; i++) {
    if (values[i].gender=='male') {
        homb.push(values[i].age);
    }else {
        muj.push(values[i].age);
    }
    
}
console.log('Cantidad de hombres: ',homb.length);
console.log('Cantidad de Mujeres: ',muj.length);

// Solución 1

const edades= [];

for (let j = 0; j < values.length; j++) {
        edades.push(values[j].age);
}

let suma = edades.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  });
  
const prom=suma/edades.length;

// Solución 2

let sumah = homb.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  });

let sumam = muj.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
  });

const promhom=sumah/homb.length;
const prommuj=sumam/muj.length;

console.log('La edad promedio de los hombres en la lista es: ', promhom)
console.log('La edad promedio de mujeres en la lista es: ', prommuj)

/**********************************************************************/

const nameCount = {};

values.forEach(i => {
    const name = i.name;
    if (nameCount[name]) {
        nameCount[name]++;
    } else {
        nameCount[name] = 1;
    }
    return nameCount;
});
console.log(nameCount);











