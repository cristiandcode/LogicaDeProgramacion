# LOGICA DE PROGRAMACION (En desarrollo actualmente)

## Teoria

 <h4>Pensamiento Computacional: Es desglosar el problema y resolverlo usando algoritmos </h4>

    • Descomposicion de problemas
    • Identificacion de patrones
    • Enfoque de lo esencial (Abstraccion)
    • Desarrollo de algoritmos
    • Analisis y mejora de soluciones (Evaluacion)


   <h3> Que es un patron? </h3>
Un patron es una repeticion identificable y predecible de elementos o caracterisitcas de un conjunto de datos, situaciones o fenomenos. Tienen las cualidades de: <br>
    • Repeticion: Los patrones son secuencias o caracteristicas que se repiten de manera constante. <br>
    • Discernibilidad: Los patrones pueden ser reconocidos y destacados dentro de un conjunto de datos o situaciones <br>
    • Predictibilidad (Predecir): Los patrones permiten anticipar comportamientos o resultados futuros basados en observaciones anteriores.<br>
    • Regularidad: Los patrones presentan una disposicion consistente de sus elementos a lo largo del tiempo o del espacio.<br>
    • Abstaccion los patrones se pueden simplificar para representar la informacion de forma mas clara y manejable.
    <hr>

<h4>¿Que es un ALGORITMO?</h4>

Un algoritmo es un conjunto de instrucciones precisas y ordenadas que se siguen para realizar una tarea especifica o resolver un problema.
Es decir, un algoritmo es un conjunto de instrucciones para resolver un problema

    • Secuencia de pasos: Una serie de pasos que deben seguirse en un orden especifico para lograr un objetivo
    • Precisión: Cada paso debe ser definido y comprensible para una ejecución precisa y consistente.
    • Finitud (Que no es infinito, es decir que tiene una cantidad): Los algoritmos deben tener un número finito de pasos, terminando una vez alcanzado el objetivo o después de un número determinado de pasos.
    • Solución de problemas: Diseñados para resolver problemas específicos
    • Eficiencia: Un buen algoritmo no solo logra el resultado deseado, sino que lo hace de manera eficiente, optimizando el uso de recursos como tiempo y memoria.
    
    Analisis de un problema

Descomponer el problema en partes mas manejables.

    • Identificar y comprender el problema(Identificar los detalles relevantes, entrada, salida)
    • Establecer objetivos claros (Mantener el enfoque)
    • Identificar requisitos y restricciones (Diseñar soluciones para lo que usuario necesite)
    • Analizar las causas subyacentes (Solucionar el problema de raíz, identificarlo.)
    • Explorar soluciones alternativas (Evaluar ventajas y desventajas)
    • Establecer criterios de éxito (Establecer las metas)

ESTRUCTURAS DE CONTROL
Son un conjunto de instrucciones en un programa que permiten alterar el flujo de ejecución de las operaciones, es decir, dictan como y cuando se deben ejecutar las distintas partes del código. Estas estructuras son fundamentales en la programación, ya que sin ellas, los programas seguirían una ejecución secuencial y lineal, sin poder realizar decisiones, repeticiones o desviaciones en el flujo del programa.
Esto se divide en dos partes:

Estructuras Condicionales

Las estructuras condicionales permiten que el programa tome decisiones y ejecute ciertas instrucciones SOLO SI se cumplen ciertas condiciones. Esto se logra utilizando sentencias como IF, ELSE IF (o ELIF en algunos lenguajes), y ELSE
Ejemplo Si estamos cocinando preguntamos:
- ¿Esta bien cocida la carne?
-SI, entonces apaga el fuego. 
- NO entonces seguir cocinando la carne.
Entonces son estructuras de control  que nos ayudan a tomar una decisión en base a una condición.

Estructuras de iteración
Son BUCLES que son estructuras de control que permiten repetir una o varias instrucciones múltiples veces, hasta que se cumpla una condición especifica. Existen varios tipos de bucles, siendo los mas comunes WHILE, FOR, DO-WHILE.
Ej: Debemos aplaudir 10 veces al artista.
- ¿Terminamos de aplaudir al artista?
- No, aplaudimos una. Seguir aplaudiendo, aplaudimos 2 veces, terminamos de aplaudir al artista? No, seguimos aplaudiendo. Llegamos a 10,
- ¿Dejamos de aplaudir al artista?
- SI. La instrucción de aplaudir se hizo 10 veces y finalizó.

SINTAXIS

Javascrip y PHP usan llaves {} para delimitar bloques de codigo y ; dos puntos al final de las lineas.
Python usa identacion para demilitar bloques, sin necesidad de llaves {}
Java también usa llaves {} para bloques de codigo y requiere el punto y coma ; al final de cada declaracion.



<h4>Declaracion de variables </h4>

Javascript, Python y PHP no requieren especificar el tipo de la variable.
Java requiere especificar el tipo de la variable (int en este caso).

Metodo de salida:

Javascript usa console.log para imprimir en consola
Python usa Print
Java usa System.out.println.
PHP usa echo.

Sintaxis: 
Javascript y PHP utilizan la sintaxis FOR (inicializacion; condicion; incremento) y ;(punto y coma)para separar las partes del bucle.
Python utiliza la funcion range (start,stop) para generar una secuencia de números, y el bucle for itera directamente sobre estos números.
Java utiliza una sintaxis similar a Javascript y PHP, con int para declarar el tipo de la variable de control y System.out.println para imprimir.

Declaracion de variables.
Javacrsipt y PHP no requieren especificar el tipo de la variable de control (let en Javascript y $ en PHP).
Python no necesita especificar el tipo de la variable.
Java requiere especificar el tipo de la variable (int en este caso).

Metodo de Salida

Javascript utiliza console.log para imprimir en consola.
Python utiliza print.
Java utiliza System.out.println.
PHP utiliza echo y es comun añadir “\n” para un salto de línea. Y requiere la conversión manual de booleanos a cadenas con ($booleano ? “true” : “false”) para mostrar true o false.

Variables
Son contenedores que almacenan datos que pueden cambiar a lo largo del programa. Se declaran, se les asignan valores y se utilizan para realizar operaciones.

Tipo de datos
Definen la naturaleza de los valores que pueden ser manipulados en un programa. Los tipos mas comunes incluyen enteros, decimales, cadenas de texto y booleanos.

Operaciones
Permiten manipular y comparar los datos almacenados en variables para producir nuevos valores, tomar decisiones y controlar el flujo del programa.


Funciones
Las funciones o procedimientos son bloques de código que realizan una tarea específica y que pueden ser reutilizados a lo largo del programa. Su uso permite la organización, la legibilidad y la mantenibilidad del código. (Es decir, una parte del codigo que podemos llamar a discreción).

Modularidad
La modularidad se refiere a la práctica de dividir un programa en partes más pequeñas y manejables, llamadas módulos o funciones. Esto tiene varios beneficios:


¿Como definimos una funcion?

Javascript usa la palabra clave “function” para definir funciones. Las funciones pueden ser declaradas en cualquier lugar del codigo.

Python usa la palabra clave def para definir funciones. La definicion debe estar correctamente indentada.

Java define funciones dentro de clases (especificamente, métodos) y requiere que se especifique el tipo de retorno. Además, la definición debe estar dentro de una clase.

PHP usa la palabra clave function similar a Javascript. Las funciones pueden ser definidas en cualquier lugar del codigo.

Tipos de datos y Retorno:

Javascript y PHP permiten el uso de tipos de datos dinámicos y no requieren especificar el tipo de retorno.

Python tambien tiene tipado dinámico y no requiere especificar el tipo de retorno.

Java requiere especificar el tipo de retorno de la funcion y el tipo de cada parámetro.

Llamada a la Funcion:

En Javascript, Python, y PHP, las funciones se llaman directamente con el nombre de la funcion seguido de paréntesis.

En Java, las funciones (métodos) se llaman desde un metodo main u otro método en la misma clase.

ESTRUCTURA DE DATOS

La estructura de datos en programacion es una manera organizada y eficiente de almacenar, manipular y acceder a datos en una computadora. Las estructuras de datos permiten que los programas manejen grandes cantidades de informacion de manera eficiente y efectiva, facilitando operaciones como busqueda, insercion, eliminacion y modifiacion de datos.

Arreglos (Arrays) : Coleccion de elementos del mismo(en algunos lenguajes ej. en Python y Javascript no es necesario)tipo almacenados en ubicaciones de memoria contiguas. Permiten acceso rapido por indice.

Listas enlazadas (Linked list) : Una serie de nodos donde cada nodo contiene un dato y una referencia al siguiente nodo en la secuencia.

Pilas (Stacks) : Colección de elementos que siguen el principio LIFO (Last, In, First, Out). (El ultimo que entra es el primero que sale)

Colas (Queues): Coleccion de elementos que sigue el principio FIFO (First In, First out) (El primero que entra es el primero que sale)

Arboles (Trees): Estructura jerarquica donde cada nodo tiene un valor y referencia  a uno o mas nodos hijos. Un tipo común es el árbol binario.

Grafos (Graphs): Conjunto de nodos conectados por aristas (edges), util para representar relaciones complejas entre datos.

Hash tables: Estructura que almacena pares clave-valor, permitiendo un acceso rapido a los datos a través de una función hash. (Como en javascript es similar a un objeto ya que tiene su clave-valor y en Python al diccionario que tiene su clave-valor, En java similar a las colecciones)

Diferencias entre Javascript y Python para definir un array.

En javascript usamos “let” para definir el array, mientras que en Python solo decimos “array” [] y le pasamos el valor que queremos darle al array.
PHP es similar a Python ya que solo se lo declara como $array y el valor entre [] corchetes.
En Java va todo dentro de una clase y el main y dentro hay que poner el tipo de dato es decir pondriamos que llevaria enteros el array si le pasamos numero, Quedaria asi: int[] array = {1,2,3};
No lleva corchetes, si llaves.

Declaracion e Inicializacion: (mas diferencias)

Javascript, Python y PHP usan una sintaxis similar para la definicion e inicializacion de arrays (o listas en Python)
Java requiere la especificación del tipo de datos del array (int[] en este caso) y tienen un tamaño fijo.

Acceso a elementos

Javascript, Python y PHP usan la misma sintaxis de corchetes [] para acceder a elementos.
Java tambien usa [], pero es mas rígido en cuanto a tipos y tamaño del array.

Recorrido:

Javascript y PHP utilizan un bucle for estándar para recorrer el array.
Python usa un bucle for simplificado para iterar directamente sobre los elementos.
Java utiliza un bucle for tradicional con indice o un bucle for-each para recorrer arrays.

Manipulación:

Javascript, Python y PHP permiten agregar y eliminar elementos fácilmente con metodos como push, appened y array_pop
Java requiere la creacion de nuevos arrays para agregar o eliminar elementos debido a la naturaleza fija de los arrays.

Caracteristicas de la POO (Programacion orientada a objetos)

Abstracción (Llevar el codigo a un problema real, de la vida cotidiana)

Permite representar entidades del mundo real como objetos con características y comportamientos relevantes para el problema que se esta resolviendo. Estos implifica la complejidad del sistema al enfocarse en aspectos esenciales y proporcionar una forma de modelar conceptos del mundo real en código.

Encapsulamiento (Seguridad de nuestro código, aislar parte del código.)

Los detalles internos de un objeto deben estar ocultos fuera de la definición y solo deben ser accesibles a través de una interfaz claramente definida. Esto promueve la seguridad y la integridad de los datos al prevenir accesos no autorizados y facilita el mantenimiento del código.

Herencia (subclase que hereda atributos y metodos de otra clase)

Permite que una clase (subclase) herede atributos y metodos de otra clase (superclase), lo que promueve la reutilizacion del codigo y la organización jerarquica de las clases. Esto facilita la creación de nuevas clases que extienden el comportamiento de clases existentes, permitiendo una mayor flexibilidad y modularidad en el diseño del sistema.

Polimorfismo (Responde de un mismo mensaje a maneras diferentes, permite que el código sea reutilizable)

Se refiere a la capacidad de objetos de diferentes clases de responder al mismo mensaje de manera diferente. En otras palabras, un mismo método o mensaje puede producir diferentes resultados según el tipo de objeto que lo reciba. Esto permite escribir código mas genérico y reutilizable.
