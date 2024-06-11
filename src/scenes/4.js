import centroDeEventos from "../centroDeEventos.js";

export class fourthScene extends Phaser.Scene {

    constructor () {
        super ({ key: 'fourthScene' })
    }

    create () {

        this.dadosQuiz = [
            {
                pergunta: "Em qual local surgiu o Movimento Negro\nUnificado?",
                respostas: ["Praça dos Orixás no Distrito Federal", "Escadarias do Teatro Municipal de São Paulo.", "Praça da república em São Paulo", "Cais do Valongo no Rio de Janeiro"],
                respostaCorreta: 1
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
            fontSize: '24px',
            color: '#000000',
            align: 'center'
        }).setOrigin();

        this.mostrarPergunta();
    }

    mostrarPergunta() {
        const perguntaAtual = this.dadosQuiz[this.i_questao];
        this.textoQuestao = this.add.text(this.cameras.main.width/2, 120, perguntaAtual.pergunta, {
            fontSize: '32px',
            color: '#000000',
            fontWeight: 'bold',
            align: 'center',
        }).setOrigin();

        this.respostas = [];
        perguntaAtual.respostas.forEach((resposta, index) => {
            const botao = this.add.text(this.cameras.main.width/2, 220 + index * 50, resposta, {
                fontSize: '24px',
                color: '#000000',
            }).setOrigin().setInteractive();

            botao.on('pointerover', () => {
                botao.setStyle({ fill: '#525252', fontSize: '28px' });
            });
            botao.on('pointerout', () => {
                botao.setStyle({ fill: '#000000', fontSize: '24px' });
            });
            botao.on('pointerdown', () => {
                botao.setStyle({ fill: '#919191', fontSize: '24px' })
                this.checarResposta(index);
            });
            botao.on('pointerup', () => {
                botao.setStyle({ fill: '#525252', fontSize: '28px' })
            })

            this.respostas.push(botao);
        });
    }

    checarResposta(index) {
        const perguntaAtual = this.dadosQuiz[this.i_questao];
        const respostaCorreta = index === perguntaAtual.respostaCorreta;
        
        this.textoFeedback.setText(respostaCorreta ? "Correto!" : "Errado! A resposta correta é\n" + perguntaAtual.respostas[perguntaAtual.respostaCorreta]);
        
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
            centroDeEventos.emit('quizFinished')
            this.scene.stop()
        }
    }

}