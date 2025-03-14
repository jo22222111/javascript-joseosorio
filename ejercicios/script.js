//1. Imprime por consola un mensaje si el usuario y contrasena coincide con unos establecidos

let usuarioEstablecido = "jose";
let contrasenaEstablecida = "2022";
let usuarioIngresado ="jose";
let contrasenaIngresada = "2022";

if (usuarioIngresado === usuarioEstablecido && contrasenaIngresada === contrasenaEstablecida) {
    console.log("Acesso concedido");

} else {
    console.log("Acesso denegado");
}

//2. Verifica si un número es positivo , negativo o cero e imprime un mensaje

let numero = -7;

if (numero > 0) {
    console.log("el numero es positivo");
}else if (numero < 0) {
    console.log("el numero es negativo");


}else {
    console.log("el numero es cero");

}

//3. Verifica si una persona puede votar o no (mayor o iguala 18) e indica cuantos años le faltan

let edad=16;

if (edad >= 18) {

    console.log("puede votar");

} else {
    console.log("no puede votar, le faltan ${18 - edad} años");

}

//4. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let estado = edad >= 18 ? "adulto" : "menor";
console.log(`la persona es ${estado}`);






//EJERCICIOS //

//1. Programa que dada la edad de una persona indique si es mayor o menor de edad se considera mayor de edad a partir de los 18 años.

function verificarEdad(){
    let edad =prompt("ingrese su edad");

    if (edad >= 18) {
        console.log("es mayor de edad");

    } else {
        console.log("es menor de edad");

    } 
}

//3. Dado dos números A y B, determinar si A es mayor, menor o igual que B.

function compararNumeros() {
    
    let A = parseFloat(prompt("Ingrese el primer número A:"));
    let B = parseFloat(prompt("Ingrese el segundo número B:"));

   
    if (A > B) {
        console.log("A es mayor que B.");
    } else if (A < B) {
        console.log("A es menor que B.");
    } else {
        console.log("A es igual a B.");
    }
}


compararNumeros();

//5. Dado el peso de una persona:

function clasificarPeso() {
    
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

    
    if (peso <= 40) {
        console.log("Persona baja de peso.");
    } else if (peso >= 41 && peso <= 70) {
        console.log("Persona con peso promedio.");
    } else {
        console.log("Persona con sobrepeso.");
    }
}


clasificarPeso();


//7.En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál será la cantidad que pagara una persona por su compra.

function calcularPago() {
    
    let totalCompra = parseFloat(prompt("Ingrese el total de su compra en pesos:"));

    
    let descuento;
    if (totalCompra > 1000) {
        descuento = totalCompra * 0.20; // 20% de descuento
        console.log("Se aplicó un descuento del 20%.");
    } else {
        descuento = totalCompra * 0.05; // 5% de descuento
        console.log("Se aplicó un descuento del 5%.");
    }

   
    let precioFinal = totalCompra - descuento;

    
    console.log("El precio final a pagar es: $" + precioFinal.toFixed(2));
}


calcularPago();

//9. Programa que lea los nombres y edades de dos personas e imprima cuál de ellas tiene más edad.

function compararEdad() {
    
    let nombre1 = prompt("Ingrese el nombre de la primera persona:");
    let edad1 = parseInt(prompt("Ingrese la edad de " + nombre1 + ":"));

    
    let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
    let edad2 = parseInt(prompt("Ingrese la edad de " + nombre2 + ":"));

    
    if (edad1 > edad2) {
        console.log(nombre1 + " tiene más edad.");
    } else if (edad2 > edad1) {
        console.log(nombre2 + " tiene más edad.");
    } else {
        console.log("Ambas personas tienen la misma edad.");
    }
}


compararEdad();


//11.Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.

function operarNumeros() {
    
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (num1 === num2) {
        console.log("El resultado de multiplicar los números es: " + (num1 * num2));
    } else if (num1 > num2) {
        console.log("El resultado de restar los números es: " + (num1 - num2));
    } else {
        console.log("El resultado de sumar los números es: " + (num1 + num2));
    }
}


operarNumeros();

//13.Escribe un programa que determine si un número ingresado por el usuario es par o impar.

function verificarParImpar() {
    
    let numero = parseInt(prompt("Ingrese un número:"));

    
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}


verificarParImpar();

//15.Crea un programa que solicite un número y verifique si es positivo, negativo o igual a cero.

function verificarSigno() {
    
    let numero = parseFloat(prompt("Ingrese un número:"));

   
    if (numero > 0) {
        console.log("El número " + numero + " es positivo.");
    } else if (numero < 0) {
        console.log("El número " + numero + " es negativo.");
    } else {
        console.log("El número es igual a cero.");
    }
}


verificarSigno();

//19.Diseña un programa que solicite el nombre de un usuario y su contraseña. Si el nombre es "admin" y la contraseña es "12345", muestra un mensaje de acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.

function verificarAcceso() {
    
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contraseña = prompt("Ingrese su contraseña:");

   
    if (usuario === "admin" && contraseña === "12345") {
        console.log("Acceso concedido.");
    } else {
        console.log("Acceso denegado.");
    }
}


verificarAcceso();


//FUNCIONES 
/*
function saludar() {
    alert( "Holii, probando las funciones" );

}

saludar()*/

/*
function sumar(){

    return 2+2
    
}
console.log(sumar()); 
*/

/*function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
  
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
  
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
  
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
  
    // devolvemos el resultado
    return result
  }

  alert(getRandomNumber());*/

  function saludar(){
    alert("holii"+ nombre)

  }

  saludar(" JOSE OSORIO ");



/* FUNCIONES

CONCEPTO: Las funciones son bloques de codigo que realiza una tarea especifica cuando se llama.

DEFINICION DE UNA FUNCION: Las funciones se definen por la palabra clave function seguida de un nombre y un bloque de llaves.

TIPOS DE FUNCIONES: Funciones con parametros, funciones sin parametros, funciones con retorno, funciones sin retorno.

COMO USAR FUNCIONES: Primero toca decrarar la funcion y luego llamarla.

EJEMPLOS DE FUNCIONES: 

FUNCION QUE SUMA DOS NUMEROS: 
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 5));  // Imprime 8

FUNCION DE FLECHA: 
const dividir = (a, b) => a / b;
console.log(dividir(10, 2));  // Imprime 5

FUNCION QUE IMPRIME UN MENSAJE:
function saludar() {
  console.log("Hola, ¿cómo estás?");
}
saludar();  // Imprime "Hola, ¿cómo estás?"
*/



/*  ARREGLOS O ARRAYS

CONCEPTO: Es una estructura de datos que permite almacenar varios valores en una sola variable.

DEFINICON DE ARREGLO: Se define con corchetes [] y los valores se separan por comas.

TIPOS DE ARREGLOS: Arreglos de números, arreglos de strings, arreglos de booleanos, arreglos de objetos.

RESUMEN DE ARRAY: 

CREAR UN ARRAY: let miArray = [10, 20, 30];
ACCEDER A ELEMENTOS: console.log(miArray[0]);  // 10
MODIFICAR ELEMENTOS: miArray[1] = 25;

METODOS UTILIES DE ARREGLOS:

PUSH(), POP(), SHIFT(), UNSHIFT(), MAP(), FILTER(), REDUCE(), FIND(), INCLUDES().

EJEMPLOS DE ARREGLOS:

FUNCION DE UN ARREGLO SIMPLE:
let frutas = ["manzana", "banana", "cereza"];
console.log(frutas);  // Imprime ["manzana", "banana", "cereza"]

FUNCION DE UN ARREGLO DE NUMEROS:
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);  // Imprime [1, 2, 3, 4, 5]

FUNCION DE UN ARREGLO DE BOOLEANOS:
let booleanos = [true, false, true];
console.log(booleanos);  // Imprime [true, false, true]
*/



/* PROGRAMACION ORIENTADO A OBJETOS (POO)

CONCEPTO: Es un paradigma de programación que se basa en la creación de objetos que contienen atributos y métodos.

QUE CONTIENE: Propiedades: Caracteristicas del objeto.
              Metodos: Comportamiento o funciones del objeto.


EJEMPLOS DE PROGRAMACION ORIENTADA A OBJETOS:              

EJEMPLO EN UNA CLASES:
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
  }
}

const persona1 = new Persona("Juan", 30);
persona1.saludar();  // Imprime "¡Hola, soy Juan y tengo 30 años!"


EJEMPLO DE INSTANCION: 
const persona2 = new Persona("Ana", 25);
persona2.saludar();  // Imprime "¡Hola, soy Ana y tengo 25 años!"
*/




/* MANEJO DE EVENTO Y EL DOM (Document Object Model) 

CONCEPTO: Es una interfaz de programación para los documentos HTML y XML.

QUE ES MANEJO DE EVENTOS: Son acciones que ocurren en el navegador, como hacer clic en un botón, mover el mouse, presionar una tecla, entre otros.

TIPOS DE EVENTOS: Eventos comunes, Eventos adicionales.


EJEMPLOS DE MANEJO DE EVENTOS:

EJEMPLO DE EVENTO DE CLICK (HACER CLIC EN UN BOTON):
<button id="miBoton">Haz clic aquí</button>
<script>
  document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Hiciste clic en el botón!");
  });
</script>


EJEMPLO DE EVENTO DE MOUSEOVER (CUANDO EL MOUSE PASA SOBRE UN ELEMENTO):
<div id="miCaja" style="width: 100px; height: 100px; background-color: blue;"></div>
<script>
  document.getElementById("miCaja").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red"; // Cambia el color cuando pasas el mouse
  });
</script>
*/




/* MODULOS 

CONCEPTO: Son una forma de organizar y dividir el código en partes más pequeñas y reutilizables. 

¿COMO FUNCIONA?: En un módulo, puedes exportar funciones, objetos, variables, etc., desde un archivo, y luego importarlos en otros archivos para usarlos.

VENTAJAS DE USAR MODULOS: Mejor organizacion, reutilizacion de codigo.

COMO USAR LOS MODULOS: 

EXPORTAR DESDE UN MODULO: Para exportar algo desde un módulo (un archivo JavaScript), usas la palabra clave export. 
Exportación Nombrada: Puedes exportar múltiples elementos con nombres específicos.
Exportación por Defecto: Exportas un solo valor como el valor predeterminado.

IMPORTAR DESDE UN MODULO:  Para utilizar lo que se exporta de un módulo en otro archivo, usas la palabra clave import.

RESUMEN DE LA SINTAXIS DE MODULOS: 
1.EXPORTAR:
export function miFuncion() {...}
export const miConstante = ...
export default miFuncion() {...}


2.IMPORTAR:
import { miFuncion, miConstante } from './miModulo.js';
import miFuncion from './miModulo.js'; 
import * as mod from './miModulo.js'; 

*/




/* PROGRAMACION ASINCRONA 

CONCEPTO: Permite que las operaciones se realicen de manera no bloqueante. 

COMO SE USA?: Existen varias formas de manejarla en javaScript.

CALLBACKS: Es una función que se pasa como argumento a otra función, y que se ejecutará después de que se complete una operación.
PROMISES:  Es un objeto que representa el eventual resultado de una operación asincrónica.
ASYNC/AWAIT: Son dos características de ES6 que permiten escribir código asíncrono de una manera más similar a la programación síncrona.

TIPOS DE PROGRAMACIN ASINCRONA SON: CALLBACKS, PROMESAS, ASYNC/AWAIT.


VENTAJAS: 

1. NO BLOQUEA LA EJECUCION DEL CODIGO.
2. MEJOR RENDIMIENTO.
3.CODIGO MAS LIMPIO Y FACIL DE LEER.


EJEMPLO USANDO PROMESAS Y ASYNC/AWAIT:

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos obtenidos correctamente");
    }, 2000);
  });
}

obtenerDatos().then((mensaje) => {
  console.log(mensaje);
}).catch((error) => {
  console.log(error);
});

*/

