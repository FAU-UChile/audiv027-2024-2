# clase 5

Comenzamos viendo el trabajo de Gabriel, representante de la FAU. Nos describe una realidad virtual del metro de Santiago, dándonos la oportunidad de experimentar su proyecto en persona. Menciona la idea de hacer una experiencia más ligada a una historia en la que vayas explorando los túneles y descubriendo easter eggs. Se usan los controles del stick para moverse dentro del entorno virtual sin necesidad de hacerlo en la vida real. Está hecho con herramientas open source.

Instagram: @metrosantiagosim

Estudió las estaciones milimétricamente, desde su gráfica a dinámica, en base a fotografías y planos. Escogió Neptuno para esto, pues es una estación sumamente urbanizada en un lado, mientras que en el otro es puro túnel. Lo hizo con Blender.

---

Al finalizar este espacio, le profe nos comenta que hubo un cambio importante en la plataforma de ml5 durante la semana. Se agregó un texto a la página inicial aclarando los cambios al sitio y refiriendo a la sección de FAQ, donde las personas pueden ir para guiarse ante errores repetitivos.

Semantic versioning - 6.5.12 (major, minor, patch), manera en la que se publican los softwares. El patch cambia constantemente, funcionando como parche de errores, mientras que agregar funciones nuevas cambiaría el minor (cambio menor, que tiende a hacer cosas que no se rompem). Cuando cambia el primer número, major, tiende a haber muchos más problemas por lo drástico de los cambios.

Versión 0 -> Está recién empezando

Versión 1 -> Está mucho más maduro y desarrollado

De ahora en adelante, es necesario agregar la versión del software que estamos usando, pues el nombre por sí solo no dice mucho. 

> index

Todos los softwares que se comportan con buenos modales tienden a decir su versión, esconciendo a veces los dos últimos números, pero nunca el primero, que es el que más habla de la evolución del software.

LTS -> Long Term Support, promesa en la que se comprementen a hacerlo funcionar durante un tiempo. Funciona un día, y se estará parchando constantemente, generando una suerte de convivencia entre distintas versiones del software.

RaspberryPi 5 - Busca que todes tengan sus computadores, en un tamañao y precios accesibles during their first years. Se usa mucho en el ámbito del arte, para hacer oobfras. 

Compute model - Un computador pensado sobre el hecho de que estaba pensado para no ser usado por humanos, sino que máquinas.

Microcontrolador - controlador chiquito. Barato n

Obsolescence Statement.

Tener especial cuidado de documentar well los pasos que tomamos.

Photoboard - opción más accesible y barata.

Es muy distinta la computación a un computador. La inteligencia artificial uno la puede poner en un computador, y también en un microcontrolador.

Se preguntó cuál es nuestra definición de inteligencia artificial, donde algunes compañeres compartieron sus percepciones sobre ello. En este caso, la característica que más se destacó fue la capacidad de aprender en base a la base de datos disponible.

> Red neuronal (NN) 
> Red Neuronal Recurrente (RNN). Es importante la reclusión, no es simplemente un aprendizaje lineal, sino que tiene un valor gigante la recurrencia y el pasado. Esta es una de las maneras para generar texto.

Reddit es un infierno.

Vamos a entender un modelo para generar texto.

### char-rnn

Código que implemente una RNN para entrenar generación de texto. A través de su compresión de cómo funciona el texto, generará cosas parecidas. Disponible en Github.

(Hablamos de las licencias en el código y la responsabilidad que viene con ella. Aquí, se usa el recurso de afirmar que cualquier cosa que le pase al código que subió otra persona una vez lo uses, es tu error.)

* Ejemplo de buenos modales a seguir en nuestros propios trabajos.

Los modelos de inteligencia artificial son paramétricos. O sea, tienen ciertas variables que pueden ir variando. 

> Hyperparameters

Esta es una máquina de balbucear idiomas, mas primero hay que enseñarle uno.

La primera piedra de tope tiende a ser la base de datos, al necesitar una gran cantidad de texto para llegar al mínimo necesario para entrenarlo (2MG).

Se menciona a Cristóbal nuevamente, quien se vio en la tarea de buscar una manera de suavizar el acceso a herramientas como estas.

> Project gutenberg. Buscamos libros que estén en el formato UTF-8, 8-bit Unicode Transformation Format. Representa todo caracter any coded, incluyendo ASCII.

Se nos compartió un link de colab (https://colab.research.google.com/github/FAU-UChile/audiv027-2024-2/blob/main/2024_2_audiv027_char_rnn_quijote.ipynb), en el que iniciamos sesión con Google y comenzaremos a trabajar. Notebook interactivo en Python.

Python - Un lenguaje potente, muy robusto. El segundo mejor lenguaje para hacer algo. Si necesitas un lenguaje específico para hacer algo, en Python también se puede. Es un lenguaje mucho más sencillo de escribir y usar.

> Pygame.org - Uso en videojuegos.

Al azar inicio en Google, se permite grabar o guardar una copia desde el Drive personal para tener acceso al archivo.

Al presionar Connect, pedimos prestado un computador lejano que tendrá características similares para todes independiente de nuestros computadores, netamente por el tiempo y lugar.

Fuimos a editar > borramos los resultados > entramos a archivos > luego a sample data.

Presionamos el botón play, esto permite descargar el tutorial disponible en github dentro del mismo archivo.

(#) - comentarios en Python
cd -> click en una carpeta, cambiar de directorio

La información viaja a través de cañerías de fibras de vibra.

* Entrenaron tiburones para destruirlas (buscar)

pip - Lenguaje instalador de paquetes (bibliotecas) de Python.

tensorflow - ES una biblioteca de Python creada por Google.

wget - Comando para bajar algo.
