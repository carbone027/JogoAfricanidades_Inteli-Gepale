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

        this.load.image('logo', '../assets/Logotipo/versao-3.png')
    }

    // inicia a próxima cena após o carregamento
    create () {
        this.scene.start('mainMenu')
    }

}