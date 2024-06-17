/* arquivo raiz do jogo, no qual são ditadas as configurações básicas do jogo, as cenas componentes dele, bem como criado o novo jogo */

import { preload } from './preload.js' // importa a cena de carregamento do jogo
import { mainMenu } from './UI/mainMenu.js'// importa a cena de menu inicial
import { mapa } from './UI/mapa.js'  
import { firstScene } from './scenes/1.js' // importa a primeira cena
import { secondScene } from './scenes/2.js'
import { thirdScene } from './scenes/3.js'
import { fourthScene } from './scenes/4.js'
import { fifthScene} from './scenes/5.js'
import { credits } from './UI/credits.js'
import { finalMenu } from './UI/finalMenu.js'

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
    scene: [ preload, mainMenu, credits,mapa, firstScene, secondScene, thirdScene, fourthScene, fifthScene, finalMenu] // lista as cenas presentes no jogo
}

const game = new Phaser.Game(config); // cria um novo jogo com as configurações declaradas