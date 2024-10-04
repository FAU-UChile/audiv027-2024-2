# Malgenio Hater v.1

*Trabajo realizado por Vicente Barros <https://github.com/Vixo46> y Marcela Osorio <https://github.com/marcegato>*

-----------------------

Link del proyecto (Por terminar) : https://editor.p5js.org/Vixo46/sketches/d0EFStXtg

-----------------------

### Herramientas utlizadas

P5.js editor web
Teachable Machine
ml5.js 1.10.0
Webcam

-----------------------

### Introducción

"Malgenio Hater" es un proyecto universitario del ramo "Inteligencia Artificial" de la Universidad de Chile, en el cual a traves de analizar imagenes entrenadas con la webcam en Teachable Machine, te dirá frases de mal gusto. Dentro de los elementos que sabe identificar son los basicos de estudio como libros y lentes, ademas de otros varios como botellas, celulares, etc. El proposito de este proyecto es meramente parodico y de humor, no buscamos ofender ni trasgedir a las personas que lleguen a usar a Malgenio. A continuacion, se explicaran las inspiraciones y trabajos ya existentes en los que nos basamos, los pasos que seguimos, como lograr que funcionará, errores que tuvimos y termineramos concluyendo que aprendimos en este primer proyecto.


### Inspiración 

Nuestro trabajo se basa en una clase que se tuvo para este ramo, especificamente la clase 06, donde el profesor Aaron Montoya junto a su su ayudante Victoria Claveria, nos mostraron mas en detalle la plataforma de Teachable Machine, donde escaneamos tres elementos: nuestra cara, la webcam sin nosotros y otra con la webcam tapada. con los resultados postyeriores, y  el codigo entregado por la pagina, pasamos los archivos a p5.js. el trabajo finalizó con un codigo capaz de detectar los tres elementos escaneados.

``` link del trabajo realizado en p5.js hecho por Vicente Barros: https://editor.p5js.org/Vixo46/sketches/Y4k34F0Lo ```

![foto_p5](https://github.com/user-attachments/assets/7fe3e1a6-f3f3-4bc9-9188-5b38765a477e)

Otra insiparcion es el bot de la pagina "character.ai" llamado "bad advice bot", el cual como su nombre indica, te da consejos malos de lo que quieres.

![badadvice_bot_foto](https://github.com/user-attachments/assets/f1323140-b56c-4daa-9ce8-1367378515ec)

### Desarrollo del proyecto

Luego de discutir que hacer como equipo, y guiandonos con el trabajo realizado anteriormente en clases (el cual nos inspiramos), dedicidimos crear un algoritmo humoristico que reaccionara a elementos caracteristicos universitario, de una manera bastante agria. Asi que al decidirnos, empezamos a tomarnos fotos en la plataforma de Teachable Machine. esto lo hicimos en la sala de computacion de la FAU, y fuimos improvisando con los objetos que teniamos y tenian nuestros compañeros. en un rato, entrenamos el codigo con 11 objetos:

- Tres libros diferentes.
- Fotos con nuestras caras con lentes.
- Fotos sin lentes.
- Una botella.
- Un encendedor.
- Un celular.
- Webcam en negro.
- Imagenes sin nosotros.
  
luego de que se preparara el modelo, y una vez listo el proceso, copiamos el codigo desde la ventana final. seleccionamos TensorFlow.js, luego para p5.js, y descargamos el archivo comprimido del modelo.

![pantalla_de_descarga](https://github.com/user-attachments/assets/463b916d-da1c-48d1-a527-ca453354d884)

Una vez descargado y guardado, copiamos el codigo que nos dio la pagina. separamos las lineas de codigo para dos apartados de p5, primero partimos con "sketch.js":

```
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
    createCanvas(500, 350);
    //Create the video
    video = createCapture(VIDEO);
    video.size(500, 350);
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
    textSize(30);
    textAlign(CENTER);
    text(label, 500 / 2, 350 - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Si los resultados contienen las etiquetas correctas
  if (results && results[0]) {
    label = results[0].label; // Mostrar la etiqueta
  } else {
    label = "Sin resultados"; // En caso de que no se obtenga nada
  }
  classifyVideo(); // Continuar clasificando
}



```

Luego, copiamos el siguiente codigo para el apartado de "index.html":

```
<!DOCTYPE html>
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

luego de copiar los codigos en sus respectivos lugares, creamos una carpeta llamada "my_model", donde guardariamos el contenido del archivo comprimido que descargamos desde Teachable Machine. El archivo "metadata.json" contiene los textos asociados a las fotos de los objetos, por lo cual, modificamos estos textos con las frases que queriamos.

![Captura de pantalla 2024-10-02 150232](https://github.com/user-attachments/assets/0fa0a2ee-7b60-4126-8142-ec6b05e8f494)


El codigo que pegamos tanto aqui y para nuestro proyecto, no es el mismo que nos dio la pagina de Teachable. este codigo fue modificado junto al prpfesor Aaron para la clase del entranemiento (clase 06). dentro de lo mas importante es el uso de ml5, la versión 1.10.0. basicamente cambia algunas lineas para la compatibilidad de video e imagen.

### errores que surguieron

Tuvimos muchos errores, pero por lo general, muchos de estos fueron por error de tipeo u orden de los codigos. una letra en mayuscula nos mandaba todo el trabajo a negro, o poner una linea donde debia, hacia que el p5 colapsara. tambien el uso de un  navegador compatible con p5, por ejemplo, mucho del trabajo previo fue realizado con el navegador Brave, pero al momento de probarlo, tiraba error de compatibilidad con elementos especificos o etc. asi que finalmente todo lo que era probar y cambiar, fue hecho con Google Chrome (navegador mas compatible con todo).

![error_1](https://github.com/user-attachments/assets/da363133-fb50-46e2-ae56-76a7752be6ce)
![error_2](https://github.com/user-attachments/assets/9b976221-b4ef-4042-9ff8-f9f68c138f6a)
![error_3](https://github.com/user-attachments/assets/bb27590f-18d5-4943-a666-2d56046612ef)
![error_4](https://github.com/user-attachments/assets/dab7348a-4726-423c-8adc-afe759d717bd)


### Conclusiones

Destacamos como primer entrega de un modelo entrenados por nosotros mismos, que nos sirvió para reforzar el contenido ya visto en clases. nos pareció interesnate ir mezclando distintas herramientas para llegar a un resultado en conjunto. mejoramos en como se escriben adecuadamente los codigos (respetar mayusculas, guiones, etc) y estamos satisfechos con el resultado.

Y para terminar nos gustaria concluir de este trabajo varias cosas. pensamos que talvez este trabajo es muy simple, debido a que no fue tanto esfuerzo desde cero, ya que ibamos copiando y pegando el codigo de un trabajo realizado anteriormente supervisado por el profesor, pero aun asi nos gusto y quedamos conforme como equipo haber realizado a Malgenio como primer trabajo. nos sirvio para nivelar nuestros conocimeintos y aprender un poco mas de estos programas. ademas de tanto fallar en cosas tan inpercebtibles como el tema de mayusculas y orden, gracias a eso tenemos mas en cuenta la escritura de codigos. siempre fijarse en el orden, las mayusculas, y que este todo bien escrito.

Muchas gracias por ver nuestro proyecto.

=)





