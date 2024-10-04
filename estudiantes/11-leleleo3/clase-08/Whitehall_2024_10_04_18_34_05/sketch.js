// Definir rover, playing, video y song
// como variables globales.
// Poner playing como false para que los videos estén pausados al colocarse en el canva.

var rover
let playing = false;
let video;
let song;
 
function preload() {
  // Llama a cargar la canción de fondo.
  song = loadSound('./lavendertown.mp3');
  
  // Se subió el video en los assets
  // y usó la función de createVideo() para
  // cargar el video en el código.
  video = createVideo('./whitehall.mp4');
 
}
  
function setup() {
  // Crear el canvas como un espacio WEBGL
  // que permita el uso de cámaras.
  createCanvas(800, 800, WEBGL);
  
  // Crear cámara rover en primera persona.
  let rover = createRoverCam();
  rover.usePointerLock();
  rover.setState({position:[300,100,200],
                 rotation: [0.10,0.20,0.20]});
  rover.controller = function() { // override
    if (RoverCam.pointerLock) {
      // Activa el mouse izquierda/derecha.
      this.yaw(movedX * this.sensitivity / 10);   
      // Activa el mouse arriba/abajo.
      this.pitch(movedY * this.sensitivity / 10); 
    }}
   // Repetir la canción.
 song.loop();
  
  // El video se renderiza como
  // un elemento DOM por default.
  // Usamos el método hide() para remover
  // la instancia DOM del video.

 video.hide()
  

  }

function draw() {
  
  // Definir color de fondo.
  background(0)

  // Dibujar la primera instancia del video en canvas.
  image(video, 1, 1);
  camera.zoom = 4;
  
}

function mousePressed() {
  // Cuando se clickea el canvas, revisa si
  // los videos están pausados o corriendo.
  // Si están corriendo, páusalos.
  
  if (playing) {
  video.pause();
  } else {
  // Si están pausados, córrelos.
  video.loop();
  }

  // Cambiar el valor de playing a la boolean opuesta.
  playing = !playing;
  
}