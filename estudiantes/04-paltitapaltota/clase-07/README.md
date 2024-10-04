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

Durante el entrenamiento del modelo, nos enfrentamos a algunos problemas al intentar enseñarle los demás tópicos musicales. Es probable que la causa haya sido un inconveniente con el navegador. Tras cambiar a un navegador diferente, Teachable Machine volvió a funcionar correctamente.
Antes de avanzar con el desarrollo oficial del proyecto, queríamos comprobar su funcionalidad en p5.js, pero al intentar subir el modelo para esta prueba, surgió un problema con uno de los archivos. Esta dificultad técnica nos impidió realizar la validación preliminar, lo que retrasa temporalmente nuestro plan de ejecución.



![Captura de pantalla 2024-10-02 223627](https://github.com/user-attachments/assets/1a0a5b1d-9ab7-4fba-8632-5aaf6df9caae)



![Captura de pantalla 2024-10-02 223627](https://github.com/user-attachments/assets/1a150efb-8b95-4119-bba7-1c158cf10faf)

pesaba más de lo normal por lo cual lo subimos el modelo a través de un link que genera teachable machine.
![image](https://github.com/user-attachments/assets/9759d5c1-39ce-4a42-b508-595fee4a8256)

Al realizar la integración del modelo, decidimos cambiar a una versión anterior de ml5.js e introducir la URL correspondiente para la carga del modelo. Sin embargo, al ejecutar el proyecto, recibimos el siguiente error: "TypeError: Failed to fetch". Este tipo de error suele ocurrir cuando el navegador intenta realizar una solicitud para obtener información, pero no logra completarla.
Las posibles causas de este problema incluyen problemas de conectividad a Internet, errores en la URL proporcionada, o alguna dificultad con el servidor o la página web que está siendo consultada. También es posible que el sitio web desde el que intentamos obtener la información no permita el acceso, lo que genera la falla en la solicitud. (*cors*).

Identificamos que el problema parece estar relacionado con una cuestión de *cors*. Aunque la URL fue ingresada correctamente y no parecía haber problemas visibles al consultarla en Internet, la falla parece no tener relación ni con  Teachable Machine y Google Drive.
Dado que esta problemática podría estar vinculada a la configuración de permisos o restricciones de acceso entre diferentes servidores, optamos por no profundizar más en este problema técnico. En su lugar, hemos decidido continuar con la creación de un nuevo proyecto, evitando el obstáculo y buscando una solución más eficiente.

### Lector de labios 


Nuestro próximo objetivo es desarrollar un lector de labios, un proyecto inicial y básico que nos permitirá explorar las capacidades de Teachable Machine en el ámbito del reconocimiento facial, específicamente enfocado en la detección de vocales mediante el análisis de los movimientos de los labios. Aunque este modelo será una primera aproximación, buscamos sentar las bases para futuras mejoras. Nuestro enfoque será probar cómo Teachable Machine puede identificar vocales basándose únicamente en los gestos labiales.

antecedentes de la lectura de labios 
la lectura de labios o ahora mejor conocida como lectura labiofacial es usada normalmente por las personas que tienen algun tipo de perdida auditiva les sirve para comunicarse cuando no tienen audiocion suficiente consta de observar los gestos tanto faciales como los labios para poder interpretar lo que la otra persona esta expresando  

los contras de la lectura labiofacial es que no se visualizan algunos sonidos con las letras   "j" "g" y "c" ya que no hay una gesticulacion para en los labios como tal tambien Algunos sonidos son muy similares al tratar de leerlos, la luz tambien afecta a la lectura. considerando todas estas difultades esperamos que teachlbe machine le cuente al manejar esto por lo cual lo haremos con algo muy basico las vocales.

Preparacion del modelo 

empezamos entrenando "nada" despues a, e i, o u, y luego preparamos y sale nuestro modelo estos son nuestros pasos a seguir 
de aqui cada integrantes hizo su proyeecto con variaciones, leandro (A) gesticulo mucho y acerco mucho la cara, pero paula (B )no gesticulo tanto trato de ahcer un version mas cercana a la realidad 

Modelo A
preparacion 


![image](https://github.com/user-attachments/assets/24a87836-d4b5-4834-b295-785642b09ee3)


esportacion del modelo 
![image](https://github.com/user-attachments/assets/d7c1e685-36fc-41e9-8fa4-98c55fd04df4)

descargo el modelo y se subio tambien a drive teable machine nos dio un link 

https://teachablemachine.withgoogle.com/models/aZKcmkb93/

con ello abrimos p5 atravez de table machine abrimos nuestra cuenta y empezamos a configurar el modelo le quitamos la linea de codigo numero 8ya que estaba desaactualizada y la remplazamos por la que nos dios ml5

![image](https://github.com/user-attachments/assets/dc58f1a4-7a5d-43ba-9263-04b5d7a371f9)


![image](https://github.com/user-attachments/assets/7ba5d2d8-b279-40fc-8579-8bcd5a0554ce)


![image](https://github.com/user-attachments/assets/ddb4cca8-e1f7-4939-870b-a11c6e547e62)

luego insertamos nuetro url  aqui 

![image](https://github.com/user-attachments/assets/d9e56527-71fd-4100-bc39-92af9f127b41)

y lo hacemos funcionar 



https://github.com/user-attachments/assets/9d67830e-cdad-4e73-b3a6-a6dccb2d1765














