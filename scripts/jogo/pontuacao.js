class Pontuacao
{
   constructor() {
      this.pontos = 0; 
   }
  
  exibe() {
    textAlign(RIGHT);
    fill('#FFF');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  somaPontos()
  {
    this.pontos += .2;
  }
}