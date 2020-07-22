/*eslint no-undef: "Phaser*/
/*eslint no-undef: "Phaser*/
import('phaser');

import config from './Objects/config';

import SceneBoot from './Scenes/Boot';
import ScenePreloader from './Scenes/Preloader';
import SceneMenu from './Scenes/Menu';
import SceneGameOver from './Scenes/GameOver';
import ScenePlay from './Scenes/Play';
import SceneInstructions from './Scenes/Instructions';
import SceneCredits from './Scenes/Credits';
import SceneOptions from './Scenes/Options';
import SceneScore from './Scenes/Score';
import globals from './Objects/globals';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.globals = globals;

    this.scene.add('Instructions', SceneInstructions);
    this.scene.add('Credits', SceneCredits);
    this.scene.add('Boot', SceneBoot);
    this.scene.add('Preloader', ScenePreloader);
    this.scene.add('MainMenu', SceneMenu);
    this.scene.add('Play', ScenePlay);
    this.scene.add('GameOver', SceneGameOver);
    this.scene.add('Options', SceneOptions);
    this.scene.add('SceneScore', SceneScore);

    this.scene.start('Boot');
  }
}

window.game = new Game();