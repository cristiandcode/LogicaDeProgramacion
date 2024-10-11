// Logica de programacion
// JAVA
public class Main {
    public static void main (String[] args) {
        int edad = 20;

        if (edad < 13){
            System.out.println("Eres un niño");
        } else if (edad < 18){
            System.out.println("Eres un adolescente.");
        } else {
            System.out.println("Eres un adulto.");
        }
    }
}


//Estructura de iteracion

public class Main {
    public static void main (String [] args){
        for (int i = 1; i <= 5; i++){
            System.out.println(i);
        }
    }
}


// Tipos de datos

public class Main{
    public static void main (String[] args){
        // Número entero
        int entero = 42;

        // Número flotante

        double flotante = 3.14;

        // Cadena de texto
        String cadena = "Hola, mundo!";

        // Booleano

        boolean Booleano = true;

        System.out.println("Entero: " + entero);
        System.out.println("Flotante: " + flotante);
        System.out.println("Cadena: " + cadena);
        System.out.println("Booleano: " + Booleano);
    }
}

 
// Funciones

public class Main {
    // Definicion de la funcion (método)
    public static int sumar (int a, int b){
        return a + b;
    }

    public static void main (String[] args){
        // Llamada a la funcion y almacenamiento del resultado
        int resultado = sumar (5,3);

        // Imprimir el resultado

    System.out.println("Resultado: " + resultado);
    }
}

// Arrays
public class Main {
    public static void main(String [] args){
        // Definicion de un array
        int [] array = {1,2,3,4,5};

        // Acceso a elementos
        System.out.println("Primer elemento: " + array[0]); // 1
        System.out.println("Segundo elemento: " + array[1]); // 2
    }
 }
