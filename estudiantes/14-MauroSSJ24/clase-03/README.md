# clase
Faltante de clase 2.0:
ml5 playful examples, Andreas Refsgaard, año 2020_ ir a https://editor.p5js.org/AndreasRef/sketches/3dDj1e28Z
ejemplo de editor p5_hacerse una cuanta para trabjar en el_

Computer vision_se usa para identificar a personas u objetos en fotografias y organizarlos en funcionn de esa identificacion.
Ejemplo de codigo:_
<html>
<head>
  <meta charset="UTF-8">
  <title>FaceApi Landmarks Demo</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.0/p5.min.js"></script>
  <script src="https://unpkg.com/ml5@0.5.0/dist/ml5.min.js" type="text/javascript"></script>
(van a lugar a descargar o bajar un archivo, 
</head>
<body>
  <script src="sketch.js"></script>
(Carga el archivo nombrado en el script)
  <p id="modelStatus">Loading model...</p>
</body>
</html>
si con <> Empieza y luego si es el mismo <> Es que termina el codigo.
javascript (cuando pasa esto, puede pasar aqullo, algo así)
Los codigos que haremo sera aprender el ml5 siempre debe habber un setup() para comenzar. 
preload=pre cargar_ carga y cuando las cargues luego empieza a hacer otras cosas. prepara todos los materiales antes de seguir con el codigo.
console.log = para imprimir algo en la consola. Poner cosas en la consola.
let una variable, un lugar en el computador _ el = separa lo de la izquierda con lo de la derecha_
let n = 3; _ hay un lugar en el computador y ese n tiene un valor y ese valor es igual a 3_Las variables sonlugares en la memoria el cual tiene un valor adentro_
Cada espacios importa, cada coma, cada letra, todo importa. 

Media Archaeology
Nam June Paik_pionero en videoarte_ 

wake word_la palabra que hace que despierte_ejemplo: alexa_ 

UCLA_artes mediales y diseños_
Maya Man_ella hace obras que mezcla muy alta computacion con diseño, muchas veces con vista de genero. Un gran proyecto que tiene es posenet 
google creative lab (lugar de experimentacion) 
https://googlecreativelab.github.io/posenet-sketchbook/_Ejemplos para probar con una webcam
Irene alvarado Tensor Flow_

Carolina Pino_ investigadora de la adolfo ibañez, soluciones especializada para gente con problemas motores o discapacidades_ 

Investigar la interfaz y la estrategia de la herramienta_ Teachable Machine_ (producto de google)
Investigarlo con modelos_entenderlo y entrenarlo
buscar y practicar como funciona esa interfaz como herramienta_de pixeles_
pensar en el trabajo en donde la maquina nos dira como hacerlo pasito a pasito_

Jonh Cage_ Silence: Lectures and Writings_ Libro_obra John Cage 4´33"_

Lo del setup significa que ocurre una vez al principio_

p5 nos impone cosas, pero nos da otras cosas mas_ml5 es un tributo a p5_ 
Dos // es para que el computador lo identifique coo algo mio, no algo que deba hacer_ es como agregar un comentario_el tipo de 
antes de cada linea de codigo que este el comentario de lo que hace_
noStroke(); no bordes
Fill(); es rellenar

encargo_experimentar en el p5, y subir a los apuntes_ explorar y ejercitar sobre la herramienta p5. 

ejemplo hecho:
// 2024_agosto en la fau


//un circulo que siga al raton
//de colore aleatorios


function setup() {
//create Canvas() hace un lienzo
//tiene 2 parámetros ancho y altura
//se mide en pixeles
  createCanvas(400, 400);
 noStroke(); 

}

function draw() {
  background(255,0,255);
  fill(random(0),random(255), random(255));
  ellipse(mouseX, mouseY, 100, 100);
}

OTRO EJEMPLO DE LO QUE SE HACE
// 2024_agosto en la fau


//un circulo que siga al raton
//de colore aleatorios


function setup() {
//create Canvas() hace un lienzo
//tiene 2 parámetros ancho y altura
//se mide en pixeles
  createCanvas(windowWidth, windowHeight);
 noStroke(); 
 background(255,0,255);
  noCursor();
}

function draw() {
 
  //fill(random(0),random(255), random(255));
  ellipse(mouseX, mouseY, 100, 100);
}

function mouseClicked() {
   fill(random(0),random(255), random(255));
}


