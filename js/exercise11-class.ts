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

class objeto {
   
    constructor(nombre: string, numero:number,tipo:string) {}
}

let objeto1 = new objeto("pepe", 1,"persona");
console.log("muestro el objeto");
console.log(objeto1);

class Matematicas {
    private numero1: number;
    private numero2: number;
    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    public suma(numero1:number, numero2:number) {
        return "resultado :  "+ (this.numero1 + this.numero2);
    }
}

let suma = new Matematicas(1,2);
console.log("muestro la suma");
console.log(suma.suma(1,2));
