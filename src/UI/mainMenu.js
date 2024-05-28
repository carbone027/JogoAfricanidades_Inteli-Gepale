export class mainMenu extends Phaser.Scene {

    constructor () {
        super ({ key: 'mainMenu' })
    }

    create () {
        const texto_iniciarJogo = this.add.text(this.cameras.main.width/2, this.cameras.main.height/2, 'Iniciar Jogo', { fontSize: '60px', fill: '#fff9f0' })
        texto_iniciarJogo
            .setOrigin()
            .setInteractive()
        texto_iniciarJogo
            .on('pointerover', () => {
                texto_iniciarJogo.setStyle({ fill: '#fcd8b6' })
            }, this)
            .on('pointerout', () => {
                texto_iniciarJogo.setStyle({ fill: '#fff9f0' })
            }, this)
            .on('pointerdown', () => {
                texto_iniciarJogo.setStyle({ fill: '#947b63' })
                this.time.delayedCall(500, () => {
                    this.scene.start('firstScene')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                texto_iniciarJogo.setStyle({ fill: '#fcd8b6' })
            }, this)
    }

}