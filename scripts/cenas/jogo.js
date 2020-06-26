class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 25, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width + 100, 30, 52, 52, 104, 104, 10);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 30);
        
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
        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;

        personagem.exibe();
        personagem.aplicaGravidade();
        vida.draw();
        
        inimigo.exibe();
        inimigo.move();

        if(inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if(this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        
        if(personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.ficaInvencivel();
            
            if(vida.vidas === 0)
            {
                image(imagemGameOver, (width / 2) - 200, height / 2);
                noLoop();
            }
        }
    }
}