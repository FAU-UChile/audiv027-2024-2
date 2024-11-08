# clase

Ver la tarea opcional de lo enviada (ayer): Tarea Infinita.

Dorothy Santos:
https://dorothysantos.com/work/speaking-engagements/
https://dorothysantos.com/


Rafael Lozano-Hemmer:
https://www.lozano-hemmer.com/publications.php?order=Author_(A_to_Z)
https://www.lozano-hemmer.com/projects.php
*Hace mucho arte, junto a otras 30 personas.
*Estudio arte
Ejmplo:
https://www.lozano-hemmer.com/pulse_island.php

https://openframeworks.cc/
(Arturo Castro)_Era el programador mas importante de openframeworks, hasta que renuncio.
*No porque una herramienta deje de usarse, no funciona.

Vamos a aprender y repasar lo de jvascript, para verse en el celular, para llegar ver lo que vemos en el computador en el celular. (Que es lo que es la camara o webcam para el computador)
*Ingresar a p5js (con github)
*crtl + s (hacerlo un tik, osea un movimiento automatico nuestro)
*Si dice fuction+"un nombre" significa que eso existe.


*Actividad de ejemplos*
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth / 2, 400);
  console.log(windowWidth);
}
// color del dibujo
function draw() {
  background(255, 0, 0);
}
//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth / 2, 400);
 }

function fantasia() {
  console.log("fantasiaaaaa");
  }
// pruebas 1 para verlo en el celular tambien



*Actividad de ejemplos 2*
let captura;

// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth / 2, 400);
  console.log(windowWidth);
  
  captura = createCapture(VIDEO)
}
// color del dibujo
function draw() {
  background(255, 0, 0);
}
//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth / 2, 400);
 }

function fantasia() {
  console.log("fantasiaaaaa");
  }
// pruebas 2 para verlo en el celular tambien con camara y video


*Actividad de ejemplos 3*
// nos permite hacer streaming de audio y video.
let captura;
let opciones = {
  video:{
    mandatory: {
      minWidth:1280,
      minHeight: 720
    },
  },
  audio: false, // or True
};
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth / 2, 400);
  console.log(windowWidth);
  captura = createCapture(VIDEO)
}
// color del dibujo
function draw() {
  background(255, 0, 0);
}
//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth / 2, 400);
 }
function fantasia() {
  console.log("fantasiaaaaa");
  }



*Actividad de ejemplos 4*
let captura
let opciones = {
  video:{
    mandatory: {
      minWidth:1280,
      minHeight: 720
    },
  },
  audio: false,
};
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth / 2, 400);
  console.log(windowWidth);
  captura = createCapture(opciones);
  captura.hide();
  //esconder la captura y solo mostraria el lienzo
}
// color del dibujo
function draw() {
  background(255, 0, 0);
  image(captura, 0, 0);
// el anterior toma la imagen que se reproduzca dentro del lienzo
}
//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth / 2, 400);
 }
function fantasia() {
  console.log("fantasiaaaaa");
  }



*Actividad de ejemplos 5*
let captura;

let opciones = {
  video:{
    facingMode: "environment"
  },
  audio: false,
};
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  captura = createCapture(opciones);
  captura.hide();
  //esconder la captura y solo mostraria el lienzo
}
// color del dibujo
function draw() {
  background(255, 0, 0);
  image(captura, 0, 0, 250, 250);
// el anterior toma la imagen que se reproduzca dentro del lienzo
}
//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth, 400);
 }

function fantasia() {
  console.log("fantasiaaaaa");
  }


  ¿QUE ES EL INTERNET?
  https://openwebinars.net/blog/que-es-html5/

  robert moog

mouseIsPressed_https://p5js.org/es/reference/p5/mouseIsPressed/
Para saber si se apreta o no se apreta el mouse, opciones de programacion 

touches_https://p5js.org/es/reference/p5/touches/


*Actividad de ejemplos 5* _para ver lo del touches, como en el celular se ven los dedos marcados, en donde nunca se dice cuantos dedos hay, cuantos toques ( en mi ejemplo se pueden ver todos los dedos marcados con un ciruclo blanco)

let captura;

let opciones = {
  video:{
    facingMode: "environment"
  },
  audio: false,
};
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  captura = createCapture(opciones);
  captura.hide();
  //esconder la captura y solo mostraria el lienzo
}
// color del dibujo

function draw() {
  background(255, 0, 0);
  image(captura, 0, 0, 250, 250);
  
  
  for (let dedito of touches){
    ellipse(dedito.x, dedito.y, 180, 180);
  }
}

//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth, 400);
 }

function fantasia() {
  console.log("fantasiaaaaa");
  }


*Actividad de ejemplos 6* lo mismo de lo anterior pero poniendo que solo se vea cuando hay dos dedos tocando el touch en el celular.
let captura;

let opciones = {
  video:{
    facingMode: "environment"
  },
  audio: false,
};
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  captura = createCapture(opciones);
  captura.hide();
  //esconder la captura y solo mostraria el lienzo
}
// color del dibujo

function draw() {
  background(255, 0, 0);
  image(captura, 0, 0, 250, 250);
  
  
  if(touches.length == 2) {
    for (let dedito of touches){
    ellipse(dedito.x, dedito.y, 180, 180);
    } 
  }
}

//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth, 400);
 }

function fantasia() {
  console.log("fantasiaaaaa");
  }



*Actividad de ejemplos 7* aqui aplicamos el touch avanzado en donde quisimos hacer que la pantalla solo al tocar con dos dedos muestre la imagene o pantalla de video en el celular. 
let captura;

let opciones = {
  video:{
    facingMode: "environment"
  },
  audio: false,
};
// Tamaño de la ventana de la muestra
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  captura = createCapture(opciones);
  captura.hide();
  //esconder la captura y solo mostraria el lienzo
}
// color del dibujo

function draw() {
  background(255, 0, 0);
  //image(captura, 0, 0, 250, 250);
  
  if(touches.length == 2) {
    
    let deditoIzqX = touches [0].x;
    let deditoIzqY = touches [0].y;
    let deditoDerX = touches [1].x;
    let deditoDerY = touches [1].y;
  
      
    //ellipse(dedito.x, dedito.y, 180, 180);
      image (captura, deditoIzqX, deditoIzqY, deditoDerX, deditoDerY);
    } 
  }

//Todo lo de aqui va a ocurrir cuando se mueva la ventana es determinado por estas funciones
function windowResized() {
  console.log("cambio la pantalla!!");
  resizeCanvas(windowWidth, 400);
 }

function fantasia() {
  console.log("fantasiaaaaa");
  }

* ___ *









