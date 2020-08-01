/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import 'phaser';

import config from './Objects/config';

import SceneSetScore from './Scenes/SetScore';
import SceneBoot from './Scenes/Boot';
import ScenePreloader from './Scenes/Preloader';
import SceneMenu from './Scenes/Menu';
import SceneGameOver from './Scenes/GameOver';
import ScenePlay from './Scenes/Play';
import SceneInstructions from './Scenes/Instructions';
import SceneCredits from './Scenes/Credits';
import SceneOptions from './Scenes/Options';
import SceneScoreBoard from './Scenes/ScoreBoard';
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
    this.scene.add('SceneScoreBoard', SceneScoreBoard);
    this.scene.add('SetScore', SceneSetScore);

    this.scene.start('Boot');
  }
}

window.game = new Game();