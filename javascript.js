// Logica de programacion
// Javascript

let edad = 20;

if (edad < 13 ){
    console.log("Eres un niño.");
} else if (edad < 18){
    console.log("Eres un adolescente.");
} else {
    console.log("Eres un adulto");
}

//Bucles

for (let i = 1; i <= 5; i++){
    console.log(i)
}

// Tipos de datos

// Número entero
let entero = 42;

// Número flotante
let flotante = 3.14;

// Cadena de texto
let cadena = "Hola,mundo!"

// Booleano
let Booleano = true

// Imprimir los valores en consola.

console.log("Entero:", entero)
console.log("flotante:", flotante)
console.log("cadena:", cadena)
console.log("booleano", Booleano)


// Funciones

function sumar (a, b){
    return a + b;
}


// Llamada a la funcion y almacenamiento del resultado
let resultado =  sumar(5, 3);

// imprimir el resultado

console.log("Resultado: ", resultado)


// Arrays

// Definicion de un array

let array = [1,2,3,4,5];


// Acceso a los elementos
console.log("Primer elemento", array[0]); // 1 
console.log("Segundo elemento", array[1]); // 2



// Ejercicio grados Fahrenheit a Celsius.

// 1-Recibir la temperatura en grados Fahrenheit que necesita ser convertida

const temperatura_fahrenheit = parseFloat(prompt("Ingresá la temperatura que se desea convertir: "));

// Aplicar la fórmula para convertir el dato ingresado a Celsius

temperatura_celsius = (temperatura_fahrenheit -32) * (5/9);

// 3. Mostrar la temperatura convertira a grados Celsius

console.log(`La temperatura en grados Celsius es: ${temperatura_celsius}`);