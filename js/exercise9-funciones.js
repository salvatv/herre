/*
· Crear una función simple que dados dos atributos numéricos, los sume. Mostrar  el resultado de la llamada por consola.
· Crear una función "anónima" (var variable = function (parametros...) ) que sume dos números. Mostrar el resultado
de la llamada por consola.
· Crear una función del tipo "arrow"que haga lo mismo que los dos puntos anteriores. Mostrar resultado por consola
var variable = (parametros): tipo => {
  return loquesea;
}

*/
// Vamos!
console.log("Vamos!");
function sumar(param1, param2) {
    var suma = param1 + param2;
    console.log("el resultado es: " + suma);
}
sumar(2, 3);
var variable = function (x, y) { return x + y; };
console.log(variable(4, 4));
var foo = function (x, y) { return x + y; };
console.log(foo(5, 5));
