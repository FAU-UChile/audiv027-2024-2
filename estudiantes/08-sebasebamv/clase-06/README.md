# clase-06

revisar trabajos pasados como referencia

https://github.com/FAU-UChile/audiv027-2024-1
https://github.com/FAU-UChile/audiv027-2023-2

incluir en sus apuntes datos sobre integrantes, githubs,
codigo, materiales, que version de que software usaron, que tecnologia usaron

incluir qué tipo de proyecto quieren hacer
qué herramientas ya saben
qué herramientas quieren que veamos hoy en la segunda mitad

2024. 1er semestre:

1: Control de gamepad-keyboard a traves de poses (https://github.com/FAU-UChile/audiv027-2024-1/tree/main/estudiantes/08-BenjaIeg/clase-07)

control q funciona mediante reconocimiento de camara

Herramientas utilizadas: Teacheable Machine; Python

Librerias Necesarias para python: OpenCV ; Keyboard ; Numpy ; Tensorflow ; Navegador ; Camara Webcam

---

2: CatchCam

juego q funciona con camara

materiales/herramientas : Processing 4.3 ejecutado en el ordenador ; Wekinator-2.1.0.4 ; webcam ; videoInput Face Detection Processing disponible en [http://www.wekinator.org/examples/]

dentro de processing descargamos: Ocsp5 ; OpenCv processing ; p5.js Mod ; video library for processing 4

---

teachable machine

usar tensorflow.js para codigo modelos para p5 ; ml5 

(eso archivo de codigo, sketch file)

para entrenar con imaganes en particular

![image](https://github.com/user-attachments/assets/c22f1f3e-9b0d-4a73-9757-252e01eb49c9)

agregar muestras a reconocer como imputs, asignar nombres correspodientes en class X

una vez listo, exportar tensorflow.js (ojala descargarlo )

![image](https://github.com/user-attachments/assets/8af806d2-dccc-4a3a-bfeb-2aef15c26e0b)

cambiar a version antigua de ml5, agregando en index.html

<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script> ; estan ml5 en faq 


![image](https://github.com/user-attachments/assets/e628a799-ec42-4e58-8100-9e69a4ddc7fa)


luego para correrlo en p5, copiar codigo entregado borrando "script" que aparace al principio, agregar carpeta a un nuevo proyecto (como "my_model")

![image](https://github.com/user-attachments/assets/e233dabc-0ccb-4ed6-9d07-3c0c7ff54ee7)

luego realizar cambios en el codigo 

![image](https://github.com/user-attachments/assets/e61d9b4c-fa9f-4aab-ac25-4912a95817f5)

en linea 24 agregar "//" (que sirver para saltar / omitir linea) frente a flippedVideo

en linea 32 quitar flipped 





