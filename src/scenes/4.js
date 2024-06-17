export class fourthScene extends Phaser.Scene {

    constructor () {
        super ({ key: 'fourthScene' })
    }

    pressed1 = false;
    pressed2 = false;

    create(){
        //imagens do mapa mental
        this.mnu = this.add.image(300,640/2,'mnu').setScale(1/6);
        this.tweens.add({
            targets: this.mnu,
            alpha: 1,
            duration: 500,
            ease: 'linear'
           })

        this.oQue = this.add.image(600,200,'oQue').setScale(1/5).setOrigin(0,0.5).setAlpha(0);
        this.porque = this.add.image(600,400,'porque').setScale(1/5).setOrigin(0,0.5).setAlpha(0);

        this.como = this.add.image(600,190,'como').setScale(1/6).setOrigin(0,0.5).setAlpha(0);
        this.para = this.add.image(600,420,'para').setScale(1/6).setOrigin(0,0.5).setAlpha(0);


        //interações
        this.botaoMap1 = this.add.image(750, 640-10, 'botao-continuar').setScale(0.5).setOrigin(0,1).setInteractive();
        this.animarBotao(this.botaoMap1);
        this.botaoMap2 = this.add.image(750, 640-10, 'botao-continuar').setScale(0.5).setOrigin(0,1).setVisible(false);
        this.botaoMap3 = this.add.image(750, 640-10, 'botao-continuar').setScale(0.5).setOrigin(0,1).setVisible(false);

        this.botaoMap1.on('pointerdown',()=>{
            this.revealText(this.oQue,this.porque);
            this.pressed1 = true;
        })

        this.botaoMap2.on('pointerdown',()=>{
            this.destroyText(this.oQue,this.porque);
            this.revealText(this.como,this.para);
            this.pressed2 = true;
        })
        this.botaoMap3.on('pointerdown',()=>{
            this.destroyText(this.como,this.para);
            this.mnu.destroy();
            this.scene.start('fifthScene');
        })
    }

    update(){
        if(this.pressed1){
            this.botaoMap1.destroy();
            //adiciona um timer para que o jogador seja obrigado a ler o texto
            setTimeout(()=>{
                this.botaoMap2.setInteractive().setVisible(true);
                this.animarBotao(this.botaoMap2);
            },6000);
            this.pressed1 = false;
        }
        if(this.pressed2){
            this.botaoMap2.destroy();
            setTimeout(()=>{
                this.botaoMap3.setInteractive().setVisible(true);
                this.animarBotao(this.botaoMap3);
            },6000);
            this.pressed2 = false;
        }
    }

    revealText(text1,text2){
       this.tweens.add({
        targets: [text1,text2],
        alpha: 1,
        duration: 500,
        ease: 'linear'
       });
    }

    animarBotao(botao){
        this.tweens.add({
            targets: botao,
            scaleX: botao.scaleX * 1.05, // Aumenta a escala em 15%
            scaleY: botao.scaleY * 1.05,
            duration: 500, // duração em milissegundos
            yoyo: true, // faça a animação voltar ao estado original
            repeat: -1 // -1 para repetir indefinidamente
          });
    }

    destroyText(text1,text2){
        //destruo as imagens para limpar a memória
        text1.destroy();
        text2.destroy();
    }
}