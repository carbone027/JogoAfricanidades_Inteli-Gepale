export class firstScene extends Phaser.Scene {

    constructor () {
        super ({ key: 'firstScene' })
        this.pause = true
    }

    create () {
        this.i = 0
        this.i_texto = 0
        this.textos = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum\ndignissim tempor. Maecenas rhoncus maximus leo, dapibus placerat tortor\nsollicitudin.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis est erat.\nIn interdum metus sit amet vulputate convallis. Integer laoreet ipsum\nvitae nulla gravida pharetra. Vivamus semper est et."
        ]
        this.textoDigitado = this.add.text(30, 450, '', {
            fontSize: '20px',
            color: '#fff9f0'
        })
        const velocidadeDigitacao = 80
        this.evento_digitarTexto = this.time.addEvent({
            delay: velocidadeDigitacao,
            loop: true,
            callback: this.digitarTexto,
            callbackScope: this
        })

        this.input.on('pointerdown', this.mostrarTexto, this)

        this.botao = this.add.image(940, 570, 'botao')
            .setScale(0.2)
            .setInteractive()
            .setVisible(false)
        this.botao
            .on('pointerover', () => {
                this.botao.setTexture('botaoSobreposto')
            })
            .on('pointerout', () => {
                this.botao.setTexture('botao')
            })
            .on('pointerdown', () => {
                this.botao.setTexture('botaoPressionado')
                this.time.delayedCall(500, () => {
                    this.scene.start('secondScene')
                }, [], this)
            })
            .on('pointerup', () => {
                this.botao.setTexture('botaoSobreposto')
            })
    }

    digitarTexto() {
        const textoAtual = this.textos[this.i_texto]
        if (this.i < textoAtual.length) {
            this.textoDigitado.text += textoAtual.charAt(this.i);
            this.i++;
        } else {
            this.evento_digitarTexto.remove()
            this.mostrarProximoTexto()
        }
    }

    mostrarTexto() {
        if (this.pause) {
            const textoAtual = this.textos[this.i_texto]
            this.textoDigitado.text = textoAtual
            this.evento_digitarTexto.remove()
            this.pause = false
        } else if (!this.pause) {
            this.mostrarProximoTexto()
            this.pause = true
        }
    }

    mostrarProximoTexto() {
        console.log(this.i_texto)
        this.i_texto++
        if (this.i_texto < this.textos.length) {
            this.i = 0;
            this.textoDigitado.text = '';

            const velocidadeDigitacao = 80;
            this.evento_digitarTexto = this.time.addEvent({
                delay: velocidadeDigitacao,
                loop: true,
                callback: this.digitarTexto,
                callbackScope: this
            });
        } else if (this.i_texto >= this.textos.length) {
            this.i_texto -= 1
            this.botao.setVisible(true)
            const textoAtual = this.textos[this.i_texto]
            this.textoDigitado.text = textoAtual
            this.evento_digitarTexto.remove()
        }
    }

}