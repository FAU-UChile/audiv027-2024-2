# Entrega proyecto 1 (04/10/24)

## Integrantes:

Macarena Torres

Leo Ovalle Flores

## Fecha

04/10/2024

## Whitehall y CREEPYPASTA ROAD

Como grupo de trabajo, decidimos centrarnos alrededor de nuestra pasión compartida por le mundo de los videojuegos e intentar desarrollar algo similar a uno con las herramientas disponibles en p5. De esta manera, fuimos capaces de generar dos iteraciones de nuestra idea, las que se traducen en dos códigos distintos, Whitehall y CREEPYPASTA ROAD.

## Materiales

Este trabajo lo hicimos con los siguientes materiales:

- p5.js Reference (https://p5js.org/reference/).
- p5.js en su versión 1.0.0 versión web (https://editor.p5js.org/) para Whitehall.
- p5.js en su versión 1.4.0 versión web (https://editor.p5js.org/) para CREEPYPASTA ROAD.
- Markdown para escribir la documentación de este archivo.
- Computadores MacBook Air y MacBook Pro.
- Uso de navegadores Chrome y Firefox.

## Código

## Whitehall

#### index.html

![Captura de Pantalla 2024-10-04 a la(s) 12 55 03](https://github.com/user-attachments/assets/021adafa-bb83-437f-bd2f-de03b7b047e7)

#### lavendertown.mp3

![Captura de Pantalla 2024-10-04 a la(s) 12 56 38](https://github.com/user-attachments/assets/00487f6e-0b62-49f7-b453-9624153c6b73)

#### p5.RoverCam.js

![Captura de Pantalla 2024-10-04 a la(s) 12 57 53](https://github.com/user-attachments/assets/abe1d4c6-e3b7-47de-8b17-ef0963512e79)

#### sketch.js

![Captura de Pantalla 2024-10-04 a la(s) 12 59 02](https://github.com/user-attachments/assets/3c0ae6df-8691-4a40-92df-8e975a78a6bf)

![Captura de Pantalla 2024-10-04 a la(s) 13 02 38](https://github.com/user-attachments/assets/d7f29eeb-1c77-4794-aa4b-17c101b533bc)

![Captura de Pantalla 2024-10-04 a la(s) 13 03 46](https://github.com/user-attachments/assets/31d300c1-4ad3-4d79-864a-791c68729e9a)

![Captura de Pantalla 2024-10-04 a la(s) 13 04 57](https://github.com/user-attachments/assets/c417cca0-970e-4bf7-9867-82971715c749)

#### style.css

![Captura de Pantalla 2024-10-04 a la(s) 13 06 38](https://github.com/user-attachments/assets/2e442480-63e7-4dbb-8e22-e24a3f43dfbc)

#### whitehall.mp4

![Captura de Pantalla 2024-10-04 a la(s) 13 07 24](https://github.com/user-attachments/assets/946cc87b-3b2b-4dcf-b9b1-7fd22b420810)

## CREEPYPASTA ROAD

#### bloodwall.png

![Captura de Pantalla 2024-10-04 a la(s) 13 08 01](https://github.com/user-attachments/assets/a6baf2ab-6603-45b3-b7cc-2f7f168872f8)

#### index.html

![Captura de Pantalla 2024-10-04 a la(s) 13 08 59](https://github.com/user-attachments/assets/43c0b868-dd2b-41a9-86ce-fcb99bb73db7)

#### ojo.js

![Captura de Pantalla 2024-10-04 a la(s) 13 09 48](https://github.com/user-attachments/assets/ca635d6b-39a6-4613-abea-7f69569672e0)

#### sketch.js

![Captura de Pantalla 2024-10-04 a la(s) 13 11 06](https://github.com/user-attachments/assets/3b369245-e5c9-4f0b-b0ab-0b84f554805d)
![Captura de Pantalla 2024-10-04 a la(s) 13 11 48](https://github.com/user-attachments/assets/e37a9cd9-d39b-4038-b270-0ba47fb8a8b3)
![Captura de Pantalla 2024-10-04 a la(s) 13 12 38](https://github.com/user-attachments/assets/8dc64983-7ebe-4ac7-b4a4-bcf01bc1937d)
![Captura de Pantalla 2024-10-04 a la(s) 13 13 27](https://github.com/user-attachments/assets/4d0c4380-b3f8-4b65-8595-b8c4555dec19)
![Captura de Pantalla 2024-10-04 a la(s) 13 14 16](https://github.com/user-attachments/assets/d6003d10-7bab-408d-81c7-92e9f80d9c54)
![Captura de Pantalla 2024-10-04 a la(s) 13 15 19](https://github.com/user-attachments/assets/81149c65-e091-4a44-a444-968dc01b80da)
![image](https://github.com/user-attachments/assets/8621bfd2-1e2f-4780-9069-8c1cbe1dc16d)

#### songofunhealing.mp3

![image](https://github.com/user-attachments/assets/4038445a-0460-434f-ba1b-1e901ac1a7f5)

#### style.css

![image](https://github.com/user-attachments/assets/18dd00d7-9f3d-4d75-b5d8-980dabe2defb)

#### wall.js

![image](https://github.com/user-attachments/assets/b63be33f-eb1e-45af-bf93-a235d6891bc6)
![image](https://github.com/user-attachments/assets/db061374-cfa9-4280-8c6d-d8e7a54227e5)

## Proceso y funcionamiento

### Whitehall (https://editor.p5js.org/leleleo3/sketches/kkbhE4UN4)

Comenzamos utilizando como referencia y base la página de Video On Canvas de p5.js Examples. Se definieron las variables globales (rover, playing y video, añadiendo song posteriormente) y se implementó un video para el fondo de nuestro proyecto, cuyo archivo subimos a assets.

Luego, buscando controlar el movimiento de la cámara, utilizamos la librería de RoverCam para manejar las cámara por medio del mouse y simular que el personaje mira alrededor de la habitación, además de colocarlo en una posición de primera persona. 



La función de mousePressed, por otro lado, nos permite darle play y poner pause al video cada vez que efectuemos un click.

[FOTO]

En este primer intento, nos encontramos con dificultades para centrar el video, pues al usar una cámara pensada para elementos en 3D, este se deformaba.

[FOTO]

Para resolver este problema, modificamos la posición y rotación de la cámara mediante rover.setState. Los cambios son los siguientes:
Posición anterior: [-400, -200, -200]
Posición nueva: [300, 100, 200]
Rotación anterior: [0.4, 0.3, 0]
Rotación nueva: [0.10, 0.20, 0.20]

[FOTO]

Ya teniendo esta base funcionando, se hizo un mapa 3D simple en Roblox Studio para reemplazar por el video que hasta entonces estábamos usando, que no era de autoría propia. Por medio de una grabación de pantalla y posterior edición, se generó un vídeo para emular la navegación a través del espacio.

[FOTO]

Por último, se añadió este video (whitehall.mp4) y la canción “Lavender Town” del juego Pokemon Red and Green de fondo (lavendertown.mp3), ambos en un loop.

[FOTO]

------
### CREEPYPASTA ROAD (https://editor.p5js.org/leleleo3/sketches/kkbhE4UN4)

Tomamos el código de 3d maze hecho por Grdelpriore (Luca Del Priore) en la plataforma de p5.js.

[FOTO]

Antes de comenzar, debemos explicar la creación de las murallas que utilizó el creador que nos proporcionó la base. Según lo visto en el código, él estableció una por una las coordenadas de cada pared en un punto del plano 3D del canvas.

[FOTO]

Uno de los puntos más interesantes y útiles que pudimos observar en el código original del proyecto es la implementación de un comando que le impida al personaje chocar contra las paredes, de manera que cuando se acerca a una es repelido de vuelta al último punto seguro. Así, no atraviesa los límites del laberinto y las paredes terminan funcionando como un objeto sólido intraspasable. Esto se ve en los comandos lastGood, que refiere al último punto donde el personaje estuvo bien ubicado en el plano sin interferir con el entorno.

[FOTO]

Comenzamos modificando las variantes de color y texto, con su tipografía y su posición respectiva, dentro del cartel de inicio.
Para cambiar el color del cartel se modificó el apartado graphics.background. En este caso, para que tome un color rojo lo cambiamos a (66, 1, 1).

Usando graphics.text, se cambió el texto de la primera línea, convirtiéndolo en un título en mayor tamaño que lea “CREEPYPASTA ROAD”, en vez de “Use wasd to”. La tipografía de este título fue tomada de una página de internet de variantes tipográficas.

En graphics.textSize, modificamos el tamaño para resaltar el texto. Lo dejamos en (50). 

Para definir dónde estarán ubicadas nuestras letras en el cartel, nos enfocamos en los valores específicos de cada pieza de texto que colocamos. Por ejemplo, “CREEPYPASTA ROAD” está ubicado en las coordenadas (400, 110) de nuestro cartel.  

Repitiendo este proceso, terminamos nuestro cartel de inicio acorde a la estética de nuestro proyecto.

[FOTO]

En background, cambiamos el color del fondo de nuestro trabajo. Anteriormente (120), pasamos a uno mucho más oscuro y cercano a negro, (10).

[FOTO]

Continuamos cambiando el cartel del final del juego. Nuevamente, se modifica color y letra como vimos anteriormente.

[FOTO]

En la ventana sketch.js, dentro de la función preload, modificamos la imagen que se presentará en las paredes, asegurándonos de que esta se vaya a cargar primero en nuestro código. Anteriormente se usaba el archivo llamado brick_texture.jpg, pero ahora se cambia a bloodwall.png.

Buscando generar un ambiente más tétrico, le agregamos la variante de música a nuestro juego con la opción song. Aquí cargamos la canción “Song of Unhealing” del juego The Legend of Zelda: Majora’s Mask (songofunhealing.mp3), para que comience de manera creciente mientras el jugador camina por el camino determinado.

[FOTO]

Cabe declarar que para que la experiencia se mantenga con la misma atmósfera, utilizamos la opción de que la canción continúe en un loop durante toda la experiencia con la opción song.loop. 

[FOTO]

[FOTO]

Por último, decidimos cambiar el objeto a buscar, que podemos ver junto al cartel del final del juego. Modificamos el color con el que se presenta con specularMaterial: (red). Después, modificamos su apariencia para que sea una esfera, quitándole las esquinas al cambiar las coordenadas en sphere: (50, 16, 20). Para finalizar, utilizamos shininess para cambiar el brillo de nuestro objeto a (50).

[FOTO]

-----

## Registro de funcionamiento ambos proyectos
  
(https://drive.google.com/drive/folders/1qaFuJPEzW1SbITHULvYmaM5BtnBQczeo?usp=share_link)

-----

## Conclusiones

Fuimos capaces de presenciar y experimentar la gran gama de posibilidades que la plataforma de p5.js ofrece a la hora de crear y desarrollar contenido en el área de los videojuegos, yendo desde poca a mayor complejidad dentro de estos.

Descubrimos nuevas herramientas especializadas para el desarrollo de videojuegos en esta plataforma, como lo es la biblioteca de p5play y controladores de cámara como RoverCam.

Por último, este trabajo nos convenció, nuevamente, de que la programación es capaz de entregarnos el espacio, así como recursos y herramientas, para llevar a cabo nuestras ideas y proyectos creativos. Consideramos el aprendizaje y la experimentación esencial para nuestro futuro y desarrollo profesional.

## Citas y referentes
3d maze por Grdelpriore en (https://editor.p5js.org/Grdelpriore/sketches/kyn_j-kfB)

[FOTO]

Background with Music por magicsfirst en (https://editor.p5js.org/magicsfarst/sketches/sFVqT3XPu)

[FOTO]

aMazeRunner on editor.p5js.org por jWilliamDunn en (https://editor.p5js.org/jwdunn1/sketches/iI-2XX0Hw)

[FOTO]

p5.RoverCam en (https://github.com/freshfork/p5.RoverCam)

[FOTO]

RoverCam controller por jwdunn1 en (https://editor.p5js.org/jwdunn1/sketches/3IaJbTnkd)

[FOTO]

p5play en (https://p5play.org/)

[FOTO]

point and click game por dorianraev en (https://editor.p5js.org/dorianraev/sketches/LnuoG9g7X)

[FOTO]

battle arena game por Johnny1 en (https://editor.p5js.org/Johnny1/sketches/oenbafnX2)

[FOTO]

Creating a Simple Platformer Game in P5.play: A Step-by-Step Tutorial en (https://youtu.be/MQogwR0uoSY?si=y7_DrK9hb92_Tzyf)

[FOTO]

Video on Canvas en (https://p5js.org/examples/imported-media-video-canvas/)

[FOTO]

