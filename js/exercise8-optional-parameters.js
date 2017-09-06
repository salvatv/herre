/*
· Crear una función que acepte varios parámetros requeridos y que los muestre por consola utilizando
la anotación "interpolated". Por ejemplo:  console.log(`nombre: $(atributoNombre) edad: $(atributoEdad)`);

· Crear una función con un par de parámetros requeridos y un par de parámetros opcionales (?). Que los muestre por consola utilizando
la anotación "interpolated".
· Crear una función con un par de parámetros requeridos y un par de parámetros con valores por defecto.
Que los muestre por consola utilizando
la anotación "interpolated".
*/
// Vamos!
console.log("Vamos!");
function imprimir(nombre, edad) {
    console.log("nombre: " + nombre + " edad: " + edad);
}
imprimir("pepe", 24);
function imprimir2(nombre, edad, descripcion) {
    console.log("nombre: " + nombre + " edad: " + edad + " descripcion " + descripcion);
}
imprimir2("pepe", 24, "feo");
imprimir2("pepe", 24);
