/*
· Create an Enum using “Red”, “Green”, and “Blue”.
· Create a variable and set it equal to the “Green” enum value.
· Create another variable and set it equal to the enum in 0 (zero) position. By default, enums are zero based.
*/
// Vamos!
console.log("Vamos!");
var colores;
(function (colores) {
    colores[colores["RED"] = 0] = "RED";
    colores[colores["GREEN"] = 1] = "GREEN";
    colores[colores["BLUE"] = 2] = "BLUE";
})(colores || (colores = {}));
var pepe = colores.BLUE;
var juan = colores[0];
console.log(pepe);
console.log(juan);
