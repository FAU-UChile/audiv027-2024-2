# clase 6

# Revisar los trabajos grupales entregados en los semesres anteriores para poder darnos una idea de lo que nos gustaría y podríamos hacer para nuestros proyectos

https://github.com/FAU-UChile/audiv027-2024-1

https://github.com/FAU-UChile/audiv027-2023-2

semestre 2024-1
varios de los trabajos fueron desarrollados usando wikinator

# Control de gamepad-keyboard a traves de poses

Fecha: Viernes 26 de abril de 2024 Integrantes: https://github.com/chicomaker y https://github.com/Juanitaliano

# Herramientas utilizadas.
Teacheable Machine

Python

Librerias Necesarias para python

-OpenCV

-Keyboard

-Numpy

-Tensorflow

Navegador

Camara Webcam

este proyecto permite que por el ordenador identifique poses y por medio de esas pueda escribir algunas letras
https://github.com/FAU-UChile/audiv027-2024-1/blob/main/estudiantes/08-BenjaIeg/clase-07/README.md

# Deteccion de Objetos



https://github.com/FAU-UChile/audiv027-2024-1/tree/main/estudiantes/08-BenjaIeg/clase-14


Teachable machine: ´para hacer la detección de objetos 
tensorflowlite es para dispositivos moviles
usar tensorflow.js
comentario en html <¡--texto-->

# Entrenamiento de modelo teachable machine

![image](https://github.com/user-attachments/assets/7ddde2bd-09cd-4a5c-b8df-e620f0480228)

agrega muestras de las cosas que queremos que reconozca, después procesa la info 

exporta el modelo

abre un documento nuevo en p5

descarga el modelo

dentro de tu documento p5 crea una carpeta de my models, dentro de esta coloca los documentos que acabas de descargar del teachable machine
![image](https://github.com/user-attachments/assets/895a1540-be24-49b6-aebd-5d4751465364)


copiar la parte del tensorflow.js usando los fragmentos de codigo en p5.js

![image](https://github.com/user-attachments/assets/c6686943-4c83-4850-b01e-0bec31d6444e)

el archivo vine para html, por lo que debemos limparlo para que pueda funcionar en scketch.js

en la parte del index abre el inicio y el cierre del teachable machine
![image](https://github.com/user-attachments/assets/1c4317a9-6af3-4e81-a0e5-b9a469e8b69e)

de lo que copiaste del tensorflow.js pegalo en el index solo se borra la parte que va desde // Classifier Variable ya que esto va en scketch
![image](https://github.com/user-attachments/assets/6787a6bb-ea0a-46ae-8b07-285a866e3c81)

ve a ml5 y da clic en #ourfaq, copia la primera linea que es de html 

![image](https://github.com/user-attachments/assets/e5d30199-10ae-4eea-a2de-aeee521d55f7)

pegalo en el index del p5
![image](https://github.com/user-attachments/assets/60f57681-f600-4da2-8320-07ea5f598481)


dentro del scketch coloca desde // Classifier Variable hasta el ultimo corchete antes del último script
