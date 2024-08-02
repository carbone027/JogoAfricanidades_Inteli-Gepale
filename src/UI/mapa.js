export class mapa extends Phaser.Scene {

    constructor () {
        super ({ key: 'mapa' })
    }

    preload() {
      this.load.image('mapaBackground', '././assets/mapa.png');
      this.load.image('fase1Button', '././assets/fase1Button.png');
      this.load.image('homeButton', '././assets/homeButton.png');
    }

    create () {
        window.previousScene = 'mainMenu'

        const background = this.add.image(0, 0, 'mapaBackground')
        background.setOrigin(0,0);       

        // texto "Iniciar Jogo" e suas mecânicas de interatividade 
        const fase1Button = this.add.image(214, 145, 'fase1Button').setOrigin().setInteractive();
        
        fase1Button
            .on('pointerover', () => {
                fase1Button.setScale(1.1);
            }, this)
            .on('pointerout', () => {
                fase1Button.setScale(1.0);
            }, this)
            .on('pointerdown', () => {
                this.time.delayedCall(500, () => {
                    this.scene.start('firstScene')
                }, [], this)
            }, this);
          
          fase1Button.on('pointerover', () => {
              this.input.setDefaultCursor("pointer");
          });
          fase1Button.on('pointerout', () => {
            this.input.setDefaultCursor("default");
          });
  
        const homeButton = this.add.image(this.cameras.main.width/2+400, this.cameras.main.height/2+230, 'homeButton').setOrigin().setInteractive();
        
        homeButton
            .on('pointerover', () => {
                homeButton.setScale(1.1);
            }, this)
            .on('pointerout', () => {
                homeButton.setScale(1.0);
            }, this)
            .on('pointerdown', () => {
                this.time.delayedCall(500, () => {
                    this.scene.start('mainMenu')
                }, [], this)
            }, this);

            homeButton.on('pointerover', () => {
              this.input.setDefaultCursor("pointer");
            });
            homeButton.on('pointerout', () => {
              this.input.setDefaultCursor("default");
            });

 

    }

}