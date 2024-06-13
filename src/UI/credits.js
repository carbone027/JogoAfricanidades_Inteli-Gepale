export class credits extends Phaser.Scene {

    constructor () {
        super ({ key: 'credits' })
    }

    preload () {
      this.load.image('backgroundCredits', '../assets/backgroundCredits.png');
      this.load.image('homeButton', '../assets/homeButton.png');
    }
    create () {

      const background = this.add.image(0, 0, 'backgroundCredits')
      background.setOrigin(0,0);    
      

      const homeButton = this.add.image(this.cameras.main.width/2+350, this.cameras.main.height/2+180, 'homeButton').setOrigin().setInteractive();
        
        homeButton
            .on('pointerover', () => {
                homeButton.setScale(1.1);
            }, this)
            .on('pointerout', () => {
                homeButton.setScale(1.0);
            }, this)
            .on('pointerdown', () => {
                this.time.delayedCall(500, () => {
                    this.scene.start('firstScene')
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