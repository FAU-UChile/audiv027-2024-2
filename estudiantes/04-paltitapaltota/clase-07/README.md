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








