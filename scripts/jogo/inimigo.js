class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, altura, largura, alturaSprite, larguraSprite, velocidade, delay) {
      super(matriz, imagem, x, variacaoY, altura, largura, alturaSprite, larguraSprite);
      this.velocidade = velocidade;
      this.x = width;
    
    }
  
    move() {
       this.x -= this.velocidade; 
    }

    aparece()
    {
      this.x = width;
    }
}
