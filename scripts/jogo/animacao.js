class Animacao {
  constructor(matriz, imagem, x, variacaoY, altura, largura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY
    this.y = height - altura - this.variacaoY;
    this.altura = altura;
    this.largura = largura;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.frameAtual = 0;
  }
  
  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.anima();
  }

  anima() {
    this.frameAtual ++;
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
