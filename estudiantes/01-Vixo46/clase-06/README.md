# clase 13-09-2024

## Apuntes trabajos audiv027-2024-1

* * *

1.  **Trabajo GamePad-KeyBoard a traves de poses por Chicomaker y Juanitaliano**


**Github del proyecto:** `[https://github.com/Vixo46/audiv027-2024-1/tree/main/estudiantes/08-BenjaIeg/clase-07]`

**Fecha** : 26 de Abril de 2024

Githubs: `[https://github.com/chicomaker]`  
`[https://github.com/Juanitaliano]`

Trabajo de tipeo de teclas predeterminadas a traves del uso de IA para reconocer poses y asociarlos a acciones.

**Herramientas:** *(Versiones no mencionadas)*  
\-Teacheable Machine  
\-Python  
\-Librerias Necesarias para python  
\-OpenCV  
\-Keyboard  
\-Numpy  
\-Tensorflow  
\-Navegador  
\-Camara Webcam

* * *

**Anotaciones:** Rescato el trabajo del Gamepad debido a que encuentro interesante la relacion de las poses con un resultado en la computadora.

------------------------------------------------------------------------------------------------------------------------

## Apuntes trabajos audiv027-2023-2

------------------------------------------------------------------------------------------------------------------------

1. **Trabajo Pinta con Handpose**

**Github del proyecto**:  `[https://github.com/FAU-UChile/audiv027-2023-2/tree/main/clases/clase-07/estudiantes/01100100i]`

**Githubs de los integrantes**: `[https://github.com/01100100i]`

**Fecha de proyecto** (fecha de entrega): 29 de Septiembre de 2023

Trabajo inspirado en proyectos de la biblioteca de p5 y ml5js, `Handpose` y `Drawing Patterns`.  TRabajo enfocado a pintar con las manos en un canvas en p5.

**Herramientas**: 
-p5 Editor
-ml5js
-ml4a.net/ml5
-Chat GPT
-Webcam

------------------------------------------------------------------------------------------------------------------------


*Me gustaria realizar proyecto que sea a partir de un teclado midi, que genere algun tipo de material grafico, imagenes, formas, etc. en base a al sonido que emita con algun plugin, instrumento digital.*



















**SketchRNN** utilizado en el trabajo de `https://github.com/Maginni` y `https://github.com/joaquinsuazo` publicado en `https://github.com/FAU-UChile/audiv027-2023-2/tree/main/clases/clase-07/estudiantes/Maginni`.

--------------------------------------------------------------------------------------------------------------------------------------------------
## Reconocimiento facial Teachable Machine / p5

Sistema operativo : Fedora Linux 40 (Workstation Edition)
Navegador : Google Chrome, Mozilla Firefox suele fallar para este ejercicio.

**Codigo p5 - 16 de septiembre de 2024**

![Screenshot from 2024-09-16 14-36-31](https://github.com/user-attachments/assets/a8e8f452-9ef4-47b4-8ee4-20008f91e753)
![Screenshot from 2024-09-16 14-36-07](https://github.com/user-attachments/assets/13760bfa-1ccc-4844-af12-b7960f27e9ce)


**errores que surgieron el 16 de septiembre de 2024**

![Screenshot from 2024-09-16 14-35-59](https://github.com/user-attachments/assets/61ebc0ef-75f6-4585-81da-c4f213d64889)
![Screenshot from 2024-09-16 14-46-25](https://github.com/user-attachments/assets/8ae9f949-1237-4ddf-b05d-ed7399cb635d)

**Solucion**

Realice otro entrenamiento en Teachable Machine, ya que el que realice para esta clase del 13 de septiembre fue en la sala de computacion de la FAU. El codigo solo cambia en mi modelo, y el resto esta basado en el que subio el profesor Aaron el mismo dia 13.

**Error**

![Screenshot from 2024-09-16 15-02-55](https://github.com/user-attachments/assets/bbfdabc2-9104-4212-95f6-79f11d19d537)

El segundo entrenamiento fue en otro lugar y usando exclusivamente Chrome, con mejores poses y angulos. luego de eso, se usaron los codigos del p5.js que modifico el profesor para que diera el resultado. se grabo el archivo y se refresco la pagina. con eso, mi reconocimiento con Teachable y p5.js pudo funcionar.

![Screenshot from 2024-09-16 15-06-24](https://github.com/user-attachments/assets/7fe3e1a6-f3f3-4bc9-9188-5b38765a477e)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Link p5.js de referencia por Aaron Montoya** : [https://editor.p5js.org/montoyamoraga/sketches/uG1sOH1QE]

**Link p5.js con mi entrenamiento nuevo :** [https://editor.p5js.org/Vixo46/sketches/Y4k34F0Lo]
