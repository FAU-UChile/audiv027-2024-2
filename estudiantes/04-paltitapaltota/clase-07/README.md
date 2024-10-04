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

Comenzamos con un modelo de präctica para observar su comportamiento. 
Le introdujimos ruido de fondo a través del micrófono, y luego le enseñamos lo que debía identificar como Luis Miguel utilizando la canción "Cuestión de Piel".
lo preparamos  y nos

https://github.com/user-attachments/assets/1c0a5a87-fb2c-41f2-a5ea-78164430aed1

 da el modelo 



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




pesaba más de lo normal por lo cual lo subimos el modelo a través de un link que genera teachable machine.
![image](https://github.com/user-attachments/assets/9759d5c1-39ce-4a42-b508-595fee4a8256)

Al realizar la integración del modelo, decidimos cambiar a una versión anterior de ml5.js e introducir la URL correspondiente para la carga del modelo. Sin embargo, al ejecutar el proyecto, recibimos el siguiente error: "TypeError: Failed to fetch". Este tipo de error suele ocurrir cuando el navegador intenta realizar una solicitud para obtener información, pero no logra completarla.
Las posibles causas de este problema incluyen problemas de conectividad a Internet, errores en la URL proporcionada, o alguna dificultad con el servidor o la página web que está siendo consultada. También es posible que el sitio web desde el que intentamos obtener la información no permita el acceso, lo que genera la falla en la solicitud. (*cors*).

Identificamos que el problema parece estar relacionado con una cuestión de *cors*. Aunque la URL fue ingresada correctamente y no parecía haber problemas visibles al consultarla en Internet, la falla parece no tener relación ni con  Teachable Machine y Google Drive.
Dado que esta problemática podría estar vinculada a la configuración de permisos o restricciones de acceso entre diferentes servidores, optamos por no profundizar más en este problema técnico. En su lugar, hemos decidido continuar con la creación de un nuevo proyecto, evitando el obstáculo y buscando una solución más eficiente.

### Lector de labios 


Nuestro próximo objetivo es desarrollar un lector de labios, un proyecto inicial y básico que nos permitirá explorar las capacidades de Teachable Machine en el ámbito del reconocimiento facial, específicamente enfocado en la detección de vocales mediante el análisis de los movimientos de los labios. Aunque este modelo será una primera aproximación, buscamos sentar las bases para futuras mejoras. Nuestro enfoque será probar cómo Teachable Machine puede identificar vocales basándose únicamente en los gestos labiales.

### Antecedentes de la lectura de labios 

La lectura de labios, o más recientemente conocida como lectura labiofacial, es una técnica utilizada principalmente por personas con algún tipo de pérdida auditiva para mejorar su capacidad de comunicación cuando la audición no es suficiente. Este método consiste en observar los movimientos de los labios y los gestos faciales para interpretar lo que la otra persona está diciendo.

A pesar de su utilidad, la lectura labiofacial presenta algunas limitaciones. No todos los sonidos se visualizan claramente, como es el caso de ciertas letras como la "j", "g" y "c", ya que no hay una gesticulación labial clara asociada a ellas. Además, algunos sonidos se ven muy similares entre sí, lo que dificulta su diferenciación. Factores externos como la iluminación también pueden afectar la eficacia de la lectura de labios. Teniendo en cuenta estas dificultades, nuestro objetivo es explorar cómo Teachable Machine puede manejar estos retos mediante un enfoque básico, comenzando con el reconocimiento de las vocales.


### Preparación del modelo 

El proceso de entrenamiento de nuestro modelo comenzó con la identificación de "nada" (sin movimiento), seguido por las vocales a, e, i, o, u. Este modelo inicial nos permitirá analizar cómo la herramienta de Teachable Machine puede identificar vocales a partir de los movimientos labiales.

Cada integrante del equipo entrenó el modelo con ligeras variaciones. Por ejemplo, Leandro (A) gesticuló mucho y acercó su rostro a la cámara durante el entrenamiento, mientras que Paula (B) adoptó un enfoque más moderado, tratando de crear una versión más cercana a la realidad, con movimientos labiales más sutiles. Estas diferencias nos permitirán comparar resultados y ajustar el modelo para mejorar su precisión.

Modelo A
Preparación 


![image](https://github.com/user-attachments/assets/24a87836-d4b5-4834-b295-785642b09ee3)


exportación del modelo 
![image](https://github.com/user-attachments/assets/d7c1e685-36fc-41e9-8fa4-98c55fd04df4)

![image](https://github.com/user-attachments/assets/b9b413e3-dd93-401d-acb0-ed5dce98864a)
 
Subimos el modelo a drive, lo descargamos y nos dio el siguiente link 
https://teachablemachine.withgoogle.com/models/aZKcmkb93/

Para continuar con el desarrollo del proyecto, abrimos p5.js utilizando Teachable Machine como base para la implementación. Accedimos a nuestra cuenta y comenzamos a configurar el modelo previamente entrenado. Durante este proceso, identificamos que la línea de código número 8 se encontraba desactualizada. Para resolver este inconveniente, reemplazamos esa línea por el código actualizado proporcionado por ml5.js.

![image](https://github.com/user-attachments/assets/dc58f1a4-7a5d-43ba-9263-04b5d7a371f9)


![image](https://github.com/user-attachments/assets/7ba5d2d8-b279-40fc-8579-8bcd5a0554ce)


![image](https://github.com/user-attachments/assets/ddb4cca8-e1f7-4939-870b-a11c6e547e62)

luego insertamos nuestro url aquí 

![image](https://github.com/user-attachments/assets/d9e56527-71fd-4100-bc39-92af9f127b41)

y lo hacemos funcionar 



https://github.com/user-attachments/assets/9d67830e-cdad-4e73-b3a6-a6dccb2d1765





Modelo B

Hicimos los mismos pasos que en el anterior 


Preparación 


![image](https://github.com/user-attachments/assets/69f36218-8766-4875-b863-091a98142b92)


Exportación del modelo 

![image](https://github.com/user-attachments/assets/b66974bc-90f3-40ec-b321-f3d2de405dbc)



Subimos el modelo a drive, lo descargamos y nos dio el siguiente link

https://teachablemachine.withgoogle.com/models/9N9mYIHSB/

con ello abrimos abrimos p5.js utilizando Teachable Machine como base para la implementación. Accedimos a nuestra cuenta y comenzamos a configurar el modelo previamente entrenado, quitamos la línea de código número 8 que se encontraba desactualizada y la reemplazamos por la que nos dio ml5.js.

![image](https://github.com/user-attachments/assets/dc58f1a4-7a5d-43ba-9263-04b5d7a371f9)


![image](https://github.com/user-attachments/assets/7ba5d2d8-b279-40fc-8579-8bcd5a0554ce)


![image](https://github.com/user-attachments/assets/ddb4cca8-e1f7-4939-870b-a11c6e547e62)


Luego insertamos nuestro url aquí 

![Uploading image.png…]()![Captura de pantalla 2024-10-04 003954](https://github.com/user-attachments/assets/299f3e44-a8f4-4863-8c92-7d173a1930de)


Y lo hacemos funcionar



https://github.com/user-attachments/assets/4270b80f-adbf-4bbb-acfc-aca403d6b7ac


### Análisis 

A partir de los videos generados durante el proceso de entrenamiento, se identificaron diferencias significativas en el desempeño de los modelos A y B. En el caso del modelo A, se observó un problema con la vocal "O", que es frecuentemente confundida con las vocales "A" y, sobre todo, la "U". Esta confusión se debe, en gran medida, a que es una vocal abierta y el programa no logra clasificarla de manera adecuada. A pesar de los esfuerzos de Leandro, quien gesticula de forma exagerada para diferenciar las vocales, el sistema no consigue distinguirlas con precisión.

Por otro lado, el modelo B presenta dificultades generalizadas en la identificación de las vocales. El programa no es capaz de detectar diferencias significativas entre ellas, debido a la falta de gesticulación en comparación con el modelo A. Aunque parece reconocer con mayor precisión las vocales "I" y "U", las restantes vocales se clasifican de manera aleatoria. En particular, la vocal "O" prácticamente no es reconocida por el modelo, lo cual parece estar directamente relacionado con la insuficiente gesticulación durante el entrenamiento, como se refleja en el video asociado a este modelo.



### Conclusiones 











