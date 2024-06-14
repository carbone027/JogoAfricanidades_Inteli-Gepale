import centroDeEventos from "../centroDeEventos.js";

export class thirdScene extends Phaser.Scene {

  constructor () {
      super ({ key: 'thirdScene' })
      this.pause = true
  }

  create () {
    this.escritorio = this.add.image(0, 0, 'escritorio').setOrigin(0,0);

    this.time.delayedCall(3500, function() {

      this.cameras.main
        .setZoom(3.2)
        .centerOn(835, 220)
      this.scene.pause()
      this.scene.launch('fourthScene')
      centroDeEventos.on('quizFinished', () => {
        this.scene.resume()
        this.scene.start('mainMenu')
        this.scene.stop()
      })

    }, [], this);
  }


}