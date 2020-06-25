class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemTelaInicial();
        this._texto();
        this._botao();
    }

    _imagemTelaInicial() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign('center');
        textSize(50);
        text('As aventuras de', (width /2), 100);
        textSize(100);
        text('Hipsta', (width/2), 200);
    }

    _botao() {
        botaoGerenciador.y = height / 7*5;
        botaoGerenciador.draw();
    }
}