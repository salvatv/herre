/*
· Create an Enum using “Red”, “Green”, and “Blue”. 
· Create a variable and set it equal to the “Green” enum value.
· Create another variable and set it equal to the enum in 0 (zero) position. By default, enums are zero based. 
*/
// Vamos!
console.log("Vamos!");
enum colores{
    RED,GREEN,BLUE
}

let pepe = colores.BLUE;
let juan = colores[0];
console.log(pepe);
console.log(juan);