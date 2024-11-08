# clase 11: RESUMEN

## Primera Parte: 

### Recapitulatorio de lo que pasó en las últimas semanas:
- Comenzamos hablando sobre las clases en Temuco que realizó el profesor Aaron y sobre las observaciones que dejamos en el clase 9.

- Como la clase 10 fue el 18OCT la clase se suspendió, pero se nos dejó una tarea investigativa opcional.

- Comentamos sobre **"OpenFramework"** escrito en **"C++"** y de algunos de sus creadores. Arturo Castro Formaba parte del software, pero abandonó el proyecto.  
---
### Utilizar WebCam del celular usando P5
- Mandar link de p5 a Ucursos para tenerlo a mano cuando lo vayamos a utilizar.

- Estamos viendo como personalizar el video en el lienzo, como ocultarlo, modificar tamaños, etc.
``` javascript
let captura;
let opciones = {
  video: {
    //mandatory: {
      //minWidth: 1280,
      //minHeight: 720
    //},
    //facingMode: "environment"
  },
  audio: false,
};

function setup() {
  // windowsWidth adapta el tamaño de la pantalla 
  createCanvas(windowWidth, 400);
  console.log(windowWidth)

  captura = createCapture(opciones);
  captura.hide();
  image(captura, 0, 0);
}

function draw() {
  push();
  background(255, 0, 0);
  translate(windowWidth, 0);
  scale(-1, 1);
  image(captura, 0, 0);
  pop();
}

function windowResized(){
  console.log("Me MaReOoOoOoOoOo Deja de moverme!!!!")
  resizeCanvas(windowWidth/2, 400);
}

function fantasia(){
  console.log("fantasiaaa")
}
```
### Investigué bien el como invertir la cámara y esta es la explicación de lo averiguado:
- Las líneas **"push"** y **"pop"** su función por asi decirlo es agrupar ciertas lineas de código como se ven en el código de ejemplo.

- La línea **"translate"** lo que hace es desplazar el punto de origen del plano 2D a uno predeterminado.

- Para invertir la cámara frontal utilizamos la linea **"scale(-1, 1)"** esto para que el eje X se vea espejado, pero utilizando la relación de aspecto ya pre establecida.

``` javascript
function draw() {
  push();
  background(255, 0, 0);
  translate(windowWidth, 0);
  scale(-1, 1);
  image(captura, 0, 0);
  pop();
}
```
---
# *BREAK*

## Segunda Parte:

- Añadimos una línea de código para que en el celular se vea una ellipse cuando tocas la pantalla.

``` javascript
  for (let dedito of touches) {
    ellipse(dedito.x, dedito.y, 80, 80)
  }
```

- Ahora colocamos la condición de que cuando haya solo dos dedos tocando la pantalla se dibuje el circulo.
``` javascript
if (touches.length == 2){
    for (let dedito of touches) {
      ellipse(dedito.x, dedito.y, 80, 80);
    }
  }
```

- Asignaremos dos deditos para que se dibuje la pantalla para ello debemos modificar el código:
``` javascript
  if (touches.length == 2){
    let deditoIzqX = touches[0].x;
    let deditoIzqY = touches[0].y;
    let deditoDerX = touches[1].x;
    let deditoDerY = touches[1].y;
   
    image(captura, deditoIzqX, deditoIzqY, deditoDerX, deditoDerY)
```  

# CIERRE DE CLASE
