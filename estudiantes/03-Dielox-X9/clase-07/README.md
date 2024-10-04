# clase
## Proceso de Trabajo
* Idea incial: se decidió trabajar con el modelo de FaceMesh, con la intención de usar esa malla para reemplazar el rostro con otra imagen
* Como idea, los rostros que se mostrarían encima de la grilla serían personajes de Breaking Bad 
* Con ayuda de tutoriales, pudimos colocar una base en el rostro, por ahora podemos trazar puntos en sectores del rostro de color negro (PUNTOS)
* Modelo WEBGL
  
![000](https://github.com/user-attachments/assets/1fec0acd-ffed-4970-9f9e-fa1c2ef9d9e4)

![002](https://github.com/user-attachments/assets/55dfa53a-dcb7-4d0b-be5e-a01b4b27c2d7)

## Desarrollo del código:

1. Modificación de valores originales para lograr superponer imagenes utilizando las coordenadas de los ojos y nariz de BodyPoses.
   
![Captura de pantalla 2024-10-04 132833](https://github.com/user-attachments/assets/218aeb10-07ae-48e5-94f2-70044681eef3)

2. Para hacer mas comoda la experiencia se optó por utilizar el código de Dropeo de imagenes, las cuales se actualizan automaticamente al momento de Arrastrar y dejar una nueva imagen.
   
![Captura de pantalla 2024-10-04 133225](https://github.com/user-attachments/assets/167f9866-4f71-4533-95e8-65da731cd664)
![Captura de pantalla 2024-10-04 133314](https://github.com/user-attachments/assets/1e534b3b-6b8c-4a56-a913-60c18e289350)
![Captura de pantalla 2024-10-04 132127](https://github.com/user-attachments/assets/5304ed28-fd94-4887-88f1-740f52e89136)

3. Además del Drop de imágenes de decidió añadir una barra en el que se puedan escribir enlaces URL de iamgenes en caso de querer utilizar el código en un dispositivo movil

![Captura de pantalla 2024-10-04 131956](https://github.com/user-attachments/assets/00f0fecf-3eb0-4e00-9a96-361d23f55bd0)
![Captura de pantalla 2024-10-04 131913](https://github.com/user-attachments/assets/eac3dea0-53ff-4379-801a-8443cb658feb)

5. Al ver el resultado se optó por añadir Sliders para personalizar las medidas de tamaño y posicionamiento de la imagen en el rostro, con sus respectivas etiquetas de identificación:
   
![Captura de pantalla 2024-10-04 131640](https://github.com/user-attachments/assets/007d074a-fc54-4c1a-b9fa-9773b5efe893)
![Captura de pantalla 2024-10-04 131847](https://github.com/user-attachments/assets/4f02486e-c801-416b-8a0d-0089391b4063)

6. Notas finales: El código reconoce el rostro de más de una persona capaz de asisgnarle la misma imagen.

 ![Captura de pantalla 2024-10-04 134817](https://github.com/user-attachments/assets/b64f75ec-8e26-4b85-86d6-b5a35d9d785a)
![Captura de pantalla 2024-10-04 134901](https://github.com/user-attachments/assets/9ac25115-3c64-4ebd-a7ea-22b2bf481440)

## BONUS

Se intentó crear un código que permitiera la superposición de dos imagenes, asignación una en el lado izquierdo de la pantalla y la otra en el lado derecho, finalmente esto no fue posible
![Captura de pantalla 2024-10-04 065702](https://github.com/user-attachments/assets/3896ad19-15bb-4675-ab7a-7c1960160fb5)
![Captura de pantalla 2024-10-04 060209](https://github.com/user-attachments/assets/13ef9249-76dd-44a1-9b5a-dbca70ff5dad)


## Adjunto código

https://editor.p5js.org/Dielox-X9/sketches/7ePb1opfI

Se agrega link a imagenes.png:

https://github.com/Dielox-X9/Pruebas

tambien link a url:

https://eltallerdehector.com/wp-content/uploads/2022/10/spiderman-png-free.png


* Buscar alguna forma de utilizar esa malla y colocar los rostros encima

## Links y Referentes encontrados 
* https://docs.ml5js.org/#/reference/facemesh
* https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection
* https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection/demos
* https://teachablemachine.withgoogle.com/train
* https://mit-cml.github.io/yrtoolkit/yr/tutorials/facemesh.html
* https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker?hl=es-419
* https://mediapipe-studio.webapps.google.com/demo/face_landmarker?hl=es-419
* https://www.youtube.com/watch?v=ZXK8eFi0yKs
* https://editor.p5js.org/p5/sketches
* https://p5js.org/reference/p5/createModel/


## Progreso de Trabajo
* https://editor.p5js.org/cottito/sketches/rOvRVM_xn
* https://editor.p5js.org/Dielox-X9/sketches/E5jqxzdb8
* https://editor.p5js.org/cottito/sketches/2psk2RI5L




## instrucciones de trabajo de mitad de semestre

- se empieza hoy!

- se entrega el próximo viernes hasta las 2:00pm, vía GitHub, en tu fork.
- si hay un commit posterior, no se tomará en cuenta
- el proyecto es en grupos de 2 o 3 personas![pruebas_caras01@2x-100](https://github.com/user-attachments/assets/83dbade8-f514-4dbd-b730-45c03bf7ced4)

- el proyecto se hace con la tecnología que ustedes quieran
- el proyecto se presenta en clases, mostrando los contenidos de la entrega en GitHub
- el proyecto es sobre lo que hemos visto en clases, posibles formatos:
  - proyecto de inteligencia artificial hecho con p5.js, ml5.js, Wekinator, Teachable Machine, etc.
  - proyecto de inteligencia artificial hecho a partir de GitHub, Google Colab, etc
  - investigación sobre bases de datos
  - tutoriales sobre herramientas hechas en clases
  - adaptación de ejemplos vistos en clases

## pauta

el trabajo tiene nota máxima 7.0, tienen 1 punto base más estos 6 puntos evaluados, 1 punto por cada uno:

1. 1 punto por aspectos formales: subir los archivos indicados en la carpeta correcta con los nombres correctos, sin errores de sintaxis, sin errores de ortografía y redacción
2. 1 punto por documentación textual en lenguaje MarkDown en tu archivo README.md sobre el funcionamiento de tu proyecto y tu investigación
3. 1 punto por documentación visual de tu proyecto, incluyendo imágenes, videos, capturas de pantalla y lo necesario para entender lo que hiciste.
4. 1 punto por incluir en tu documentación referentes y citas de papers, artistas, proyectos, repositorios en tu documentación
5. 1 punto por orden y comentarios del código
6. 1 punto por texto de conclusiones sobre tu trabajo e investigación

la pauta es:

- 1.0 si el aspecto está realizado impecablemente
- 0.7 si tiene errores menores
- 0.5 si está incompleto o tiene errores mayores
- 0.3 por el intento
- 0.0 por la ausencia

## requisitos formales de la entrega

- subir a tu carpeta de tu clase-07 tu proceso al final de la clase de hoy, y luego a la clase-08 tu entrega final, incluyendo TODOS tus archivos.
- variables y archivos sin espacios, en camelCase o notación camello.
- los comentarios se escriben en la línea de arriba del código
- los comentarios se escriben en español
- la entrega se puede concentrar en un README.md por equipo, siempre y cuando el resto del equipo incluya enlaces al perfil de ese colega, del estilo

```md
mi equipo de trabajo es <https://github.com/NOMBRE> y <<https://github.com/NOMBRE>>, entregamos en el repositorio en este enlace <https://github.com/disenoUChile/audiv027-2024-1/estudiantes/NOMBRE/clase-06>.
```
