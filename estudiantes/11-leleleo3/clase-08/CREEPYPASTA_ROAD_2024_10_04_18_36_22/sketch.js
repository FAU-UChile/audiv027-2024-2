// Luca Del Priore MMP 310
// simple 3D maze game

// Tutorial de collision https://www.youtube.com/watch?v=uAfw-ko3kB8


var z,x,y;
var bricks;
var wallArray=[];
var lastGoodX = 0;
var lastGoodY = 0;
var lastGoodZ = 0;
var camAngle;
let bCam;
var dx,dz;
let graphics, graphics2;
let song;

function preload(){
  // Cargar la imagen y la canción de fondo
  // antes de que comience el sketch.
  bricks=loadImage('bloodwall.png');
  song = loadSound('songofunhealing.mp3');
 
  
}


function setup() {
  // Crear el canvas como un espacio WEBGL
  // que permita el uso de cámaras.
  createCanvas(windowWidth, windowHeight,WEBGL);
  y=0;
  x=0;
  z=0;
  // Marca los gráficos para el cartel.
graphics = createGraphics(800,400);
  graphics2 = createGraphics(420,400);

  // bcam es una vista de ojo de pájaro 
  // que ayuda a posicionar los bloques.
  bCam = createCamera();
    bCam.setPosition(0,-3000,200);
//cam is the player camera
   cam = createCamera();
  cam.setPosition(-400,0,800);
  
  
  // Creacioón del laberinto.
  wallArray.push(new wall(400,0,400));
  wallArray.push(new wall(400,0,800));
  wallArray.push(new wall(0,0,1200));
  wallArray.push(new wall(-400,0,1200));
  wallArray.push(new wall(-400,0,0));
  wallArray.push(new wall(0,0,-400));
  wallArray.push(new wall(800,0,0));
  wallArray.push(new wall(800,0,-400));
  wallArray.push(new wall(800,0,-800));
  wallArray.push(new wall(400,0,-1200));
  wallArray.push(new wall(400,0,-1600))
  for(let i=0;i<3;i++){
    wallArray.push(new wall(400-400*i,0,-1200));
    wallArray.push(new wall(-800,0,800-400*i));
    wallArray.push(new wall(-800,0,400-400*i))
    wallArray.push(new wall(-1200,0,-800-400*i));
    wallArray.push(new wall(-800+400*i,0,-2000));
  }
  
  // Repetir la canción
  song.loop();

}

function draw() {
 background(10);
  
  // Creación de un cartel para el inicio del juego.
  push();
  noStroke();
  translate(-400,0,550);
  texture(graphics);
  graphics.background(66,1,1);
  graphics.fill(1);
  graphics.textAlign(CENTER);
  graphics.textSize(50); 
  graphics.text('𝐂⃥𝐑⃥𝐄⃥𝐄⃥𝐏⃥𝐘⃥𝐏⃥𝐀⃥𝐒⃥𝐓⃥𝐀⃥ 𝐑⃥𝐎⃥𝐀⃥𝐃⃥',400,110);
  graphics.text('wasd: moverse.',420,200);
  graphics.text('flechas: cámara',420,250);
  graphics.text('฿Ʉ₴₵₳ ɆⱠ ØJØ',420,325);
  plane(200,100);
  pop();
  
  // Creación de un cartel para el final del juego.
  push();
  noStroke();
  translate(0,0,-1600);
  rotateY(-PI/2);
  texture(graphics2);
  graphics2.background('gray');
  graphics2.textAlign(CENTER);
  graphics2.textSize(50); 
  graphics2.text('O̽J̵̴̵̢̡͓̤͈̭͓̱͉͎̲̯̳͇̬͔̙̟̫̀ͥ̂̇ͨ̓̍̓̋̽ͥ̌ͫ̽͂́͗̃͗ͩ͘̕͞͡ͅO͕͖͍̘̭̦͎ͪ̆̌ͭ̈̌̏͋̋̕͞ͅͅ',210,70);
  plane(200,200);
  pop();

 // Cámara para la construcción del laberinto.
   bCam.lookAt(0,0,0);  
 
frameRate(60);
    x =0;
    z =0;
  camAngle=0;
  // "Linterna" del jugador.
  pointLight(200, 200, 200, cam.eyeX, -200, cam.eyeZ);
  ambientLight(5);
  
  // Creación del ojo.
  push();
  noStroke();
  translate(0,0,-1600);
  specularMaterial('red ');
  shininess(50);
  rotateY(millis()/500);
  rotateX(millis()/523);
  sphere(50, 16 ,20);
  pop();
 

  var anyTouching = false;
  // Muestra todos los bloques en conjunto.
 for (let i=0; i<wallArray.length; i++){
   wallArray[i].display();
   // Prueba si la clase wall, paredes, 
   // está tocando la cámara.
   if(wallArray[i].touching()){
         anyTouching=true;
   }
 }
  // Guarda el último punto seguro para devolver al jugador
  // y evitar que se salga del laberinto.
  if(anyTouching==false){

    lastGoodX=(cam.eyeX);
    lastGoodY = cam.eyeY;
    lastGoodZ=(cam.eyeZ);
  }
  

// Controles WASD.
    if(keyIsDown(83)){
     z=10;      
     }
  
   if(keyIsDown(87)){
     z=-10;              
    }
  
   if(keyIsDown(65)){
     x=-10;                           
   }
  
   if(keyIsDown(68)){
     x=10;                             
    }

 // Pone al jugador devuelta al lugar seguro anterior,
 // no tocando la pared.
if(anyTouching==true){
      cam.setPosition(lastGoodX,lastGoodY,lastGoodZ);

    }
// Controles para mover la cámara de un lado a otro.
    if(keyIsDown(37)){
     camAngle=0.05;                             
    }
     if(keyIsDown(39)){
     camAngle=-0.05;                             
    }
   // El mouse comúnmente dejará al jugador atrapado.
    cam.pan(camAngle);
    cam.move(x,0,z);
}

