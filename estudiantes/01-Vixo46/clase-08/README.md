# Malgenio Hater v.1

*Trabajo realizado por Vicente Barros <https://github.com/Vixo46> y Marcela Osorio <https://github.com/marcegato>*

-----------------------

Link del proyecto (Por terminar) : https://editor.p5js.org/Vixo46/sketches/f47FVRQ3O

-----------------------

### Herramientas utlizadas

P5.js editor web
Teachable Machine
ml5.js 1.10.0

-----------------------

### Introducción

"Malgenio Hater" es un proyecto en el cual a traves de analizar imagenes entrenadas con la webcam, te dirá frases de mal gusto. Dentro de los elementos que sabe identificar son los basicos de estudio como libros y lentes, ademas de otros varios como botellas, celulares, etc. A continuacion, se explicaran las inspiraciones y trabajos ya existentes en los que nos basamos, los pasos que seguimos, como lograr que funcionará, errores que tuvimos y termineramos concluyendo que aprendimos en este primer proyecto.


### Inspiración 

Basicamente, nuestro trabajo se basa en una clase que se tuvo para este ramo, donde el profesor Aaron Montoya y su ayudante Vicky nos mostraron mas en detalle la plataforma de Teachable Machine, donde escaneamos tres elementos: nuestra cara, la webcam sin nosotros y otra con la webcam tapada. con los resultados postyeriores, y  el codigo entregado por la pagina, pasamos los archivos a p5.js. el trabajo finalizó con un codigo capaz de detectar los tres elementos escaneados.

``` link del trabajo realizado en p5.js hecho por Vicente Barros: https://editor.p5js.org/Vixo46/sketches/Y4k34F0Lo ```

![foto_p5](https://github.com/user-attachments/assets/7fe3e1a6-f3f3-4bc9-9188-5b38765a477e)


### Desarrollo del proyecto

Luego de decidirnos, nos lanzamos a tomar fotos con Teachable Machine, como primer instancia, entrenamos el codigo con 11 modelos. los cuales son:

- Tres libros diferentes.
- Fotos con nuestras caras con lentes.
- Fotos sin lentes.
- Una botella.
- Un encendedor.
- Un celular.
- Webcam en negro.
- Imagenes sin nosotros.

luego de preparar el modelo, y una vez listo el proceso, copiamos el codigo desde TensorFlow.js para p5.js, y descargamos el archivo comprimido del modelo.

![pantalla_de_descarga](https://github.com/user-attachments/assets/463b916d-da1c-48d1-a527-ca453354d884)

Al copiar estas lineas de codigos y descargar el modelo, nos fuimos a p5 para desarrollar nuestro proyecto. copiamos la siguiente linea para el apartado de "sketch.js":

``` // Classifier Variable
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
    createCanvas(500, 400);
    //Create the video
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    //flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(video, 0, 0);

    // Draw the label
    fill(255);
    textSize(26);
    textAlign(CENTER);
    text(label, 500 / 2, 400 - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
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

```

Luego, copiamos el siguiente codigo para el apartado de "index.html":

```<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.js"></script>
    <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

<!--inicio teachable machine-->
    
    <div>Teachable Machine Image Model - p5.js and ml5.js</div>

<!--fin teachable machine-->    

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>
```
y para terminar, se debe crear una carpeta llamada "my_model" para importar el modelo entrenado. en "metadata.json" se pueden editar los textos de las imagenes escaneadas por la plataforma.

Cabe aclarar que el codigo fue modificado desde el trabajo mencionado anteriormente en el cual nos inspiramos, ya que los cambios como por ejemplo, cambiar la version de ml5 a la anteioer (1.10.0), fueron modificaciones enseñadas por el profesor para un funcionamiento adecuado.

### errores que surguieron

### Conclusiones

Destacamos como primer entrega de un modelo entrenados por nosotros mismos, que nos sirvió para reforzar el contenido ya visto en clases. nos pareció interesnate ir mezclando distintas herramientas para llegar a un resultado en conjunto. mejoramos en como se escriben adecuadamente los codigos (respetar mayusculas, guiones, etc) y estamos satisfechos con el resultado.





