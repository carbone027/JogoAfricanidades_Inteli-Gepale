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

        this.load.image('varanda', '../assets/varanda.png');
        this.load.image('sala-estar', '../assets/sala-estar.png');
        this.load.image('cozinha', '../assets/cozinha.png');
        this.load.image('sala-jantar', '../assets/sala-jantar.png');
        this.load.image('escritorio', '../assets/escritorio.png');

        this.load.image('escritorio', '../assets/escritorio.png');

        this.load.image('seta_vermelha','../assets/mentalMap/setaVermelha.png');
        this.load.image('mnu','../assets/mentalMap/mnu.png');
        this.load.image('oQue','../assets/mentalMap/oQueE.png');
        this.load.image('porque','../assets/mentalMap/porque.png');
        this.load.image('como','../assets/mentalMap/como.png');
        this.load.image('para','../assets/mentalMap/para.png');
    }

    // inicia a próxima cena após o carregamento
    create () {
        this.scene.start('mainMenu')
    }

}