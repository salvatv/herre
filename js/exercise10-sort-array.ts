/*
· Dada una interfaz y una inicialización de un array del tipo de la interfaz:
  · Crear una función de comparación basada en la edad.  Son funciones de este tipo:
      var comparadorDeLoQueSea = function (a: tipo, b: tipo) {
        if (a > b) { return -1; }
        if (a < b) {return 1; }
        return 0;
    }
               
  · Mostrar por consola el array de datos ordenado por nuestro comparador anterior (array.sort(comparador)
  · Crear otro comparador basado en el peso y mostrarlo en la consola.
*/
// Vamos!
console.log("Vamos!");


interface pet {
    name: string;
    age: number;
    weight: number;
}

var myPets: pet[] = [
    { name: 'Sally', age: 18, weight: 85 },
    { name: 'Jasmine', age: 9, weight: 55 },
    { name: 'Rush', age: 15, weight: 45 },
    { name: 'Roxie', age: 6, weight: 85 }
];

var comparadorEdad = function (pet1: pet, pet2: pet ) {
    if (pet1.age > pet2.age) { return -1; }
    if (pet1.age < pet2.age) {return 1; }
    return 0;
}
console.log("comparacion por edad");
console.log(myPets.sort(comparadorEdad));

var comparadorPeso = function (pet1: pet, pet2: pet ) {
    if (pet1.weight > pet2.weight) { return -1; }
    if (pet1.weight < pet2.weight) {return 1; }
    return 0;
}
console.log("comparacion por peso");
console.log(myPets.sort(comparadorPeso));