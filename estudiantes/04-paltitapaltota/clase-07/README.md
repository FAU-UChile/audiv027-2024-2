# clase
nombre del proyecto clasificador de generos de musica 
integrantes

leandro méndez

Paula faray 
mi equipo de trabajo es <https://github.com/BatmanTheDay27> y <<https://github.com/paltitapaltota>>, entregamos en el repositorio en este enlace <https://github.com/disenoUChile/audiv027-2024-1/estudiantes/paltitapaltota/clase-07>.


Idea base
la problematica: Personas que no son capaces de reconocer géneros musicales https://www.reddit.com/r/LetsTalkMusic/comments/mem3pd/i_feel_like_i_cant_identifyunderstand_music_genres/
![image](https://github.com/user-attachments/assets/bea5a365-6055-45ec-b416-97ad5ba0f14f)


oportunudad: generar un proyecto que pueda detectar los principales géneros y variantes, que esten presentes en el audio musical que desee clasificar.


sacaremos la información de canciones que pertenece a ese genero musical con un mapa virtual llamado musicmap, el cual contiene referenstes de distintos generos y variantes, tambien emplearemos el uso de nuestros propios conocimientos musicales ya que sabemos bastante de algunos generos puntuales para asi poder entrenar teachable machine   
![image](https://github.com/user-attachments/assets/53197534-666b-4211-a488-7abd1b7ec0ff)




Géneros que usaremos para entrenar en teachable machine : Jpop, Pop, Rock, Hip-Hop, Metal 

referentes musicales en : https://musicmap.info/
------------------------------------------------------------
# Reformulación de proyecto
¿Qué pasaría si entrenaramos la máquina solo 3 conceptos/artista? Luis miguel, Miku Hatsune, gustos del Leandro


mientra hablabamos con el profesor quisimos llevar esta idea mas allá ,vamos a clasificar  en tres categorias los géneros musicales miku hatsune, luis miguel, gustos de leandro.

Queremos ver y analizar  los datos que nos entrega la máquina para ver que ocurre cuando lanzamos canciones referentes a esos generos o diferentes a ellos  

Fase 1 Probando teacheable machine
empezamos a entrenar la maquina con musica de luis miguel 

se realiza un primer modelo de practica para ver como funciona 
le introducimos lo que es el ruido de fondo y luedo atravez del microfono le enseñamos que era luis miguel con la cancion "cuestion de piel"
lo preparamos con 50 epocas ( aldkald) y nos da el modelo 




Al probarlo comprendimos que el modelo entiende que cualquier sonido solapando el sonido de fondo es luis miguel tambien como sonido de instrumental que no estuviera en las muestras de luis miguel tambien las tomama como ruido de fondo curiosamente esto sea aprobable por el microfono o otra variante que no estamos considerando ahora  , lo cual no cumple con nuestra espectativa . teacheable machine me dio una opcion de aumentar el numero de epocas para que fuera mas preciso ![image](https://github.com/user-attachments/assets/92a4c16f-c238-43cf-8f08-b0bf247cda11) pero tampoco cualquier sonido ya sea voz, aplauso incluso sonido ambiental que no estaba ahi al momdento dede hacer la muestra lo toma como luis miguel agregando que tambien es posible como no tiene mas clases con que comparar toma como sonido encima del sonido de fondo es luis miguel, no comprende como tal que es o el quien es luis miguel, sino sonido que esta solapando otro sonido.   
en vez de enseñarle una cancion le enseñaremos un remix de las mejores canciones de luis miguel para que tenga mas elementos que aprender, esto lo haremos tambien con los otros topicos musicales que estamos toamndo ( miku hatsune y gustos musicales de Leandro).








