import centroDeEventos from "../centroDeEventos.js"

export class pause extends Phaser.Scene {

    constructor () {
        super ({ key: 'pause' })
    }

    create () {
        const previousScene = window.previousScene
        centroDeEventos.on('pause_voltar', () => {
            window.previousScene = previousScene
        })

        const fundo = this.add.image(this.cameras.main.width/2, this.cameras.main.height/2, 'fundoPausa').setOrigin()
        const logo = this.add.image(this.cameras.main.width/2, 16+fundo.height/4, 'logo_alt').setOrigin()

        const menuInicial = this.add.text(this.cameras.main.width/2, 64+fundo.height/2, 'Voltar ao\nMenu Inicial', { fontSize: '34px', fill: 'black', align: 'center' })
            .setOrigin()
            .setInteractive()
        const config = this.add.text(this.cameras.main.width/2, 160+fundo.height/2, 'Configurações', { fontSize: '34px', fill: 'black' })
            .setOrigin()
            .setInteractive()
        const voltar = this.add.text(this.cameras.main.width/2, 256+fundo.height/2, 'Voltar', { fontSize: '34px', fill: 'black' })
            .setOrigin()
            .setInteractive()

        menuInicial
            .on('pointerover', () => {
                menuInicial.setStyle({ fontSize: '38px', fill: '#525252' })
            }, this)
            .on('pointerout', () => {
                menuInicial.setStyle({ fontSize: '32px', fill: 'black' })
            }, this)
            .on('pointerdown', () => {
                menuInicial.setStyle({ fontSize: '32px', fill: '#919191' })
                this.time.delayedCall(500, () => {
                    this.scene.stop(window.previousScene)
                    this.scene.start('mainMenu')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                menuInicial.setStyle({ fontSize: '38px', fill: '#525252' })
            }, this)
        config
            .on('pointerover', () => {
                config.setStyle({ fontSize: '38px', fill: '#525252' })
            }, this)
            .on('pointerout', () => {
                config.setStyle({ fontSize: '32px', fill: 'black' })
            }, this)
            .on('pointerdown', () => {
                config.setStyle({ fontSize: '32px', fill: '#919191' })
                this.time.delayedCall(500, () => {
                    window.previousScene = 'pause'
                    this.scene.start('config')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                config.setStyle({ fontSize: '38px', fill: '#525252' })
            }, this)
        voltar
            .on('pointerover', () => {
                voltar.setStyle({ fontSize: '38px', fill: '#525252' })
            }, this)
            .on('pointerout', () => {
                voltar.setStyle({ fontSize: '32px', fill: 'black' })
            }, this)
            .on('pointerdown', () => {
                voltar.setStyle({ fontSize: '32px', fill: '#919191' })
                this.time.delayedCall(500, () => {
                    this.scene.resume(window.previousScene)
                    centroDeEventos.emit('continuar')
                    this.scene.stop()
                    
                }, [], this)
            }, this)
            .on('pointerup', () => {
                voltar.setStyle({ fontSize: '38px', fill: '#525252' })
            }, this)
    }

}