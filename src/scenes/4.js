import centroDeEventos from "../centroDeEventos.js";

export class fourthScene extends Phaser.Scene {

    constructor () {
        super ({ key: 'fourthScene' })
    }

    pressed1 = false;
    pressed2 = false;

    create(){
        //imagens do mapa mental
        this.mnu = this.add.image(300,640/2,'mnu').setScale(1/6);

        this.oQue = this.add.image(600,200,'oQue').setScale(1/5).setOrigin(0,0.5).setVisible(false);
        this.porque = this.add.image(600,400,'porque').setScale(1/5).setOrigin(0,0.5).setVisible(false);

        this.como = this.add.image(600,190,'como').setScale(1/6).setOrigin(0,0.5).setVisible(false);
        this.para = this.add.image(600,420,'para').setScale(1/6).setOrigin(0,0.5).setVisible(false);


        //interações
        this.botaoMap1 = this.add.image(750, 640-10, 'botao-continuar').setScale(0.5).setOrigin(0,1).setInteractive();
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
            },6000);
            this.pressed1 = false;
        }
        if(this.pressed2){
            this.botaoMap2.destroy();
            setTimeout(()=>{
                this.botaoMap3.setInteractive().setVisible(true);
            },6000);
            this.pressed2 = false;
        }
    }

    revealText(text1,text2){
     text1.setVisible(true);
     text2.setVisible(true);   
    }

    destroyText(text1,text2){
        text1.destroy();
        text2.destroy();
    }

}