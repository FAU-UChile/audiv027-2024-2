# HOLA

La entrega y proceso de este trabajo está en la clase 08 en el perfil de mi compañero <https://github.com/Vixo46>

https://github.com/Vixo46/audiv027-2024-2/tree/main/estudiantes/01-Vixo46/clase-08

## Malgenio Hater v.1

*Trabajo realizado por Vicente Barros <https://github.com/Vixo46> y Marcela Osorio <https://github.com/marcegato>*

-----------------------

Link del proyecto (Por terminar) : https://editor.p5js.org/Vixo46/sketches/d0EFStXtg
Link presentación : youtu.be/t72EFZuoOXw?si=sQK9TyBm2u7ngYWd
-----------------------



### Herramientas utlizadas

P5.js editor web
Teachable Machine
ml5.js 1.10.0
Webcam

-----------------------

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

"Malgenio Hater" es un proyecto universitario del ramo "Inteligencia Artificial" de la Universidad de Chile, en el cual a travéd de analizar imágenes entrenadas con la webcam en Teachable Machine, te dirá frases de mal gusto. Dentro de los elementos que sabe identificar son los básicos de estudio como libros y lentes, además de otros varios como botellas, celulares, etc. El propósito de este proyecto es meramente paródico y de humor, no buscamos ofender ni trasgedir a las personas que lleguen a usar a Malgenio. A continuación, se explicarán las inspiraciones y trabajos ya existentes en los que nos basamos, los pasos que seguimos, como lograr que funcionará, errores que tuvimos y termineramos concluyendo que aprendimos en este primer proyecto.


### Inspiración 

Nuestro trabajo se basa en una clase que se tuvo para este ramo, específicamente la clase 06, donde el profesor Aaron Montoya junto a su ayudante Victoria Claveria, nos mostraron más en detalle la plataforma de Teachable Machine, donde escaneamos tres elementos: nuestra cara, la webcam sin nosotros y otra con la webcam tapada. con los resultados posteriores, y  el código entregado por la página, pasamos los archivos a p5.js. el trabajo finalizó con un código capaz de detectar los tres elementos escaneados.

``` link del trabajo realizado en p5.js hecho por Vicente Barros: https://editor.p5js.org/Vixo46/sketches/Y4k34F0Lo ```

![foto_p5](https://github.com/user-attachments/assets/7fe3e1a6-f3f3-4bc9-9188-5b38765a477e)

Otra insiparción es el bot de la página "character.ai" llamado "bad advice bot", el cual como su nombre indica, te da consejos malos de lo que quieres.

![badadvice_bot_foto](https://github.com/user-attachments/assets/f1323140-b56c-4daa-9ce8-1367378515ec)

### Desarrollo del proyecto

Luego de discutir que hacer como equipo, y guiándonos con el trabajo realizado anteriormente en clases (el cual nos inspiramos), dedicidimos crear un algoritmo humorístico que reaccionara a elementos característicos universitario, de una manera bastante agria. Así que al decidirnos, empezamos a tomarnos fotos en la plataforma de Teachable Machine. esto lo hicimos en la sala de computación de la FAU, y fuimos improvisando con los objetos que teníamos y tenían nuestros compañeros. en un rato, entrenamos el código con 11 objetos:

- Tres libros diferentes.
- Fotos con nuestras caras con lentes.
- Fotos sin lentes.
- Una botella.
- Un encendedor.
- Un celular.
- Webcam en negro.
- Imágenes sin nosotros.
  
luego de que se preparara el modelo, y una vez listo el proceso, copiamos el codigo desde la ventana final. seleccionamos TensorFlow.js, luego para p5.js, y descargamos el archivo comprimido del modelo.

![pantalla_de_descarga](https://github.com/user-attachments/assets/463b916d-da1c-48d1-a527-ca453354d884)

Una vez descargado y guardado, copiamos el código que nos dio la página. separamos las líneas de código para dos apartados de p5, primero partimos con "sketch.js":

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

Luego, copiamos el siguiente código para el apartado de "index.html":

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

luego de copiar los códigos en sus respectivos lugares, creamos una carpeta llamada "my_model", donde guardaríamos el contenido del archivo comprimido que descargamos desde Teachable Machine. El archivo "metadata.json" contiene los textos asociados a las fotos de los objetos, por lo cual, modificamos estos textos con las frases que queríamos.

![Captura de pantalla 2024-10-02 150232](https://github.com/user-attachments/assets/0fa0a2ee-7b60-4126-8142-ec6b05e8f494)


El código que pegamos tanto aquí y para nuestro proyecto, no es el mismo que nos dió la página de Teachable. Este código fue modificado junto al prpfesor Aaron para la clase del entrenamiento (clase 06). Dentro de lo más importante es el uso de ml5, la versión 1.10.0. basicamente cambia algunas líneas para la compatibilidad de video e imagen.

### Errores que surguieron

Tuvimos muchos errores, pero por lo general, muchos de estos fueron por error de tipeo u orden de los códigos. una letra en mayúscula nos mandaba todo el trabajo a negro, o poner una línea donde debía, hacía que el p5 colapsara. tambien el uso de un  navegador compatible con p5, por ejemplo, mucho del trabajo previo fue realizado con el navegador Brave, pero al momento de probarlo, tiraba error de compatibilidad con elementos específicos, etc. Así que finalmente todo lo que era probar y cambiar, fue hecho con Google Chrome (navegador más compatible con todo).

![error_1](https://github.com/user-attachments/assets/da363133-fb50-46e2-ae56-76a7752be6ce)
![error_2](https://github.com/user-attachments/assets/9b976221-b4ef-4042-9ff8-f9f68c138f6a)
![error_3](https://github.com/user-attachments/assets/bb27590f-18d5-4943-a666-2d56046612ef)
![error_4](https://github.com/user-attachments/assets/dab7348a-4726-423c-8adc-afe759d717bd)


### Conclusiones

Destacamos como primer entrega de un modelo entrenados por nosotros mismos, que nos sirvió para reforzar el contenido ya visto en clases. Nos pareció interesante ir mezclando distintas herramientas para llegar a un resultado en conjunto. Mejoramos en como se escriben adecuadamente los códigos (respetar mayúsculas, guiones, etc) y estamos satisfechos con el resultado.

Y para terminar nos gustaría concluir de este trabajo varias cosas. Pensamos que tal véz este trabajo es muy simple, debido a que no fue tanto esfuerzo desde cero, ya que íbamos copiando y pegando el código de un trabajo realizado anteriormente supervisado por el profesor, pero aun así nos gustó y quedamos conforme como equipo haber realizado a Malgenio como primer trabajo. Nos sirvió para nivelar nuestros conocimeintos y aprender un poco mas de estos programas. además de tanto fallar en cosas tan inpercebtibles como el tema de mayúsculas y orden, gracias a eso tenemos mas en cuenta la escritura de códigos. Siempre fijarse en el orden, las mayúsculas, y que este todo bien escrito.

Muchas gracias por ver nuestro proyecto.

=)





