class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, altura, largura, alturaSprite, larguraSprite, velocidade, delay) {
      super(matriz, imagem, x, variacaoY, altura, largura, alturaSprite, larguraSprite);
      this.velocidade = velocidade;
      this.delay = delay;
      this.x = width + this.delay;
    
    }
  
    move() {
       this.x -= this.velocidade; 
      
      if (this.x < - this.largura - this.delay) {
       this.x = width;  
      }
    }
}
