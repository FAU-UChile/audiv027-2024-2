# clase entrega

# *CLASIFICADOR DE BEBIDAS DEFINITIVO 1.0.0-Alpha*


-----
**INTEGRANTES:**

`@Paola-Garcia24 : Paola Garcia @MauroSSJ24 : Mauricio Catalan @sebasebamv : Sebastian Mella`


-----
**MOTIVACION:**

  Como buenos expertos en bebidas, queremos enseñarle a la máquina y al mundo los gustos refinados de este grupo en lo que a gaseosas corresponde, por lo que hemos decidido entrenar a la máquina para que logre reconocer o identificar entre lo mejor de lo mejor: Coca-Cola y Pepsi. Eligiendo estas bebidas por su notoria rivalidad y popularidad. ¿y que pasa si identifica otra forma o marcas? !pues lo marcará como wakala¡ así es, ya que nada se le acerca a su impresionante sabor y porque obviamente, no cualquiera está a la altura de nuestros altos estandares. !Vamos a enseñarle a la maquina a ser tan exigente y selectiva como nosotros¡


-----
**OBJETIVO:**

  Lograr entrenar un modelo de programacion mediante muestras hechas a travéz de Teacheable Machine, programando en p5, y que funcione (primordial). Esto para que, como buen critico de gaseosas, pueda identificar visualmente entre dos diferentes formatos de bebida Coca-Cola y Pepsi, y tambien pueda declarar una tercera opcion de otros formatos y marcas de bebidas, pero estas denominandolas como "wakala", con la idea de juzgar los malos gustos de los demás. (con cariño<3)     


-----
**MATERIALES:**

+ Computador
+ Camara USB.
+ Botellas y latas de Bebidas.
+ Teacheable Machine. https://teachablemachine.withgoogle.com/
+ p5.js. https://p5js.org


-----
**PROCESO PASO A PASO:**

+ Planteamiento del experimento e idea base para el posterior plan de accion para lograr el objetivo que nos propusimos.

  Teniamos intenciones de hacer algo no serio, en el sentido que se puediera tomar a modo de chiste o broma. Nos llamo la atención lo que vimos en la clase 6, principalmente por intuitivo del proceso y que la replicación de este nos podia ser aplicado en otro proyecto.

   Dicho asi surgio la idea de un programa que "discriminara" por alguna tonteria. En esta caso contabamos con una botella Coca-Cola y con eso en mente dimos con la idea de poder armar "equipos" en base gustos (nuestros gustos); Team Coca-Cola y Team Pepsi. Elegimos estas bebidas por su conocida rivalidad como marcas y personas que las consumen. 


+ Preparacion de los materiales para las muestras del modelo

  Preparamos y buscamos cada uno de los materiales que necesitabamos para poder realizar el proyecto, lo cual significó salir a comprar y buscar entre nuestras cosas ademas de lo que nos pudieran brindar nuestros compañeros para tener muestras fotografiables de botellas o similares.

  
![2](https://github.com/user-attachments/assets/ed61b34f-a7cb-4bf1-a453-ee7cf52ac140)





+ Creacion de las muestras 
![1](https://github.com/user-attachments/assets/797423cd-10b9-4da7-a2c9-d23016fca893)

+ En Teachable machine creamos las muestras necesarias para poder programar lo que queríamos teniendo 3 elementos,2 de ellos son los principales (Coca Cola y Pepsi) y el 3 elemento era cualquier objeto diferente a estos.

  ![WhatsApp Image 2024-10-04 at 15 40 43](https://github.com/user-attachments/assets/2e038be0-1510-4af7-9351-687ae393657e)


![WhatsApp Image 2024-10-04 at 15 40 43 (1)](https://github.com/user-attachments/assets/5f208baf-6d9c-4afe-9252-91090e235eb6)


![WhatsApp Image 2024-10-04 at 15 40 44](https://github.com/user-attachments/assets/e55814ef-e038-445e-ae56-1abdf3ec410f)



+ Entrenamiento de Teacheable Machine, una vez ya tomadas las muestras.
![PROCESO 1_entrenamiento modelo (2)](https://github.com/user-attachments/assets/98417ffd-9eba-4d09-833b-0e6d9544a8fa)





+ Una vez teniendo las muestras necesarias hicimos el entrenamiento del codigo para que funcionara según nos lo habíamos planteado.
  
![Modelo entrenado_](https://github.com/user-attachments/assets/903e3054-a7af-42af-bbe9-40c842cdf688)



+ Descarga y exportacion del Modelo Entrenado para su posterior Programacion en p5.js
![pasopara descargar modelo](https://github.com/user-attachments/assets/93cd38dd-52e2-445b-aef2-91b2c13fac61)



+ Una vez que obtuvimos el resultado que se necesitaba, continuamos a descargar y exportar el Modelo Entrenado para su Programacion en p5.js
![WhatsApp Image 2024-10-04 at 15 42 15](https://github.com/user-attachments/assets/592193ed-d102-4204-b598-45b0bda51d61)



+ Para lograr que el código funcionara cambiamos la versión de ml5 agregando el siguiente línea de código
![Cambio de version necesario para que corra la programacion](https://github.com/user-attachments/assets/1378f553-e470-4b65-a5f9-a42d47a62895)
![Cambio en el index para la nueva version ](https://github.com/user-attachments/assets/42431f15-d07f-4160-9063-57e022927536)


+ Creamos la carpeta my_model en la que ser encuentra el código de teachable machine el cual contiene el entrenamiento de las muestras


![Captura de pantalla 2024-10-04 155308](https://github.com/user-attachments/assets/a12f785f-8cb4-47f4-93bd-0d3a495a570c)

![Captura de pantalla 2024-10-04 155646](https://github.com/user-attachments/assets/ed5a37d0-f18c-4f9f-8880-4a0773e39a6e)



+ Una vez descargado el código pasamos a editarlo para que funcionara, basandonos en los apuntes de la clase 6.


+ Nos basamos en el ejemplo de Vixo46 para arreglar los errores de p5 del codigo entrenado. Copiamos y destruimos su codigo para adaptarlo al nuestro, para poder correr nuestro codigo, logrando que funcione. Luego al seguir revisando y corroborando paso a paso los dos codigos, nos dimos cuenta que NO GUARDAMOS EL COGIDO DENTRO DE P5, lo que nos generaba el error y no funcionaba el codigo.



Link del proyecto
(Archivos subidos en la carpeta "Clase 08")

https://editor.p5js.org/MauroSSJ24/sketches/RAdOvOTE5




-----
CONCLUSIONES:

Al finalizar el trabajo logramos que funcionara el codigo del entrenamiento en p5, tuvimos un inconveniente al ejecutar el codigo en p5, no funcionaba, corrigiendo la mayor parte de ellos con la referencia del trabajo del compañero @Vixo46, dandonos cuenta del error nuestro al no guardar, (la mala costumbre de no guardar) Recordatorio: SIEMPRE APRETAR CTRL + S EN P5 DESDE UN PRINCIPIO o GUARDAR!!!


![funciona](https://github.com/user-attachments/assets/1304964c-1c9d-4787-84d4-30ea973f1f21)


A futuro lo que queriamos con el experimento era que la respuesta al mostrar las bebidas designadas fuera con una imagen de referencia por cada opcion, no solo los nombres sino que mostrara una respuesta visual de las preferencias hechas por nosotros. Un modo de aplicar esta idea podría haber sido como una broma o juego en alguna junta o fiesta entre amigos, donde el grupo puede juzgar o criticar de forma "sana" los gustos de los demas. 

 




-----
CITAS O REFERENTES:

+ "Vixo46" @Vixo46

  https://editor.p5js.org/Vixo46/sketches/48-lltxcU

+ "Clase 06"

  
  https://github.com/MauroSSJ24/audiv027-2024-2/tree/main/estudiantes/13-MauroSSJ24/clase-06

  
  https://github.com/sebasebamv/audiv027-2024-2/tree/main/estudiantes/08-sebasebamv/clase-06

  
  https://github.com/Paola-Garcia24/audiv027-2024-2/tree/main/estudiantes/05-PaolaGarcia24/clase-06
  

+ "Markdown Cheatsheet"

   https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
