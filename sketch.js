
function setup() {
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  createCanvas(windowWidth, windowHeight);
  jogo.setup();
  cenas = {
    jogo:jogo,
    telaInicial:telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', (width / 2), (height / 2));
  somDoJogo.setVolume(0.05);
  somDoJogo.loop();
  frameRate(40);    
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
