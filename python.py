# Logica de programacion
# PYTHON

edad = 20

if edad < 13:
    print("Eres un niño")
elif edad < 18:
    print("Eres una dolescente")
else:
    print("Eres un adulto")
    

# Bucles

for i in range (1,6):
    print(i)
    
    
# Tipos de datos

# Número entero
entero = 42

# Número flotante
flotante = 3.14

# Cadena de texto
cadena = "Hola,mundo!"

# Booleano
booleano = True

# Imprimir los valores

print("Entero", entero)
print("Flotante", flotante)
print("Cadena", cadena)
print("Booleano", booleano)

# Funciones

# Definimos la funcion

def sumar (a, b):
    return a + b

# LLamada a la funcion y almacenamineto del resultado
resultado = sumar (5,3)

# Imprimir el resultado
print ("Resultado:", resultado)

# Arrays

#Definicion de una lista (equivalente a array en Python)
array = [1,2,3,4,5]

# Acceso a elementos

print("Primer elemento: ", array [0]) # 1
print("Segundo elemento: ", array [1]) # 2