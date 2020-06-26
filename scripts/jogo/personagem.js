class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, altura, largura, larguraSprite, alturaSprite ) {
    super(matriz, imagem, x, variacaoY,altura, largura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -30
    this.gravidade = 3;
    this.puloDuplo = 0;
    this.podePular = true;
    this.invencivel = false;
    
  }
  
  pula() {
    if(this.puloDuplo < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.puloDuplo++;
    } else {
      this.podePular = false;
    }
  }
  
  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    if(this.y > this.yInicial) {
      this.y = this.yInicial;
      this.puloDuplo = 0;
      this.podePular = true;
    }
  }
  
  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 5000);
  }
  estaColidindo(inimigo) {
    if(this.invencivel)
    {
      console.log('entrei aqui');
      return false;
    }
    const precisao = .5;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
}