export class firstScene extends Phaser.Scene {

    constructor () {
        super ({ key: 'firstScene' })
        this.pause = true
    }
    
    preload() {
      this.load.image('varanda', '../assets/varanda.png');
      this.load.image('avo', '../assets/avo.png');
      this.load.image('personagem', '../assets/personagem.png');
      this.load.image('dialogo1-personagem', '../assets/dialogo1-personagem.png');
      this.load.image('dialogo1-avo', '../assets/dialogo1-avo.png');
      this.load.image('dialogo2-personagem', '../assets/dialogo2-personagem.png');
      this.load.image('dialogo2-avo', '../assets/dialogo2-avo.png');
      this.load.image('botao-continuar', '../assets/botao-continuar.png');
    }

    create () {
      this.background = this.add.image(0, 0, 'varanda').setOrigin(0, 0);
      this.avo = this.add.image(200, 450, 'avo').setScale(0.5).setAlpha(0);
      this.personagem = this.add.image(840, 463, 'personagem').setScale(0.6).setAlpha(0);
      this.botao = this.add.image(225, 475, 'botao-continuar').setScale(0.5).setAlpha(0).setInteractive();
      this.botao2 = this.add.image(740, 475, 'botao-continuar').setScale(0.5).setAlpha(0).setInteractive();
      this.botao3 = this.add.image(225, 475, 'botao-continuar').setScale(0.5).setAlpha(0).setInteractive();
      this.botao4 = this.add.image(740, 475, 'botao-continuar').setScale(0.5).setAlpha(0).setInteractive();
      this.dialogo1Personagem = this.add.image(400, 400, 'dialogo1-personagem').setScale(0.5).setAlpha(0);
      this.dialogo1Avo = this.add.image(550, 400, 'dialogo1-avo').setScale(0.5).setAlpha(0);
      this.dialogo2Personagem = this.add.image(400, 400, 'dialogo2-personagem').setScale(0.5).setAlpha(0);
      this.dialogo2Avo = this.add.image(550, 400, 'dialogo2-avo').setScale(0.5).setAlpha(0);

      this.tweens.add ({
        targets: [this.dialogo1Personagem, this.botao, this.personagem],
        alpha: 1, 
        duration: 500, 
        ease: 'Linear',  
      });

      this.botao.on('pointerdown', () => { 

        //animação para tornar invisível o pop-up e o botão
        this.tweens.add ({
            targets: [this.dialogo1Personagem, this.botao, this.personagem],
            alpha: 0, 
            duration: 500, 
            ease: 'Linear',  

            // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
            onComplete: () => {

                this.tweens.add ({
                    targets: [this.dialogo1Avo, this.botao2, this.avo],
                    alpha: 1, 
                    duration: 500, 
                    ease: 'Linear'
                })
            }
        })
      })

        this.botao2.on('pointerdown', () => { 

          //animação para tornar invisível o pop-up e o botão
          this.tweens.add ({
              targets: [this.dialogo1Avo, this.botao2, this.avo],
              alpha: 0, 
              duration: 500, 
              ease: 'Linear',  
  
              // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
              onComplete: () => {
  
                  this.tweens.add ({
                      targets: [this.dialogo2Personagem, this.botao3, this.personagem],
                      alpha: 1, 
                      duration: 500, 
                      ease: 'Linear'
                  })
              }
          })
        })

        
        this.botao3.on('pointerdown', () => { 

          //animação para tornar invisível o pop-up e o botão
          this.tweens.add ({
              targets: [this.dialogo2Personagem, this.botao3, this.personagem],
              alpha: 0, 
              duration: 500, 
              ease: 'Linear',  
  
              // Comando estabelecendo outra ordem de comandos quando o anterior for concluído
              onComplete: () => {
  
                  this.tweens.add ({
                      targets: [this.dialogo2Avo, this.botao4, this.avo],
                      alpha: 1, 
                      duration: 500, 
                      ease: 'Linear'
                  })
              }
          });
        });
          
        this.botao4.on('pointerdown', () => { 
          this.time.delayedCall(500, () => {
            this.scene.start('secondScene')
          }, [], this)
          
        });
          



        this.botao.on('pointerover', () => {
          this.input.setDefaultCursor("pointer");
        });
        this.botao.on('pointerout', () => {
          this.input.setDefaultCursor("default");
        });

        this.botao2.on('pointerover', () => {
          this.input.setDefaultCursor("pointer");
        });
        this.botao2.on('pointerout', () => {
          this.input.setDefaultCursor("default");
        });

        this.botao3.on('pointerover', () => {
          this.input.setDefaultCursor("pointer");
        });
        this.botao3.on('pointerout', () => {
          this.input.setDefaultCursor("default");
        });

        this.botao4.on('pointerover', () => {
          this.input.setDefaultCursor("pointer");
        });
        this.botao4.on('pointerout', () => {
          this.input.setDefaultCursor("default");
        });


        
    }

}