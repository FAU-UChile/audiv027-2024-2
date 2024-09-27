# clase

Hoy hay que investigar_los proyectos anteriores.

Actividad:
_naveguen por los repos de este curso en sus otras versiones
en particular en los proyectos 1 y 2 de los estudiantes_

https://github.com/FAU-UChile/audiv027-2024-1
https://github.com/FAU-UChile/audiv027-2023-2

_incluir en sus apuntes datos sobre integrantes, githubs,
codigo, materiales, que version de que software usaron, que tecnologia usaron_

_Incluir qué tipo de proyecto quieren hacer_
_Qué herramientas ya saben_
_Qué herramientas quieren que veamos hoy en la segunda mitad_

_Revisando...
AUDIV027-2023-2
Entre la clase 06 y 07 estan los apuntes del primer trabajo grupal del curso.
1.- Me llamo la atencion el "pinta con handpose"
https://github.com/msvioletasr/audiv027-2023-2/tree/main/clases/clase-07/estudiantes/01100100i
Handpose y Drawing Patterns.
Material usado: p5 editor, ml5js, ml4a.net/ml5, chatgpt.
Material requerido: Una mano, camara.
*ml4a es una colección de herramientas y recursos educativos que aplican técnicas de aprendizaje automático a las artes y la creatividad. brinda opciones en donde las imagenes se utilizan para lograr acciones mediante una camara.


2.- Reconocimiento de voz
Integrantes: Violeta Silva, Fae Ávila y Kamila Mansilla
https://github.com/msvioletasr/audiv027-2023-2/tree/main/clases/clase-07/estudiantes/msvioletasr
Para crear este modelo usamos el tutorial sobre SoundClassification de learn.ml5js.org. Duplicamos y editamos el ejemplo incluido en esa página. Además, usamos el modo de audio de Teachable Machine para entrenar nuestro modelo.
-Computador o celular -Micrófono -Conexión a internet -Voz
En este proyecto se tomo en cuenta en primer lugar Shazam, ya que queríamos simular la identificación de música que logra hacer esta aplicación, y para esto queríamos usar Sound Classification, pero teniendo en cuenta la complejidad para programar algo así, decidimos tomar como referente diversos reconocimientos de voz, grabando nuestras propias voces.
Biometría de voz: Sistema de identificación Google usa inteligencia artificial para crear un modelo de voz



3.-Are you smiling yet?
https://github.com/FAU-UChile/audiv027-2023-2/tree/main/clases/clase-07/estudiantes/Anemix011
Basándonos en el modelo de Facemesh en siguiente arículo de koraboo para determinar parámetros que pudiésemos utilizar para que el programa decidiese otorgar cada arquetipo a la persona frente a la cámara.
*Emplea aprendizaje automático (ML) para inferir la superficie facial 3D , requiriendo solo una única entrada de cámara sin la necesidad de un sensor de profundidad dedicado
*Qué es un Koreaboo? - Quora. Prácticamente es una persona obsesionada con la cultura Coreana, al nivel que renuncian a sus propias costumbres y tradiciones para seguir a Corea.
Ingresamos a ml5, y accedimos a las referencias, y el modelo de Facemsh en el editor p5.js. Este modelo genera una malla de 486 puntos en base a determinados keypoints en el rostro de una persona enfrentada a la cámara web.
Se Verifico que funcionaba el modelo base, y luego determinaron los parámetros. Resultó muy díficil encontrar referencias sólo determinados keypoints. Se logra encontrar la malla base del modelo en el repositorio de Github.


4.- 





*Hacer click en los cambios detras_behind_ para solo quedar así, aparte de los 9cummints behind.
agregar en crear pull request_necesariamente ponerle un titulo y eso crea un pull request que es una propuesta de cambios que propongo como estudiante al administrador. 
(una vez aceotado por el admin) se cierra el pull request. así 

2da Parte_
Aprender a entrenar un proecto nuevo en teachable machine.

Exportar el algoritmo_exportar el modelo para usarlo en proyectos.
Fragmentos de codigo para usar el modelo: ya sea javascript o p5.js_este ultimo exportarlo ya que es mas conocido por mi.
No se puede copiar y pegar el codigo en el editor de p5
<> Eso es html 
Marcar el inicio y el final del codigo de p5 para tener claridad y no perderse. 
<div> lo que este dentro de eso lo veremos al hechar andar el codigo.
Los script iniciales y finales no son necesarios. 
TEner que subir el modelo en donde nos da un enlace_subirlo o exportarlo.

(+) La tabulacion y el orden, no solo de donde vive el codigo sino que de que año es. 
Un 7.0_meterse al repo de github. para que puedan hacer y tener al dia las instrucciones de p5.

En issues se grabo lo hecho en la clase, 
_por favor tomar este codigo base
y anotar en su README y en comentarios en el proyecto de p5,
grabenlo para que tengan una copia suya, los comentarios para explicar lo que acabamos de hacer
si eso lo logran, abran otro proyecto de teachable machine, entrenenlo, y hagan que corra en el editor de p5.js_
https://editor.p5js.org/montoyamoraga/sketches/uG1sOH1QE  

El codigo_ 
// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "./my_model/";

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  // flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(video, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, 320 / 2, 260 - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

README ANOTAR LO QUE ESTA PASANDO EN EL ENTRENAMIENTO DE LOS NUEVOS 

1) Meterse al teacheable machine_
Modelo de imagenes_en la opcion standar

2) Grabar muestras de imagenes para el entrenamiento de la maquina
son 3 opciones en los cuales se identifican 3 poses de superheroes de marvel

3) Pinchar en Preparar modelo
sin cambios ni opciones avanzadas

4) una vez entrenado y preparado exporatar el modelo_
Descargarlo (no subirlo) y los archivos que te deriven de la desacarga subirlos a p5

5) Ingresar los 3 archivos que descargamos: Creando una carpeta (folder) en "Sketch Files" con un nnombre p´ropio para en el subir los 3 archivos decargados de teachable machine del modelo ya entrenado. 

6)Luego de eso copiar el codigo p5.js entregado al quere exporatar el modelo dentro de "sketch.js" copiar desde:
// Classifier Variable hasta;
   classifyVideo();
  }

6) Luego en index.html copiar desde ml5 la version necesaria para que pueda encontar ml5 y pueda correr el codigo 
https://docs.ml5js.org/#/welcome/faq?id=what-happened-to-older-ml5js-releases
exactamente
<script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>

7)arreglar los errore poniendoles // para comentarios y asi lograr lo del "video", en linea 32 y 44 cambiar lo de //flippedVideo por solo video.





FINAL) codigo hecho por mi para tomar apuntes de como hacerlo: ya modificado y logrado.
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = './my_model/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(320, 260);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    // flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(video, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    //flippedVideo = ml5.flipImage(video)
    classifier.classify(video, gotResult);
    //flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }







ULTIM: TOIMAR ESAS PEQUEÑAS IDEAS Y DIVIDIRLAS EN PASOS QUE QUERAMOSHACER PARA PODER EXPLICARLO Y ASI TOMAR CODIGOS PREEXISTENTES PARA PODER LLEGAR AL MEJOR RESULTADO. 


