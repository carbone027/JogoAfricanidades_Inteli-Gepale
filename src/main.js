/* arquivo raiz do jogo, no qual são ditadas as configurações básicas do jogo, as cenas componentes dele, bem como criado o novo jogo */

import { preload } from './preload.js' // importa a cena de carregamento do jogo
import { mainMenu } from './UI/mainMenu.js' // importa a cena de menu inicial
import { firstScene } from './scenes/1.js' // importa a primeira cena
import { secondScene } from './scenes/2.js'

// configurações iniciais do jogo
let config = {
    type: Phaser.AUTO, // tipo de renderização: auutomática
    width: 1000, // largura da tela (1000 pixels)
    height: 640, // altura da tela (640 pixels)
    scale: {
        mode: Phaser.Scale.FIT // escala da tela: se adequar a tela do jogador
    },
    physics: { // define a física padrão aplicada no jogo
        default: 'arcade', 
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [ preload, mainMenu, firstScene, secondScene ] // lista as cenas presentes no jogo
}

const game = new Phaser.Game(config) // cria um novo jogo com as configurações declaradas