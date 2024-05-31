export class credits extends Phaser.Scene {

    constructor () {
        super ({ key: 'credits' })
    }

    create () {
        let coluna_design = this.cameras.main.width/5
        let coluna_arte = this.cameras.main.width/2
        let coluna_prog = 4*this.cameras.main.width/5
        let alturaColunas = 128
        let tamanhoTexto_titulo = '34px'
        let tamanhoTexto_normal = '28px'
        let corTexto_base = '#fff9f0'

        const texto_creditos = this.add.text(this.cameras.main.width/2, 64, 'Créditos', { fontSize: '40px', fill: corTexto_base }).setOrigin()

        const design = this.add.text(coluna_design, alturaColunas, 'Design', { fontSize: tamanhoTexto_titulo, fill: corTexto_base }).setOrigin()
        const nomes_design = ['Davi', 'Isaac', 'João', 'Jonathan', 'Lavínia', 'Lívia', 'Thiago']
        nomes_design.forEach(
            nome => {
                this.add.text(coluna_design, alturaColunas+42+nomes_design.indexOf(nome)*28, nome, { fontSize: tamanhoTexto_normal, fill: corTexto_base }).setOrigin()
            }
        )

        const arte = this.add.text(coluna_arte, alturaColunas, 'Arte', { fontSize: tamanhoTexto_titulo, fill: corTexto_base }).setOrigin()
        const nomes_arte = ['Davi', 'Jonathan', 'Thiago']
        nomes_arte.forEach(
            nome => {
                this.add.text(coluna_arte, alturaColunas+42+nomes_arte.indexOf(nome)*28, nome, { fontSize: tamanhoTexto_normal, fill: corTexto_base }).setOrigin()
            }
        )

        const programacao = this.add.text(coluna_prog, alturaColunas, 'Programação', { fontSize: tamanhoTexto_titulo, fill: corTexto_base }).setOrigin()
        const nomes_prog = ['João']
        nomes_prog.forEach(
            nome => {
                this.add.text(coluna_prog, alturaColunas+42+nomes_prog.indexOf(nome)*28, nome, { fontSize: tamanhoTexto_normal, fill: corTexto_base }).setOrigin()
            }
        )

        const orientadores = this.add.text(coluna_prog, nomes_prog.length*28+alturaColunas+64, 'Orientadores', { fontSize: tamanhoTexto_titulo, fill: corTexto_base }).setOrigin()
        const nomes_orientadores = ['Fabiana', 'Julia', 'Robson', 'Vinicius']
        nomes_orientadores.forEach(
            nome => {
                this.add.text(coluna_prog, nomes_prog.length*28+alturaColunas+106+nomes_orientadores.indexOf(nome)*28, nome, { fontSize: tamanhoTexto_normal, fill: corTexto_base }).setOrigin()
            }
        )

        const texto_producao = this.add.text(this.cameras.main.width/2, 512, 'Uma produção Gepale (Grupo de Estudos e Pesquisas em Política e Avaliação Educacional)\ne Inteli (Instituto de Tecnologia e Liderança)', { fontSize: '18px', fill: '#fff9f0', align: 'center' }).setOrigin()

        const texto_voltar = this.add.text(this.cameras.main.width/2, 576, 'Voltar', { fontSize: tamanhoTexto_titulo, fill: corTexto_base })
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

}