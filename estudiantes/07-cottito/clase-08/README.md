# clase
## PROCESO DE TRABAJO
* * *
## Introducción
### 1. Intento de integrar FaceMesh con modelos .obj
Como primer enfoque para el desarrollo del proyecto, intentamos vincular la tecnología de FaceMesh de ML5 con modelos 3D en formato .obj, buscando una solución que permitiera superponer esa estructura tridimensional sobre los rostros detectados. Significó una serie de dificultades debido a que los archivos .obj/.stl que probamos eran demasiado pesados, lo que impactaba negativamente en el rendimiento, y en muchos casos el sistema no era capaz de reconocerlos correctamente como rostros.



### 2. Reconocimiento facial y seguimiento de coordenadas
Se implementó una funcionalidad que permitió hacer un seguimiento de las coordenadas de la nariz y los ojos en tiempo real, usando el reconocimiento facial. Este seguimiento permitió que una imagen siga dichos puntos clave, aunque el rendimiento no fue del todo preciso y aún necesita ajustes. En este enfoque, sigue la fase de desarrollo y prueba.

* https://editor.p5js.org/cottito/sketches/rOvRVM_xn
![000](https://github.com/user-attachments/assets/857d1aed-b957-4a43-a3bc-e7b2b671ea33)
![pruebas_caras01@2x-100](https://github.com/user-attachments/assets/2a96196c-9e05-494a-80d6-af1862d70665)

![deteccion_rostro](https://github.com/user-attachments/assets/57f10138-1cf2-40c0-9c57-31cdc6700474)


### 3. Búsqueda de alternativas: modelo Sticker (Let Emoji)
Al no obtener los resultados deseados con faceMesh, exploramos otras ideas, encontrando el modelo de "sticker" (Daniel Shiffman). Esta alternativa permitió la implementación de un objeto gráfico (sticker) sobre el rostro, logrando cierta interacción con las poses faciales. Aparte del primer acercamiento a los comandos LET EMOJI y POSENET.

![sticker_truco](https://github.com/user-attachments/assets/697beea0-67de-4ded-b7bc-7d7c89e5bfcb)

* https://editor.p5js.org/cottito/sketches/F9u6YjDgK

### 4. Problemas con la estabilidad de imagen sobre el rostro
En la fase de prueba, la imagen superpuesta sobre el rostro seguía las coordenadas de los puntos faciales, pero no de manera completamente estable. En ciertos momentos, la imagen se movía excesivamente o incluso desaparecía cuando el reconocimiento de los puntos esenciales del rostro fallaba.


https://github.com/user-attachments/assets/7a3a4ba6-8155-4c69-b124-cc9c22427367


### 5. Implementación de CANVASTEXT para indicaciones
Se añadió la funcionalidad CANVASTEXT para proporcionar al usuario instrucciones claras durante la experiencia. Estas incluían mensajes como “Colocar una imagen o URL” para guiar en la interacción con la aplicación.

![url texto](https://github.com/user-attachments/assets/0425bd99-33f9-469f-9d68-1fd05290b24a)

### 6. Cambio a BodyPose de ML5: Mejora en resultados
Debido a los problemas de estabilidad con PoseNet, optamos por cambiar a BodyPose de ML5, lo que permitió obtener mejores resultados en el reconocimiento facial y una mayor estabilidad en la superposición de imágenes. 
* El sistema fue capaz de reconocer zonas esenciales del rostro con mayor precisión, incluso en casos donde no estaban presentes todos los puntos faciales.

https://github.com/user-attachments/assets/82e7cc87-72d7-479a-8cf9-25e28ae94150


### 7. Correcciones y depuración de código
Durante el proceso de desarrollo, realizamos varias modificaciones y ajustes manuales en el código para optimizar el rendimiento general del sistema. Entre estas modificaciones, se incluyó la eliminación de funciones que no cumplían un rol importante o que afectaban negativamente el rendimiento del programa. También se corrigieron detalles menores, como redundancias en el código, lo que nos permitió depurar y simplificar el flujo de trabajo, mejorando tanto la velocidad de procesamiento como la estabilidad del programa en su conjunto.

![diferencia 01](https://github.com/user-attachments/assets/8f6b50b1-951f-44a5-819d-4cfa6311f0aa)

### 8. Optimización del código: Doble personaje
Como parte de la optimización del código establecido, se añadió una nueva funcionalidad que permite proyectar dos imágenes de manera simultánea en el canvas. Para lograr esto, se implementó una división visual en la mitad de la pantalla, dividiendo el área de trabajo en dos secciones claramente diferenciadas. Esta hendidura actúa como una línea divisoria que facilita la proyección de una imagen en cada lado del lienzo, manteniendo un balance visual y estructural dentro de la experiencia. Esta división ayuda a experimentar con comparaciones en tiempo real, lo que resulta útil para probar diferentes parámetros de reconocimiento facial y ajustes gráficos sin la necesidad de recargar el entorno.

* * *
#  Desarrollo de código
### 1. Copiamos el código base BodyPoses de ML5

* https://docs.ml5js.org/#/reference/bodypose

### 2. Se implementó el reconocimiento facial, junto a una imagen que sigue las coordenadas de la nariz, y ojos (aún no perfectamente)

![dos_imgs@2x-100](https://github.com/user-attachments/assets/6f935238-bc04-49ca-870a-44f8d87f6029)

### 3. Eliminación de la función 'Connection'
La función Connection fue descartada al no ser necesaria para el funcionamiento del sistema.

### 4. Implementación de Drop de imágenes
Se incorporó la posibilidad de arrastrar imágenes directamente al lienzo usando una funcionalidad de drop area.

![drop_area](https://github.com/user-attachments/assets/f88eec59-f6ef-4e85-8424-fe0a88e185ca)

### 5. Se añadió la funcionalidad CANVASTEXT para mostrar instrucciones específicas a los usuarios durante la experiencia.
Los mensajes incluyen instrucciones como “ARRASTRA TU IMAGEN (PNG) O PEGA UNA URL (JPG)” y mensajes de error como “ERROR: URL NO VÁLIDA O NO ES UNA IMAGEN”. Estos textos fueron redondeados y se les añadió un contorno para mayor visibilidad.

![error_imagen](https://github.com/user-attachments/assets/fc36776b-4821-47f5-8a56-aca0a16e45cd)

![arrastra](https://github.com/user-attachments/assets/83a5cf8b-53e0-4fb2-bf93-dac46b8ecac5)


### 6. Opción de añadir imagen por URL + Botón de carga + Reseteo de la barra
Se añadió una opción que permite a los usuarios cargar imágenes mediante una URL, ofreciendo más flexibilidad. El usuario puede pegar la dirección de una imagen y cargarla directamente en el lienzo. Además, se implementó un botón de carga y una barra de progreso que se resetea automáticamente tras su carga.



### 7. Control del tamaño de la imagen con slider
Se añadió un slider que permite ajustar manualmente el tamaño de la imagen para mayor control en la visualización.

![SLIDER](https://github.com/user-attachments/assets/3cc19c59-295f-48ff-8034-f99102e4d61e)

### 8. Opción de corregir manualmente los ejes de la imagen 
En caso de que el reconocimiento falle, se proporcionó la opción de corregir manualmente las coordenadas de los ejes de la imagen.

### 9. Opción botón para reiniciar los valores de los Slider
Se incorporó un botón que permite reiniciar los valores de los sliders a su estado original.

### 10. Repertorio de imágenes PNG para probar el código
Se añadió un conjunto de imágenes PNG que se pueden usar para probar el funcionamiento del código.

![Recurso 10](https://github.com/user-attachments/assets/d048197e-cd6b-4d38-8e3d-719741b15520)



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

 
 ## Fallos
 ![Recurso 12](https://github.com/user-attachments/assets/3a6492dd-24a8-424c-bd4f-f84d24c141b6)


## Edición final
https://editor.p5js.org/cottito/sketches/wx6DdNEEf
https://editor.p5js.org/Dielox-X9/sketches/2MBaw99f1



```md
mi equipo de trabajo es <https://github.com/cottito> y <<https://github.com/Dielox-X9>>, entregamos en el repositorio en este enlace <https://github.com/disenoUChile/audiv027-2024-1/estudiantes/NOMBRE/clase-06>.
```
