class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 25, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width + 100, 30, 52, 52, 104, 104, 10, 100);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 30, 100);
        
        inimigos.push(inimigo);
        inimigos.push(inimigoTroll);
        inimigos.push(inimigoVoador);

    }

    keyPressed(key) {
        if(key === 'ArrowUp') {
            personagem.pula();
            if(personagem.podePular) {
                somDoPulo.play();
            }
         }
    }

    draw() {
        cenario.exibe();
        cenario.move();
        pontuacao.exibe();
        pontuacao.somaPontos();
        const inimigo = inimigos[inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        console.log(inimigoVisivel);

        personagem.exibe();
        personagem.aplicaGravidade();
        
        inimigo.exibe();
        inimigo.move();

        if(inimigoVisivel) {
            inimigoAtual = parseInt(random(0,3));
            if(inimigoAtual > 2) {
            inimigoAtual = 0;
            }
            inimigo.velocidade = random(5,30);
        }

        
        if(personagem.estaColidindo(inimigo)) {
            noLoop();
            image(imagemGameOver, (width / 2) - 200, height / 2);
        }
    }
}