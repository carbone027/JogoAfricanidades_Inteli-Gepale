export class secondScene extends Phaser.Scene {

  constructor () {
      super ({ key: 'secondScene' })
      this.pause = true
  }

  create () {
    this.background = this.add.image(0, 0, 'varanda').setOrigin(0, 0);
    this.salaEstar = this.add.image(0, 0, 'sala-estar').setOrigin(0,0).setAlpha(0);
    this.cozinha = this.add.image(0, 0, 'cozinha').setOrigin(0,0).setAlpha(0);
    this.salaJantar = this.add.image(0, 0, 'sala-jantar').setOrigin(0,0).setAlpha(0);
    this.escritorio = this.add.image(0, 0, 'escritorio').setOrigin(0,0).setAlpha(0);


    this.tweens.add ({
      targets: [this.salaEstar],
      alpha: 1, 
      duration: 500, 
      ease: 'Linear',  
    });
    
    this.time.delayedCall(3500, function() {
      this.tweens.add ({
        targets: [this.cozinha],
        alpha: 1, 
        duration: 500, 
        ease: 'Linear',  
      });  

      this.time.delayedCall(3500, function() {
        this.tweens.add ({
          targets: [this.salaJantar],
          alpha: 1, 
          duration: 500, 
          ease: 'Linear',  
        });

        this.time.delayedCall(3500, function() {   
          this.tweens.add ({
            targets: [this.escritorio],
            alpha: 1, 
            duration: 500, 
            ease: 'Linear',  
          });
          
          this.scene.start('thirdScene');
    
        }, [], this);

      }, [], this);

    }, [], this); 2
  }

}