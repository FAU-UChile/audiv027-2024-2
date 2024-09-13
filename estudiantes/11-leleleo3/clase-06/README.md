# clase 6

Comenzamos hablando del calendario y las correcciones realizadas por le profe a este. Luego se usó issues para confirmar que los repositorios estén al día y para revisar versiones pasadas de este curso, que puedan ayudarnos a pensar el siguiente proyecto.

Estuvimos investigando los trabajos de estudiantes pasades como tarea.

Con mi compañera de trabajo, MacNCheese03, nos interesaron particularme los trabajos disponibles en los repositorios de CRISISCRAOZ y angebv00, que usan el reconocimiento facial.

### Trabajo de CRISISCRAOZ, Pabecy y abo1934, "Play FugazFace"

https://github.com/FAU-UChile/audiv027-2024-1/tree/main/estudiantes/04-angebv00/clase-06#clase-06

##### Herramientas:

- processing versión 4.3 ejecutado en el ordenador
   - Video Library for Processing 4 2.2.2
   - oscP5
   - OpenCV for Processing
- markdown para escribir la documentación de este archivo
- la base de datos desde la página de wekinator, de donde sacamos los siguientes Example code:
- Simple continuously-controlled particle system
- Face Tracking Processing version; tracks the x- and y- position and width of one face
- wekinator escrito por Rebecca Fiebrink y disponible en [http://www.wekinator.org/examples/]
- navegador Google Chrome
- utilizamos webcam HDFULL

### Trabajo de angebv00 y josefa52, "CatchCam"

https://github.com/FAU-UChile/audiv027-2024-1/tree/main/estudiantes/04-angebv00/clase-06#clase-06

##### Herramientas:

- Processing 4.3 ejecutado en el ordenador
   - Ocsp5
   - OpenCv processing
   - p5.js Mod
   - video library for processing 4
- Wekinator-2.1.0.4
- webcam
- videoInput Face Detection Processing disponible en [http://www.wekinator.org/examples/]

---

### Ideas en base a intereses personales

"ChainmailChasers", ARG.

![smiledog1 copy](https://github.com/user-attachments/assets/2882712a-1fd1-4e29-b373-f7862405a820)

![smiledog2](https://github.com/user-attachments/assets/11e46cf2-4393-4e01-8163-0720154065c6)

---

### Teachable machine

Veremos nuevamente cómo entrenar un modelo.

Nuevo proyecto
- Imagen
- Audio
- Posturas

#### Imagen

Haciendo uso de la webcam, se registran ejemplos de distintos estados de la imagen, para que la herramienta sea capaz de identificar qué está viendo según la base de datos otorgada.

Por sí solo, no es nada. -> Exportar modelo. 

- Tensorflow.js - Modelo que corre en Java.script
   - Javascript
   - p5
 
- Tensorflow - Modelo que corre en Python.

Escogemos Tensorflow.js para p5.

Nos genera un snippet del código que se puede abrir directamente en p5.js Web Editor.

Desde el comienzo, nos encontramos con anotaciones de color rojo en html <  >. Es necesario sacarlas para poder correr el modelo en p5.js Web Editor, pues es un lenguaje distinto que está pensado para aportar a versiones más antiguas de p5. La actual no las necesita.

<! -- inicio/fin teachable machine -- >, señala el inicio y final del código que acabamos de copiar.

Se borra la línea que llama a correr p5, siendo esta una acción que ya se había realizado.

La versión anterior a la actual en ml5 es la 0.12.2. Al encontrar una línea de código que llame a correr la última versión de ml5, se cambia por la versión anterior para evitar los errores que vienen con los cambios de la nueva versión.

Todo lo que queda del Teachable Machine se copia, borra y pega en sketch, teniendo cuidado de sacar las indicaciones de que inicia y acaba el script, que no es necesario al estar ya editando en p5.

Ahora, nos falta my_model, el modelo que hicimos en Teachable Machine.

Volviendo a la página de exportar.

Subir enlace | Descargar modelo

Descargar -> archivo comprimido -> descomprimir -> llevar a sketch, archivos, subir.

Quitar flippedvideo en caso de que no funcione la cámara.

### Tarea

https://editor.p5js.org/montoyamoraga/sketches/uG1sOH1QE

Hacer una copia de este modelo, hacer anotaciones y hacerlo correr. Al lograrlo, entrenar un modelo y hacerlo correr en el editor de p5.js

https://editor.p5js.org/leleleo3/sketches/3XM-D9T8c

* classifyVideo sigue generando problema.

Entrar al Github de Teachable Machine y buscar el problema de por qué no funciona con p5. Lograr cambio.
