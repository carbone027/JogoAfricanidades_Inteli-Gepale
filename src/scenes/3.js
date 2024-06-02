export class thirdScene extends Phaser.Scene {

  constructor () {
      super ({ key: 'thirdScene' })
      this.pause = true
  }
  
  preload() {
    this.load.image('escritorio', '../assets/escritorio.png');
  }

  create () {
    this.escritorio = this.add.image(0, 0, 'escritorio').setOrigin(0,0);

    this.time.delayedCall(3500, function() {   
    
      this.scene.start('fourthScene');

    }, [], this);
  }

  
}