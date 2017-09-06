/*
· Create a few variables with “var”, “let”, and “const”.
· Demonstrate what happens when declaring a variable with “var” in the root and then again inside a block statement like foreach or if(true).
Here is one possible example:
    if (true) {
        var myVar: number = 444;
    }
    console.log('myVar = ' + myVar);
    
· Demonstrate what happens when doing the same with a variable declared with “let”.
    if (true) {
        let myLet: number = 555;
    }
    console.log('myLet = ' + myLet);
 
· Try changing the value of the constant you created earlier. What happens?
*/
// Vamos!
console.log("Vamos!");
//se puede acceder desde fuera
if (true) {
    var myVar = 444;
}
console.log('myVar = ' + myVar);
//*
//no se puede acceder desde fuera, habría que hacer el log dentro del if en los dos siguientes casos
//*
if (true) {
    var myLet = 555;
}
//console.log('myLet = ' + myLet);
if (true) {
    var myConst = 555;
}
//console.log('myConst = ' + myConst);
