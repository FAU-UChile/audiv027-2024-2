# clase 6

## Proyecto Snake Game con control Gestual

- Integrantes de grupo: Natalie Astudillo (https://github.com/NAF02) - Valentina Ochoa (https://github.com/ValentinaOchoa09?tab=repositories)
- Código:
// Carga del modelo de Teachable Machine
let poseModelURL = 'https://teachablemachine.withgoogle.com/models/29Q7HHyno/';

// Variables video y poseNet
let video;
let poseNet;
let poses = [];
let label = 'Cargando...';

// Variables serpiente
let snake;
let rez = 20;
let food;
let w;
let h;
let speed = 5;
let gameStarted = false;

// Crear lienzo
function setup() {
  createCanvas(600, 400);
// Capturar video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

// Iniciar poseNet con el video
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

// Configuraciones juego
  w = floor(width / rez);
  h = floor(height / rez);
  snake = new Snake();
  foodLocation();
}

function modelLoaded() {
  console.log('Modelo de posturas cargado');
}

function gotPoses(results) {
  poses = results;
}

// Ubicación de la comida cuando se inicia el juego
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

// Función para mover la serpiente  con el teclado una vez el juego empezó
function keyPressed() {
  if (!gameStarted) {
    gameStarted = true;
    snake.setDir(0, 1); // Empieza moviéndose hacia abajo
  } else {
    if (keyCode === UP_ARROW && snake.ydir === 0) {
      snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW && snake.ydir === 0) {
      snake.setDir(0, 1);
    } else if (keyCode === LEFT_ARROW && snake.xdir === 0) {
      snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW && snake.xdir === 0) {
      snake.setDir(1, 0);
    }
  }
}

// Dibuja en el fondo
function draw() {
  background(220);
  image(video, 0, 0, width, height);
  textSize(32);
  fill(255);
  stroke(0);
  text(label, 10, 40);
  text('Puntuación: ' + (snake.len - 1), 10, 80);

// Imagen espejo
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  scale(rez);
  if (snake.eat(food)) {
    foodLocation();
    snake.grow();
  }
  if (frameCount % speed === 0 && gameStarted) {
    snake.update();
  }
  snake.show();

  if (snake.endGame()) {
    console.log('JUEGO TERMINADO');
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);

  // Llama a la función controlSnake() para controlar la serpiente
  controlSnake();
}

// Clase de la serpiente
class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 1; // Comienza con longitud 1
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  
// Actualiza el tamaño de la serpiente
  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

// Crecimiento de la serpiente
  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  endGame() {
  let x = this.body[this.body.length - 1].x;
  let y = this.body[this.body.length - 1].y;

  // Verificar los límites del canvas
  if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
    return true;
  }

  // Verificar colisión consigo misma (opcional)
  for (let i = 0; i < this.body.length - 1; i++) {
    let part = this.body[i];
    if (part.x === x && part.y === y) {
      return true;
    }
  }
  return false;
}


  eat(pos) {
  let head = this.body[this.body.length - 1];
  let snakeX = head.x;
  let snakeY = head.y;
  let foodX = pos.x;
  let foodY = pos.y;

  // Convertimos las coordenadas de la serpiente y la comida a la misma escala
  snakeX *= rez;
  snakeY *= rez;
  foodX *= rez;
  foodY *= rez;

  // Comparamos las posiciones con un margen de error adecuado
  let d = dist(snakeX, snakeY, foodX, foodY);
  if (d < 1) {
    return true;
  }
  return false;
}

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}

// Función para controlar la serpiente basada en las poses detectadas
function controlSnake() {
  if (!gameStarted && poses.length > 0) {
    let pose = poses[0].pose;
    let leftWrist = pose.keypoints[9].position;
    let rightWrist = pose.keypoints[10].position;

    if (abs(leftWrist.x - rightWrist.x) < 50) {
      gameStarted = true;
      snake.setDir(0, 1); // Empieza moviéndose hacia abajo
    }
  }

  if (gameStarted && !keyIsPressed) {
    let pose = poses[0].pose;
    let nose = pose.keypoints[0].position;
    let leftWrist = pose.keypoints[9].position;
    let rightWrist = pose.keypoints[10].position;

    if (leftWrist.y < nose.y && rightWrist.y < nose.y) {
      label = 'UP';
      snake.setDir(0, -1);
    } else if (leftWrist.x < nose.x && rightWrist.x < nose.x) {
      label = 'DOWN';
      snake.setDir(0, 1);
    } else if (leftWrist.x > nose.x && rightWrist.x > nose.x) {
      label = 'RIGHT';
      snake.setDir(1, 0);
    } else if (leftWrist.y > nose.y && rightWrist.y > nose.y) {
      label = 'LEFT';
      snake.setDir(-1, 0);
    }
  }
}

- Materiales:
- Versión de software:
- Tipo de tecnología:

## Idea de Proyecto

-
