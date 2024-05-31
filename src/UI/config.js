export class config_ extends Phaser.Scene {
    
    constructor () {
        super({ key: 'config' })
    }

    create() {
        let fontSize = '28px'
        let volume1 = 100
        let width = 150
        const texto_audio = this.add.text(this.cameras.main.width/2, 64, 'Áudio', { fontSize: '34px', fill: '#fff9f0' }).setOrigin()

        // textos disponibilizados para o slider de volume
        const texto_musica = this.add.text(width, 114, 'Volume da Música', { fontSize: fontSize, fill: '#fff9f0' })
        const fundo_slider1 = this.add.rectangle(width + 390, 128, 200, 8, 0x888888).setOrigin()
        const thumb_slider1 = this.add.rectangle(width + 490, 128, 15, 20, 0xffffff)
            .setInteractive()
            .setOrigin()
        const texto_volume1 = this.add.text(width + 520, 114, `${volume1}`, { fontSize: fontSize, fill: '#fff9f0' })
        // mecânica da interatividade do slider de volume
        this.input.setDraggable(thumb_slider1);
        this.input.on('drag', (pointer, gameObject) => {
            if (gameObject === thumb_slider1) {
                this.atualizarSlider(pointer, fundo_slider1, thumb_slider1, volume1, texto_volume1);
            }
        });
        fundo_slider1.setInteractive();
        fundo_slider1.on('pointerdown', (pointer) => {
            this.atualizarSlider(pointer, fundo_slider1, thumb_slider1, volume1, texto_volume1);
        });

        let volume2 = 100
        const texto_SFX = this.add.text(width, 148, 'Volume dos SFX', { fontSize: fontSize, fill: '#fff9f0' })
        const fundo_slider2 = this.add.rectangle(width + 360, 162, 200, 8, 0x888888).setOrigin()
        const thumb_slider2 = this.add.rectangle(width + 460, 162, 15, 20, 0xffffff)
            .setInteractive()
            .setOrigin()
        const texto_volume2 = this.add.text(width + 490, 148, `${volume2}`, { fontSize: fontSize, fill: '#fff9f0' })
        // mecânica da interatividade do slider de volume
        this.input.setDraggable(thumb_slider2);
        this.input.on('drag', (pointer, gameObject) => {
            if (gameObject === thumb_slider2) {
                this.atualizarSlider(pointer, fundo_slider2, thumb_slider2, volume2, texto_volume2);
            }
        });
        fundo_slider2.setInteractive();
        fundo_slider2.on('pointerdown', (pointer) => {
            this.atualizarSlider(pointer, fundo_slider2, thumb_slider2, volume2, texto_volume2);
        });

        const texto_voltar = this.add.text(this.cameras.main.width/2, 576, 'Voltar', { fontSize: '34px', fill: '#fff9f0' })
            .setOrigin()
            .setInteractive()
        texto_voltar
            .on('pointerover', () => {
                texto_voltar.setStyle({ fontSize: '38px', fill: '#fcd8b6' })
            }, this)
            .on('pointerout', () => {
                texto_voltar.setStyle({ fontSize: '34px', fill: '#fff9f0' })
            }, this)
            .on('pointerdown', () => {
                texto_voltar.setStyle({ fontSize: '34px', fill: '#947b63' })
                this.time.delayedCall(500, () => {
                    this.scene.start(window.previousScene)
                }, [], this)
            }, this)
            .on('pointerup', () => {
                texto_voltar.setStyle({ fontSize: '38px', fill: '#fcd8b6' })
            }, this)
    }

    atualizarSlider (pointer, fundo_slider, thumb_slider, volume, texto) {
        if (pointer.x >= fundo_slider.x - fundo_slider.width / 2 && pointer.x <= fundo_slider.x + fundo_slider.width / 2) {
            thumb_slider.x = pointer.x;
            volume = (pointer.x - (fundo_slider.x - fundo_slider.width / 2)) / fundo_slider.width;
            // musica.setVolume(volume)
            this.time.delayedCall(250, () => {
                texto.setText(volume.toFixed(2)*100)
            }, [], this)
        }
    }

}