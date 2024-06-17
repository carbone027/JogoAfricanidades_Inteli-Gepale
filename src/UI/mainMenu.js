export class mainMenu extends Phaser.Scene {

    constructor () {
        super ({ key: 'mainMenu' })
    }

    preload() {
      this.load.image('background', '../assets/telaInicialBackground.png');
      this.load.image('startButton', '../assets/startButton.png');
      this.load.image('creditos', '../assets/creditos.png');
    }

    create () {
        window.previousScene = 'mainMenu'

        const background = this.add.image(0, 0, 'background')
        background.setOrigin(0,0);       

        // texto "Iniciar Jogo" e suas mecânicas de interatividade 
        const startButton = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2+120, 'startButton').setOrigin().setInteractive();
        
        startButton
            .on('pointerover', () => {
                startButton.setScale(1.1);
            }, this)
            .on('pointerout', () => {
                startButton.setScale(1.0);
            }, this)
            .on('pointerdown', () => {
                this.time.delayedCall(500, () => {
                    this.scene.start('mapa');
                }, [], this)
            }, this);
  

        // texto "Créditos" e suas mecânicas de interatividade
        const creditos = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2+190, 'creditos').setOrigin().setInteractive();

        creditos
            .on('pointerover', () => {
              creditos.setScale(1.1);
            }, this)
            .on('pointerout', () => {
              creditos.setScale(1.0);
            }, this)
            .on('pointerdown', () => {
               
                this.time.delayedCall(500, () => {
                    this.scene.start('credits')
                }, [], this)
            }, this);

            startButton.on('pointerover', () => {
              this.input.setDefaultCursor("pointer");
            });
            startButton.on('pointerout', () => {
              this.input.setDefaultCursor("default");
            });
    
            creditos.on('pointerover', () => {
              this.input.setDefaultCursor("pointer");
            });
            creditos.on('pointerout', () => {
              this.input.setDefaultCursor("default");
            });
    }

}