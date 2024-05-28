export class secondScene extends Phaser.Scene {

    constructor () {
        super ({ key: 'secondScene' })
    }

    create () {
        this.dadosQuiz = [
            {
                pergunta: "Qual é a capital da França?",
                respostas: ["Paris", "Londres", "Roma"],
                respostaCorreta: 0
            },
            {
                pergunta: "Qual é a maior planeta do Sistema Solar?",
                respostas: ["Terra", "Marte", "Júpiter"],
                respostaCorreta: 2
            },
            {
                pergunta: "Quem pintou a Mona Lisa?",
                respostas: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
                respostaCorreta: 1
            }
        ];

        this.i_questao = 0;
        this.textoFeedback = this.add.text(this.cameras.main.width/2, 500, '', {
            fontSize: '20px',
            color: '#fff9f0'
        }).setOrigin();

        this.mostrarPergunta();
    }

    mostrarPergunta() {
        const perguntaAtual = this.dadosQuiz[this.i_questao];
        this.textoQuestao = this.add.text(this.cameras.main.width/2, 100, perguntaAtual.pergunta, {
            fontSize: '20px',
            color: '#fff9f0',
            align: 'center',
        }).setOrigin();

        this.respostas = [];
        perguntaAtual.respostas.forEach((resposta, index) => {
            const botao = this.add.text(this.cameras.main.width/2, 200 + index * 50, resposta, {
                fontSize: '20px',
                color: '#fff9f0',
            }).setOrigin().setInteractive();

            botao.on('pointerover', () => {
                botao.setStyle({ fill: '#fcd8b6' });
            });
            botao.on('pointerout', () => {
                botao.setStyle({ fill: '#fff9f0' });
            });
            botao.on('pointerdown', () => {
                botao.setStyle({ fill: '#947b63' })
                this.checarResposta(index);
            });
            botao.on('pointerup', () => {
                botao.setStyle({ fill: '#fff9f0' })
            })

            this.respostas.push(botao);
        });
    }

    checarResposta(index) {
        const perguntaAtual = this.dadosQuiz[this.i_questao];
        const respostaCorreta = index === perguntaAtual.respostaCorreta;
        
        this.textoFeedback.setText(respostaCorreta ? "Correto!" : "Errado! A resposta correta é " + perguntaAtual.respostas[perguntaAtual.respostaCorreta]);
        
        this.time.delayedCall(1500, () => {
            this.proximaPergunta();
        });
    }

    proximaPergunta() {
        // Limpe a tela
        this.textoQuestao.destroy();
        this.respostas.forEach(button => button.destroy());
        this.textoFeedback.setText('');

        this.i_questao++;
        if (this.i_questao < this.dadosQuiz.length) {
            this.mostrarPergunta();
        } else {
            this.scene.start('mainMenu')
        }
    }

}