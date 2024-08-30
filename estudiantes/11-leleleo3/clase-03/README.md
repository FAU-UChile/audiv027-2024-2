# clase 3

Comenzamos la clase intentando recordar cuál fue la última persona de la que hablamos la clase pasada, que es de quien hablaremos hoy.

Luego de problemas de conexión por un cable desconectado, partimos.

Un asco Safari.

## Maya Man

Artista. Una pionera desde la divulgación y el uso de inteligencia artiificial en ámbitos en vivo, como la actuación.

ml5 playful examples.

Link al que cuesta llegar. Contiene ejemplos de obras de Andreas.

Medium, página web que permite bloggear. From Simple to Advanced, explicación o guía para el uso de esta herramienta en instalaciones y similares.

Los softwares no son herramientas estáticas, sino que unas que están en constante movimiento.

Aprenderemos por qué los trabajos ya no funcionan y cómo repararlos.

Corrección sobre dato de P5. Cassie no lo creó, creó una herramienta para trabajarlo y editarlo, a la vez que permite ver la preview y encontrar errores. La consola normalmente está oculta, mas aquí la vemos pues es un entorno de programación.

Vimos "Face Collage" de Andreas, cómo este reconoce las imágenes y destaca zonas de mayor atención al cargar el modelo.

Se pueden tomar versiones de código ya hechas y editarlas por este mismo medio.

## html

La base de una página web.

head - posición del contenido.

body - es lo único que realmente se ve.

script - base de código

java.script - es lo que aprenderemos, que toma una página estática y la convierte en algo funcional, muy usado hoy en día. Permite hacer comportamientos variables. "Cuando pase esto, pasará esto." Puede pasar todo el tiempo o simplemente en situaciones específicas.

En vez de programar de la nada, usaremos p5, que facilitará el trabajo a la hora de programar. Dentro de una línea pequeña de código, se contienen líneas y líneas de la biblioteca de p5.

Los primeros scripts van a un lugar y bajan un archivo, mientras que en la línea 11, en vez de ir a una dirección web, carga un archivo. Loading model...

Tenderemos a programar en sketch.js, que es llamado por medio de script para cargar el modelo.

Todo es SOLO texto. Los colores son una herramienta del editor para hacer más claro el proceso.

setup - Lo que siempre tiene que haber, que son las condiciones iniciales. Ahí se señala todo lo que va a pasar, funcionando como un lienzo.

preload - Para evitar que el computador colapse al buscar un código que no carga, se agrega esta función que toma lugar antes del setup, permitiéndole cargar todo lo necesario antes de empezar con lo siguiente.

console.log - Una manera de saber si está funcionando todo bien es escribir mensajes y ver que no se altere el producto final. Así es como se pueden dejar mensajes en la misma consola (Chainmail Chasers)

cloudflare - Detecta ataques y actividad inusual en sitios de la web.

let - Palabra clave para decir variable y pedirle al computador una pequeña parcela o lugar con un cierto valor en su memoria.

let n = 3 , es lo que le otorga un valor a n.

n (izquierda) es el lugar, el tres (derecha) es el valor

Luego vimos "Mr. Bean regresion", donde lanza error debido a que ml5. featureExtractor, que fue sacado de la nueva versión, no es una función.

Se toma la dirección de la versión anterior [https://unpkg.com/ml5@0.5.0/dist/ml5.min.js], para forzar al modelo a usar la versión en la que es funcional. Esta se pone en index, línea 8.

Se borra la línea 7. Se cambia la última versión por la 0.5.0, o sea la de Face Collage.

Ahora que funciona, se entrena al modelo con imágenes de ejemplo, para que comience a predecir y mueva la imagen en base al reconocimiento de la imágen en la webcam.

command + f - Buscar palabras en el código.

Buscamos la palabra save y la cambiamos por #grabar.

Media archeology - Restauración de medios.

Nam June Paik
### Volvemos a Maya Man

UCLA - Universidad de California. Departamento de Artes Mediales y Diseño

Usaba mucha inteligencia artificial. Trabajó en el Google Creative Lab. Mezcla de alta computación con diseño y perspectivas de género.

Google Creative Lab - Lugar de experimentación donde se busca a personas de campos artísticos que sepan programar para desarrollar proyectos que posteriormente puedan ser recogidos por Google.

"PoseNet sketchbook"

Colección de experimentos web interactivos de fuente abierta, que se adentran en la relación entre movimiento y máquina.

TensorFLow, herramienta de Google, tiene su forma core / js. / lite - Dependiendo de la complejidad del proyecto, se decidirá cuál utilizar.

PoseNet <3 - Irene Alvarado, Carolina Pino

Maya Man toma esto y lo lleva a su proyecto, experimentando con la herramienta.

Teachable Machine

Maya Man, Andreas y más personajes mencionades trabajaron para generarla.

Permite enseñarle ejemplos a la máquina y exportar los modelos a distintas herramientas.

Gran parte de los problemas de la inteligencia artificial es que la base de datos es un problema. Se necesita ser capaz de hacerle qué hacer. En el caso de la Teachable Machine, la base de datos se crea en el momento.

John Cage,

"Silence: Lectures and Writings"
"4'33""
p5 da opciones para duplicar los archivos de forma de que no se fusionen, bajarlos y también cambiar las vistas al programar. Es para trabajos gráficos y da opciones como tal.

Con // dos slash, se le indica al computador que lo siguiente es un comentario, no para que lo lea. Así se documenta el proceso, es la documentación que se espera de nosotres y la que deberíamos esperar. En otras palabras, buenos modales.

O sea, en comentarios en comentarios se explica el funcionamiento esperado del código construido, ejemplo:

// createCanvas () hace un lienzo

// tiene 2 parámetros, ancho y altura

// se mide en píxeles.

createCanvas (-, -)

noStroke() - No dibujes el borde. Si no le decimos nada a p5, por default pondrá el borde negro y el relleno blanco.

fill() - Relleno de la figura.

fill(random(255), random(255), random(255)) - Si le agregamos random, se vuelve aleatorio.

Si cambiamos el background a setup, la elipse se compierte en un pincel.

## Tarea

En base a p5.js Reference Tutorials Examples, hacer experimentos con p5 y subir el link o un pantallazo de estos a nuestros apuntes.

1. Sonic magico
https://editor.p5js.org/leleleo3/sketches/STqn3Osa0

Frankenstein de varias referencias y tutoriales de formas, edición de cursor, desplazamiento y edición de texto.

2. Sonic magico saltarin y bailarin
https://editor.p5js.org/leleleo3/sketches/Yqm3NRBhD

Andrés me ayudó a revolver cómo convertir el movimiento de los rectángulos en un loop, que era lo que no sabía hacer. Me explicó que agregando " %width let ", se dividiía por el espacio y calculaba cuánto quedaba hasta que el retcángulo llegara (algo así, im dumb), lo que finalmente permite que el movimiento se repita. let x = frameCount* 15 %width;

3. Triangulos volados
https://editor.p5js.org/leleleo3/sketches/GeI2A41ze

Lo realicé en base al ejemplo del cuadrado de la clase anterior, cambiando la forma y la dinámica del cursor.

4. Cubo girando
https://editor.p5js.org/leleleo3/sketches/1KHOSBuv-

Tomé este ejemplo de la página de referencias y tutoriales para entender mejor como funcionaban las formas 3d. Solo cambié el color y el tamaño de la forma y el canvas.

