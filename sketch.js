jogo = new Jogo();
telaInicial = new TelaInicial();
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo.setup();
  cenas = {
    jogo:jogo,
    telaInicial:telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', (width / 2), (height / 2));
  //somDoJogo.loop();
  frameRate(40);    
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
