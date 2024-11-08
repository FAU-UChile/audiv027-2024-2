# clase 11

## Primera Parte

* Desde P5 puedo simular un dispositivo móvil desde un modelo de escritorio

## Conceptos

* OpenFramework - C++

##

* para preguntar cuánto mide la pantalla: ""console.log((windowWidth)""
* elemento CAPTURA (elemento capaz de generar multimedia); por ejemplo para generar un vídeo y que se pueda prender la webcam sin problemas
* gestión del canvas y modificación del espacio en base a comandos específicos

# CÓDIGO

``` javascript
let captura;

let opciones = {
  video:{
  mandatory:{
    minWidth: 1280,
    minHeight: 720
  }
},
  audio: false,
};


function setup() {
  createCanvas(windowWidth / 2, 200);
  console.log(windowWidth);
  
  captura = createCapture(opciones);
  Video.size(-WindowWidth,WindowHeight)
  captura.hide();

}

function draw() {
  background(220, 0, 0);
  image(captura, 0, 0);
}

function windowResized(){
  console.log("STOP IT DUDE");
  resizeCanvas(windowWidth / 3, 200);

}

function fantasia() { 
  console.log("fantasiaa");
  
}

```
