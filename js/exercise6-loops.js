/*
Diferencias entre los bucles "for in" y "for .. of"

· Create a list named “items” and add random values to it then output “items” to the console.
· Create a “for…in” loop over the “items” list and ouput the results to the console.
· Create a “for…of” loop over the “items” list and output the results to the console.

NOTE: Notice “for…in” only works against the index of the list while “for…of” works against the value of each item in the list.
*/
// Vamos!
console.log("Vamos!");
var items = [1, 2, 3];
console.log(items);
//saca las posiciones
for (var i in items) {
    console.log(i);
}
console.log("//////////");
//saca el valor de cada posicion
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var i = items_1[_i];
    console.log(i);
}
