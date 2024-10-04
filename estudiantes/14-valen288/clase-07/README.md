# clase
## instrucciones de trabajo de mitad de semestre

- se empieza hoy
- se entrega el próximo viernes 04 octubre hasta las 2:00pm, vía GitHub, en tu fork.
- si hay un commit posterior, no se tomará en cuenta
- el proyecto es en grupos de 2 o 3 personas
- el proyecto se hace con la tecnología que ustedes quieran:
- el proyecto se presenta en clases, mostrando los contenidos de la entrega en GitHub
- el proyecto es sobre lo que hemos visto en clases, posibles formatos:
  - proyecto de inteligencia artificial hecho con p5.js, ml5.js, Wekinator, Teachable Machine, etc.:
  - proyecto de inteligencia artificial hecho a partir de GitHub, Google Colab, etc:
  - investigación sobre bases de datos:
  - tutoriales sobre herramientas hechas en clases:
  - adaptación de ejemplos vistos en clases:

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
## PROYECTO
Equipo:

-Javier Burgos

-Nicolás Lagos

-Valentina Soto 

## INTRODUCCIÓN

El proyecto se centra en la programación de un código que utiliza inteligencia artificial para detectar diferentes colores—rojo, amarillo y azul—mediante una cámara. Para ello, se partió de un código existente en P5.js que controla una figura en movimiento (consultar imagen adjunta). A este código se le integró un modelo de entrenamiento en Teachable Machine, donde se configuraron los colores mencionados. Una vez que la máquina detecta estos colores, la imagen de fondo se sincroniza y los puntos cambian de color de manera acorde.

## PROCESO

1. Código: Proceso de unir diferentes códigos

https://editor.p5js.org/p5/sketches/Interaction:_Wavemaker
![image](https://github.com/user-attachments/assets/b0231cda-63b4-4d42-9e1b-690508b31ed8)

REFERENCIAS:
https://p5js.org/reference/#Color - https://p5js.org/reference/p5/fill/

https://editor.p5js.org/ml5/sketches/HUm7NYMW3

https://editor.p5js.org/ach549@nyu.edu/sketches/S1u1JKeT7 - WORKING

https://editor.p5js.org/kylemcdonald/sketches/Sy2LCUqnX - NOT WORKING

https://editor.p5js.org/jeffThompson/sketches/30YhUmgVU

https://editor.p5js.org/jibbx/sketches/6i3HbDy2a

2. Entrenamiento:  teachable machine

   
PASO 1: Se seleccionan papeles con los colores primarios como muestra de color.
![IMG_8903 (1)](https://github.com/user-attachments/assets/396b370f-1626-4777-99eb-76396a0520a6)

PASO 2: Luego se realizan paletas de colores digitales en ilustrator para subirlo a la plataforma teachable machine y tener una mayor gama de tonos. 

![IMG_8906](https://github.com/user-attachments/assets/9a916dfa-3603-4100-b9eb-3103ca88d8c0)

PASO 3: Se suben los archivos recopilados y parte el entrenamiento. 

![IMG_8904](https://github.com/user-attachments/assets/d0ecc220-bf7f-436a-9805-e84e7349f0fb)

  


4. Programación:

// Variable (Iniciamos con ese valor: Screen1)
var mode = 1;

// Classifier Variable
let classifier;

// Model URL
let imageModelURL = "./my_model/";

// Variable de tiempo
let t = 0;

// Asignamos colores para cada etiqueta (label)
let colors = {
  ROJO: "red",
  AMARILLO: "yellow",
  AZUL: "blue",
};

// Declaramos variable label
let label = "";

// let space = {
//  'ROJO': 15,
//  'AMARILLO': 20,
//  'AZUL': 25,
//};

// Agregar Video
let video;
let flippedVideo;

// Cargamos el modelo entrenado en Teachable Machine
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the video
  video = createCapture(VIDEO);
  video.size(windowWidth / 2, windowHeight / 2);
  video.hide();
  noStroke();

  // Comienza classifying
  classifyVideo();
}

function draw() {
  // Codigo que permite intercambiar entre dos modos (dos pantallas)
  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
  }

  // Codigo de lo que se muestra en screen1
  function screen1() {
    background(0);
    // Draw the video
    imageMode(CENTER);
    image(video, windowWidth / 2, windowHeight / 2);

    // Escribir label en pantalla (Nombre del color)
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text(label, windowWidth / 2, windowHeight / 3);
  }

  // Codigo de lo que se muestra en screen2
  function screen2() {
    background(0, 10); // translucent background (creates trails)

    // Determinar el color según la etiqueta
    let currentColor = colors[label] || "white"; // Color predeterminado a blanco si no hay etiqueta válida

    //   let currentCurve = space[label] || 15;

    // crear una grilla de círculos de x & y
    for (let x = 0; x <= width; x += 30) {
      for (let y = 0; y <= height; y += 30) {
        const xAngle = map(45, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(90, height, -4 * PI, 4 * PI, true);
        const angle = xAngle * (x / width) + yAngle * (y / height);

        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);

        // Cambiar el color de relleno
        fill(currentColor);

        // Dibujar círculo
        ellipse(myX, myY, 10);
      }
    }

    // Actualizar tiempo
    t += 0.01;
  }
}

// Recibir predicción para imagen de video
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

// Cuando recibimos resultado
function gotResult(error, results) {
  // Si hay un error
  if (error) {
    console.error(error);
    return;
  }
  // Resultados son ordenados por orden de confianza
  label = results[0].label;

  classifyVideo();
}

// Función para cambiar de pantallas al apretar el teclado
function keyPressed() {
  mode = mode + 1;
  if (mode == 2) {
    mode = 0;

5. Funcionamiento:

![a5194b40-22e7-42db-90fd-fa0069ec3534](https://github.com/user-attachments/assets/741534ed-cade-410e-a2d4-46a3629f58e8)

![8be80f3e-4b32-4ca5-aa2a-311370622bc0](https://github.com/user-attachments/assets/91c5b3d8-ee52-4edf-bba8-f8c1b340100a)

![9017f1c4-3036-44a7-a77b-b6e2f2c4183a](https://github.com/user-attachments/assets/6f719192-259f-4cac-a36e-09b2f8ab1a84)


   


## CONCLUSIÓN 

Durante el desarrollo del proyecto, identificamos una posible aplicación profesional muy interesante. Este sistema podría utilizarse de manera interactiva en eventos de moda, especialmente en pasarelas. La idea es que la máquina detecte los colores de las prendas que llevan los modelos y, en tiempo real, estos colores se proyecten en las visuales del evento. 

Por otro lado se podría experimentar con el sonido haciendo que por ejemplo una canción se represente como imagen stereo para acompañar este tipo de eventos.

