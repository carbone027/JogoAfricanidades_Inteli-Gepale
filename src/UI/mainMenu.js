export class mainMenu extends Phaser.Scene {

    constructor () {
        super ({ key: 'mainMenu' })
    }

    create () {
        const logo = this.add.image(this.cameras.main.width/2, 160, 'logo')
        logo.setOrigin()       

        // texto "Iniciar Jogo" e suas mecânicas de interatividade 
        const texto_iniciarJogo = this.add.text(this.cameras.main.width/2, this.cameras.main.height/2, 'Iniciar Jogo', { fontSize: '54px', fill: '#fff9f0' })
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
        
        // texto "Opções" e suas mecânicas de interatividade
        const texto_config = this.add.text(this.cameras.main.width/2, 400, 'Configurações', { fontSize: '54px', fill: '#fff9f0' })
        texto_config
            .setOrigin()
            .setInteractive()
        texto_config
            .on('pointerover', () => {
                texto_config.setStyle({ fill: '#fcd8b6' })
            }, this)
            .on('pointerout', () => {
                texto_config.setStyle({ fill: '#fff9f0' })
            }, this)
            .on('pointerdown', () => {
                texto_config.setStyle({ fill: '#947b63' })
                this.time.delayedCall(500, () => {
                    this.scene.start('config')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                texto_config.setStyle({ fill: '#fcd8b6' })
            }, this)

        // texto "Créditos" e suas mecânicas de interatividade
        const texto_creditos = this.add.text(this.cameras.main.width/2, 480, 'Créditos', { fontSize: '54px', fill: '#fff9f0' })
        texto_creditos
            .setOrigin()
            .setInteractive()
            texto_creditos
            .on('pointerover', () => {
                texto_creditos.setStyle({ fill: '#fcd8b6' })
            }, this)
            .on('pointerout', () => {
                texto_creditos.setStyle({ fill: '#fff9f0' })
            }, this)
            .on('pointerdown', () => {
                texto_creditos.setStyle({ fill: '#947b63' })
                this.time.delayedCall(500, () => {
                    this.scene.start('credits')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                texto_creditos.setStyle({ fill: '#fcd8b6' })
            }, this)
    }

}