# clase 14: Última clase - Fin de IA

### El equipo de trabajo está formado por: https://github.com/cottito, https://github.com/BatmanTheDay27 y https://github.com/Dielox-X9 entregamos en el siguiente repositorio https://github.com/Dielox-X9/audiv027-2024-2/edit/main/estudiantes/03-Dielox-X9/clase-14/README.md

# Cambios para Teachable Machine: 

## Versiones de programas utilizados:

- Teachable Machine: v2.4.7 https://teachablemachine.withgoogle.com/train

- P5.js: V1.11.1 https://editor.p5js.org/

- Web Editor: V2.15.2

## PROBLEMÁTICAS: 
- Revisar la posibilidad de que los demás modelos de entrenamiento de Teachable Machine no funcionen por temas de la versión existente (Problemas de actualización)

![image](https://github.com/user-attachments/assets/9f169347-2e97-4001-89e8-aa5d0c789e6c)

### Teachable MAchine - Primer Modelo Imágenes: 
 - Error ML5: https://editor.p5js.org/ml5/sketches/ImageModel_TM

![image](https://github.com/user-attachments/assets/79cd3b1e-4850-4943-bec8-f53217cc9b7d)
![image](https://github.com/user-attachments/assets/622a7dc0-85d5-427d-9e25-179676ace500)

- La problematica surge en el archivo **Index.html**, ya que el archivo de ML5 se encuentra desactualizado en la línea de código n° 8
``` Javascript
<html>

<head>
  <meta charset="UTF-8">
  <title>Webcam Image Classification using a pre-trained customized model and p5.js</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
  <script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>
</head>
```
- Para corregir este problema hay que modificar la línea de código n°8 cambiando **ml5@Latest** por uno que si funcione como lo es actualmente el **ml5@0.12.2**:

``` Javascript
<html>

<head>
  <meta charset="UTF-8">
  <title>Webcam Image Classification using a pre-trained customized model and p5.js</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
  <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>
</head>
```

### Teachable MAchine - Segundo Modelo Sonido: 
- Error ML5: https://editor.p5js.org/ml5/sketches/SoundModel_TM
Error Linea 31:

![image](https://github.com/user-attachments/assets/63660a17-214b-46af-83b7-26be2f60060b)

- Este modelo tiene el mismo problema que el anterior, se puede corregir de la misma manera:

- - La problematica surge en el archivo **Index.html**, ya que el archivo de ML5 se encuentra desactualizado en la línea de código n° 8
``` Javascript
<html>

<head>
  <meta charset="UTF-8">
  <title>Webcam Image Classification using a pre-trained customized model and p5.js</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
  <script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>
</head>
```
- Para corregir este problema hay que modificar la línea de código n°8 cambiando **ml5@Latest** por uno que si funcione como lo es actualmente el **ml5@0.12.2**:

``` Javascript
<html>

<head>
  <meta charset="UTF-8">
  <title>Webcam Image Classification using a pre-trained customized model and p5.js</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
  <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>
</head>
```
### Teachable MAchine - Tercer Modelo Movimiento de poses:

# CIERRE DE CLASE
