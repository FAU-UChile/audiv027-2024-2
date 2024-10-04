# clase
## PROCESO DE TRABAJO
### Introducción
### 1. FaceMesh: se intentó enlazar con un .obj, pero los archivos eran muy grandes o no los reconoció como rostro. Las imágenes las lograba reconocer.
No pudimos desmenuzar el código y hacer que tanto el facemesh de video como el de imagen se fusionaran en uno.

![Recurso 12](https://github.com/user-attachments/assets/3a6492dd-24a8-424c-bd4f-f84d24c141b6)


### 2. Con ayuda de tutoriales, pudimos colocar una base en el rostro, por ahora podemos trazar puntos presionando la E y luego cliquear en sectores del rostro, con la C se crea un nuevo lienzo, con la z se borra lo creado y un espacio interactivo (PUNTOS) 

* https://editor.p5js.org/cottito/sketches/rOvRVM_xn
![000](https://github.com/user-attachments/assets/857d1aed-b957-4a43-a3bc-e7b2b671ea33)

### 3. Al no obtener los resultados que queríamos, optamos por otras ideas, encontrando el modelo de sticker (LET EMOJI - LET POSESNET de Daniel Shiffman)

* https://editor.p5js.org/cottito/sketches/F9u6YjDgK

### 4. Se logra implementar una imagen encima del rostro, pero es muy movida y a veces desaparecía cuando dejaba de reconocer los puntos esenciales.

### 5. Se implementa el comando CANVASTEXT para dar instrucciones puntuales del desarrollo de la experiencia (“colocar una imagen o url”)

### 6. Cambio a BodyPoses de ML5, se encontraron mejores resultados en el reconocimiento y la imagen superpuesta era más estatica pudiendo reconocer zonas esenciales incluso si no estaban presentes.
https://github.com/user-attachments/assets/82e7cc87-72d7-479a-8cf9-25e28ae94150


### 7. En las modificaciones del código que se realizaron manualmente, se corrigieron varios detalles, como la eliminación de códigos sin función y que no cumplían un rol indispensable.
![diferencia 01](https://github.com/user-attachments/assets/8f6b50b1-951f-44a5-819d-4cfa6311f0aa)


#  Desarrollo de código
### 1. Copiamos el código base BodyPoses de ML5

* https://docs.ml5js.org/#/reference/bodypose

### 2. Se implementó el reconocimiento facial, junto a una imagen que sigue las coordenadas de la nariz, y ojos


### 3. Función Connection eliminada porque no hacia falta

### 4. Se implementó el Dropeo de imágenes directamente al lienzo

### 5. Se implementa el comando CANVASTEXT para dar instrucciones puntuales del desarrollo de la experiencia (“ARRASTRA TU IMAGEN (PNG) O PEGA UNA URL (JPG),”) o reconocimiento de error (“ERROR: URL NO VÁLIDA O NO ES UNA IMAGEN”) también se redondeo y se añadio un contorno
![arrastra](https://github.com/user-attachments/assets/83a5cf8b-53e0-4fb2-bf93-dac46b8ecac5)

### 6. Opción de añadir imagen por Url + Botón de carga + reseteo de la barra

### 7. Opción para alterar el tamaño de la imagen con un slider
![SLIDER](https://github.com/user-attachments/assets/3cc19c59-295f-48ff-8034-f99102e4d61e)

### 8. Opción de corregir manualmente los ejes de la imagen en caso de encontrar falla de reconocimiento

### 9. Opción botón para reiniciar los valores de los Slider

### 10. Repertorio de imágenes PNG para probar el código




## Links imagenes con URL:
* https://eltallerdehector.com/wp-content/uploads/2022/10/spiderman-png-free.png
* https://github.com/Dielox-X9/Pruebas


## Documentación a utilizar:

* https://docs.ml5js.org/#/reference/facemesh
* https://www.youtube.com/watch?v=ZXK8eFi0yK
* https://github.com/Dielox-X9/Pruebas/blob/main/Walter-White.p
* PosesNET original https://editor.p5js.org/codingtrain/sketches/ULA97pJXR
* PosesNET EMOJI https://editor.p5js.org/cottito/sketches/F9u6YjDgK
* BodyPoses Original ML5 https://editor.p5js.org/ml5/sketches/hMN9GdrO3

## Códigos investigados:
* https://docs.ml5js.org/#/reference/bodypose
* https://p5js.org/reference/

## Links varios no usados:
* https://docs.ml5js.org/#/reference/facemesh
* https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection
* https://github.com/tensorflow/tfjs-models/tree/master/face- landmarks-detection/demos
* https://teachablemachine.withgoogle.com/train
* https://mit-cml.github.io/yrtoolkit/yr/tutorials/facemesh.html
* https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker?hl=es-419
* https://mediapipe-studio.webapps.google.com/demo/face_landmarker?hl=es-419
* https://www.youtube.com/watch?v=ZXK8eFi0yKs
* https://editor.p5js.org/p5/sketches
* https://p5js.org/reference/p5/createModel/

## Edición final
https://editor.p5js.org/cottito/sketches/wx6DdNEEf
https://editor.p5js.org/Dielox-X9/sketches/2MBaw99f1

