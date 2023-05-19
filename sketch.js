let cor;
//variaveis do quadrado
let posicaoX = 200;
let posicaoY = 100;
let tamanho = 20;
let largura = 20;
let velocidadeY = 2;
let velocidadeX = 2;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background("#E6E6FA	");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  desenha();
  movimenta();
  verificaBordas();
}
function desenha() {
  fill(cor);
  noStroke();
  rect(posicaoX, posicaoY, tamanho, largura);
}
function movimenta() {
  if (keyIsDown(UP_ARROW)) {
    posicaoY -= 2;
  } else if (keyIsDown(DOWN_ARROW)) {
    posicaoY += 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    posicaoX += 2;
  } else if (keyIsDown(LEFT_ARROW)) {
    posicaoX -= 2;
  }
}
function verificaBordas() {
  if (posicaoY - largura > height) {
    posicaoY = 0;
  }
  if (posicaoY + largura < 0) {
    posicaoY = 200;
  }
  if (posicaoX - tamanho > width) {
    posicaoX = 0;
  }
  if (posicaoX + tamanho < 0) {
    posicaoX = 400;
  }
}
