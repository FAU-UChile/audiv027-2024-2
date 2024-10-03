# clase
nombre del proyecto clasificador de generos de musica 
integrantes

leandro méndez

Paula faray 
mi equipo de trabajo está conformado por <https://github.com/BatmanTheDay27> y <<https://github.com/paltitapaltota>>, lo entregaremos en el repositorio en este enlace <https://github.com/disenoUChile/audiv027-2024-1/estudiantes/paltitapaltota/clase-07>.


Idea base
la problemática: Personas que no son capaces de reconocer géneros musicales https://www.reddit.com/r/LetsTalkMusic/comments/mem3pd/i_feel_like_i_cant_identifyunderstand_music_genres/
![image](https://github.com/user-attachments/assets/bea5a365-6055-45ec-b416-97ad5ba0f14f)


oportunidad: generar un proyecto que pueda detectar los principales géneros y variantes, que estén presentes en el audio musical que desee clasificar.


sacaremos la información de canciones que pertenece a ese género musical con un mapa virtual llamado musicmap, el cual contiene referentes de distintos géneros y variantes, también emplearemos el uso de nuestros propios conocimientos musicales ya que sabemos bastante de algunos géneros puntuales para así poder entrenar teachable machine    
![image](https://github.com/user-attachments/assets/53197534-666b-4211-a488-7abd1b7ec0ff)




Géneros que usaremos para entrenar en teachable machine : Jpop, Pop, Rock, Hip-Hop, Metal 

referentes musicales en : https://musicmap.info/
------------------------------------------------------------
# Reformulación de proyecto
Durante una conversación con el profesor, surgió una idea que decidimos llevar más allá, la hipotesis planteada fue:
¿Qué pasaría si entrenaramos la máquina solo con 3 conceptos/artistas en específico? en este caso, elegimos a Luis Miguel, Miku Hatsune y gustos del Leandro como categorías representativas.

Nuestro objetivo es observar y analizar los datos que nos proporciona la máquina al lanzarle canciones tanto referentes a estos géneros como de estilos diferentes. Queremos comprender cómo responde el modelo ante estímulos que están dentro o fuera de estas tres clasificaciones.

Fase 1 Probando teacheable machine
Iniciamos la primera fase entrenando la máquina con música de Luis Miguel 

Comenzamos con un modelo práctico para observar su comportamiento. 
Le introdujimos ruido de fondo a través del micrófono, y luego le enseñamos lo que debía identificar como Luis Miguel utilizando la canción "Cuestión de Piel".
lo preparamos con 50 epocas ( aldkald) y nos da el modelo  (insertar video)


# Resultados del primer modelo

Al probar el modelo inicial, notamos que surgieron varios desafíos inesperados. El sistema entendía que cualquier sonido que solapara el ruido de fondo era identificado como música de Luis Miguel. Incluso sonidos instrumentales que no pertenecían a las muestras de Luis Miguel eran clasificados como ruido de fondo. Esto sugiere que el modelo no estaba reconociendo correctamente la música del artista, sino simplemente asociando cualquier sonido sobre el fondo como parte de su categoría.
Curiosamente, esto podría deberse a limitaciones del micrófono u otra variable no considerada en este momento. Este resultado no cumplió con nuestras expectativas iniciales, ya que buscábamos una identificación más precisa.
Teachable Machine ofreció la opción de aumentar el número de épocas para mejorar la precisión del modelo ![image](https://github.com/user-attachments/assets/92a4c16f-c238-43cf-8f08-b0bf247cda11)
Sin embargo, descubrimos que cualquier sonido, ya sea una voz, aplausos o incluso ruido ambiental que no estaba presente en la muestra original, también era clasificado como Luis Miguel. Además, como el modelo no contaba con más clases para comparar, cualquier sonido sobre el ruido de fondo se asociaba erróneamente con este artista, lo que indica que el sistema no comprende realmente quién es Luis Miguel ni su música, sino que simplemente está diferenciando sonidos superpuestos.

 # Nueva estrategia
 
Para mejorar este aspecto, hemos decidido modificar nuestra estrategia de entrenamiento. En lugar de enseñar al modelo una única canción de Luis Miguel, le proporcionaremos un remix que contenga una selección de sus mejores canciones. De esta manera, el modelo contará con más elementos y características para aprender, lo que esperamos mejore su capacidad de identificación. Esta misma estrategia se aplicará a los otros tópicos musicales que estamos utilizando, es decir, las canciones de Miku Hatsune y los gustos musicales de Leandro.

tuvimos problemas para enseñarle lo demas topicos, posiblemente por el navegador, al cambiarlo teachable machine funciono nuevamente
queriamos ver si el proyecto funciona en p5 antes de hacer el proyecto oficial pero al momento de subir el modelo hubo un problema con un archivo  



![Captura de pantalla 2024-10-02 223627](https://github.com/user-attachments/assets/1a0a5b1d-9ab7-4fba-8632-5aaf6df9caae)



![Captura de pantalla 2024-10-02 223627](https://github.com/user-attachments/assets/1a150efb-8b95-4119-bba7-1c158cf10faf)

pesaba mas de lo normal por lo cual lo subimos el modelo atras ve un link que genera teachable machine
![image](https://github.com/user-attachments/assets/9759d5c1-39ce-4a42-b508-595fee4a8256)

al cambiar la version de ml5 a la antiagua y al colocar el url corespondiente nos lanzo un error  TypeError: Failed to fetch
ocurre cuando el navegador que hace solicitud para pedir una informacion pero no ocurre esto puede pasar por problemas de conectebilidad con internet problemas de la url o algun problema con la pagina o por El sitio web no deja que lo veas (cors).

apuntamos que es por un tema mas de cors, no sabemos el porque pero hay internet pusimos correctamente la url y no hay problema al parece con teacheble machine o drive (donde se subio el modelo) lo cual no quisimos meternos mas en el problema perosi hacer un nuevo proyecto.

### Lector de labios 
queremos realizar un lector de labios sera un modelo basico pero queremos sentar bases y ver las capacidades que tiene teachable machine para detectar en este caso vocales solo con el movimiento de los labios .


