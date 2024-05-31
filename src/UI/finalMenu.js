export class finalMenu extends Phaser.Scene {

    constructor () {
        super ({ key: 'finalMenu' })
    }

    create () {
        window.previousScene = 'finalMenu'

        let tamanhoTexto_titulo = '34px'
        let tamanhoTexto_normal = '28px'
        let corTexto_base = '#fff9f0'
        let corTexto_selecionado = '#fcd8b6'
        let corTexto_pressionado = '#947b63'

        const logo = this.add.image(this.cameras.main.width/2, 160, 'logo')
        logo.setOrigin()  

        const parabens = this.add.text(this.cameras.main.width/2, this.cameras.main.height/2, 'Parabéns! Você concluiu o jogo com sucesso!', { fontSize: tamanhoTexto_titulo, fill: corTexto_base }).setOrigin()

        const menu = this.add.text(2*this.cameras.main.width/3, 480, 'Ir para o\nMenu Inicial', { fontSize: tamanhoTexto_normal, fill: corTexto_base, align: 'center' })
            .setOrigin()
            .setInteractive()
        const creditos = this.add.text(this.cameras.main.width/3, 480, 'Ver Créditos', { fontSize: tamanhoTexto_normal, fill: corTexto_base })
            .setOrigin()
            .setInteractive()

        menu
            .on('pointerover', () => {
                menu.setStyle({ fontSize: '32px', fill: corTexto_selecionado })
            }, this)
            .on('pointerout', () => {
                menu.setStyle({ fontSize: tamanhoTexto_normal, fill: corTexto_base })
            }, this)
            .on('pointerdown', () => {
                menu.setStyle({ fontSize: tamanhoTexto_normal, fill: corTexto_pressionado })
                this.time.delayedCall(500, () => {
                    this.scene.start('mainMenu')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                menu.setStyle({ fontSize: '32px', fill: corTexto_selecionado })
            }, this)
        creditos
            .on('pointerover', () => {
                creditos.setStyle({ fontSize: '32px', fill: corTexto_selecionado })
            }, this)
            .on('pointerout', () => {
                creditos.setStyle({ fontSize: tamanhoTexto_normal, fill: corTexto_base })
            }, this)
            .on('pointerdown', () => {
                creditos.setStyle({ fontSize: tamanhoTexto_normal, fill: corTexto_pressionado })
                this.time.delayedCall(500, () => {
                    this.scene.start('credits')
                }, [], this)
            }, this)
            .on('pointerup', () => {
                creditos.setStyle({ fontSize: '32px', fill: corTexto_selecionado })
            }, this)
    }

}