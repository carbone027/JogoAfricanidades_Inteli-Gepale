/* arquivo que denota a cena de carregamento do jogo */

export class preload extends Phaser.Scene{

    constructor () {
        super ({ key: 'preload' }) // define o nome pelo qual a cena será chamada em outras partes do jogo
    }

    // função de carregamento do jogo
    preload () {
        this.load.image('botao', '../assets/botao_padrao/botao_prototipo.png')
        this.load.image('botaoSobreposto', '../assets/botao_padrao/botao_prototipo-over.png')
        this.load.image('botaoPressionado', '../assets/botao_padrao/botao_prototipo-click.png')

        this.load.image('logo', '../assets/logo-teste-temporario.png')
        this.load.image('logo_alt', '../assets/logo-teste-temporario2.png')

        this.load.image('pausa', '../assets/botao_pause/pause.png')
        this.load.image('pausa_selecionado', '../assets/botao_pause/pause_selecionado.png')
        this.load.image('pausa_pressionado', '../assets/botao_pause/pause_pressionado.png')

        this.load.image('fundoPausa', '../assets/fundo_pause.png')
    }

    // inicia a próxima cena após o carregamento
    create () {
        this.scene.start('mainMenu')
    }

}