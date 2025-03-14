// juego de numero secreto //

// Genera un numero secreto aleatoreo entre 1 y 10. //
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
//Define el numero maximo de los intentos//
let intentosMaximos = 3;
//Variable para controlar el estado del juego//
let adivinado = false;
//Un bucle que permite al usuario intenta adivinar hasta que se le acaben los tres intentos//
for (let intentos = 1; intentos <= intentosMaximos; intentos++) {
    //solicita que ingrese un numero//
    let entrada = prompt(` intento ${intentos} de ${intentosMaximos}. Ingresa el numero entre 1 y 10:`);
    //verifica si la entrada es nula o esta vacia//
    if (entrada === null || entrada.trim() === "")  {
        alert("ingresa un numero valido");
        intentos--; //no se descuenta el intento si la entrada es invalida
        continue;
    
    }else {
        let intentosRestantes = intentosMaximos - intentos;
        if (intentosRestantes > 0) {
            alert(`Numero incorrecto. Te quedan ${intentosRestantes} intento(s).`);
        }

        
    }

}
//si la persona no adivino el numero con los intentos, se revelara el numero//
if (!adivinado) {
    alert(`¡se acabaron los intentos! el numero secreto era ${numeroSecreto}. `);
}
