<!-- Logica de programacion -->
<!-- PHP -->
<?php
$edad = 20;

if($edad <13){
    echo "Eres un niño."
} elseif (edad < 18){
    Echo "Eres un adolescente."
} else {
    echo "Eres un adulto."
}

// Bucles
<?php

for ($i = 1 <=5; $i++){
    echo $i . "\n";
}

?>

// Tipos de datos

<?php
// Número entero
$entero = 42;

// Número flotante
$flotante = 3.14;

// Cadena de texto
$cadena = "Hola,mundo!";

// Booleano
$booleano = true;

// Imprimir los valores
echo "Entero: " . $entero . ".\n";
echo "Flotante: " . $flotante . ".\n";
echo "Cadena: " . $cadena . ".\n";
echo "Boleano: " . ($booleano ? "true" : "false") . ".\n";

?>

// Funciones

<?php
// Funciones

// Definicion de la funcion
function sumar ($a, $b) {
    return $a + $b;
}

// Llamada a la funcion y almacenamiento del resultado
$resultado = sumar (5,3);

// Imprimir el resultado
echo "Resultado: " $resultado . "\n";

?>

// Arrays
<?php
// Definicion de un array
$array = [1,2,3,4,5];

// Acceso a elementos


echo "Primer elemento: " . $array[0] . "\n"; // 1
echo "Segundo elemento: " . $array[1] . "\n"; // 2
?>