/*
· Crea una clase con 3 propiedades cualquiera con el tipo que quieras
· Declara un objeto del tipo de la nueva clase y setea cada valor y muestra el objeto en la consola.

· Crea una clase con el nombre "Matematicas" con una función "suma"y un constructor con dos parámetros de tipo numérico cada uno.
· Crea un objeto de tipo "Matematicas" y muestra por consola el resultado de la llamada a la construcción del objeto y de la función suma.

· Crea una clase "Persona" con las propiedades "nombre","apellidos" y "email". Añade una función "nombreCompleto" que combine el
nombre y los apellidos.
· Crea un objeto de la clase "Persona", setea los atributos y muestra por consola la llamada a la función "nombreCompleto".

*/
// Vamos!
console.log("Vamos!");
var objeto = /** @class */ (function () {
    function objeto(nombre, numero, tipo) {
        this.nombre = nombre;
        this.numero = numero;
        this.tipo = tipo;
    }
    return objeto;
}());
var objeto1 = new objeto("pepe", 1, "persona");
console.log("muestro el objeto");
console.log(objeto1);
var Matematicas = /** @class */ (function () {
    function Matematicas(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Matematicas.prototype.suma = function () {
        return "resultado : " + (this.numero1 + this.numero2);
    };
    return Matematicas;
}());
var suma = new Matematicas(1, 2);
console.log("muestro la suma");
console.log(suma.suma());
