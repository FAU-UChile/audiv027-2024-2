# clase 13: RESUMEN

## Primera Parte: 

- La siguiente clase que es en dos semanas (ya que la proxima semana es semana de trabajo autonomo) se debe tener creado ya un código, pero no hace falta que esté completo si no que en base a las primeras creaciones tener hechas preguntas para resolver en la clase.

- **La entrega final es para el 29 de Noviembre, se debe presentar**

- El software Nix ayuda a instalar bibliotecas de manera confiable, ya que el instalar bibliotecas es algo súper difícil y si se hace mal deja muchos archivos basuras en el almacenamiento.

- Tomamos un tiempo para responder dos preguntas: ¿Qué fue lo que más disfrutaste del curso? ¿Qué es lo mas complicado que en primera instancia parecia muy dificil, pero que logrsate resolver?

- Seymour Papert: Muchos softwares están influenciados por sus ideas, sus libros son tan famosos y buenos que siempre se lo roban al profe.

- Miitchell Resnik: Fue profesor del profesor Arron Montoya.

- Muchas maneras de contribui a P5, modificar código de Andreas para que funcione con los nuevos parámetros, Modificar Teachable Machine propiedad de Google.

---
# *BREAK*

## Segunda Parte:

- Componemos los grupos con Constantine Lobos, Leandro Méndez y Diego Castillo. Este grupo trabajará modificando el código exportado de Teachable Machine, para adapatarlo a una versión compatible para 2024 teniendo un tutorial en español, ya que el código actual está desactualizado y no deja exportar los archivos de manera sencilla a p5, esta moificación agilizará el proceso y simplificará los pasos a seguir de los usuarios.

- https://teachablemachine.withgoogle.com/
- https://github.com/googlecreativelab/teachablemachine-community
- https://github.com/googlecreativelab/teachablemachine-community/blob/master/snippets/markdown/image/tensorflowjs/p5js.md (Link de Código a modificar)
``` javascript
<div>Teachable Machine Image Model - p5.js and ml5.js</div>
<script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/addons/p5.dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ml5@latest/dist/ml5.min.js"></script>
<script type="text/javascript">
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = '{{URL}}';
  
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

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
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
</script>
```
- Como se ve en el código de GitHub las primeras 5 líneas son las utilizadas en P5:

``` javascript
<div>Teachable Machine Image Model - p5.js and ml5.js</div>
<script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/addons/p5.dom.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ml5@latest/dist/ml5.min.js"></script>
<script type="text/javascript">
```
- Nosotros debemos modificar la línea número 4 que dice:

``` javascript
<script src="https://cdn.jsdelivr.net/npm/ml5@latest/dist/ml5.min.js"></script>
```

- La cambiamos por:
``` javascript
<script src="https://cdn.jsdelivr.net/npm/ml5@0.12.2/dist/ml5.min.js"></script>
```
- Este cambio en el código permite la lectura y funcionamiento correcto.


# CIERRE DE CLASE
