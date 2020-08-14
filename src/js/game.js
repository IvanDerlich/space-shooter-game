/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import 'phaser';

import config from './Objects/config';

import SceneSetScore from './Scenes/SetScore';
import SceneLoading from './Scenes/Loading';
import SceneMenu from './Scenes/Menu';
import SceneGameOver from './Scenes/GameOver';
import ScenePlay from './Scenes/Play';
import SceneInstructions1 from './Scenes/Instructions/1';
import SceneInstructions2 from './Scenes/Instructions/2';
import SceneInstructions3 from './Scenes/Instructions/3';
import SceneCredits from './Scenes/Credits';
import SceneOptions from './Scenes/Options';
import SceneScoreBoard from './Scenes/ScoreBoard';
import globals from './Objects/globals';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.globals = globals;

    this.scene.add('Instructions1', SceneInstructions1);
    this.scene.add('Instructions2', SceneInstructions2);
    this.scene.add('Instructions3', SceneInstructions3);
    this.scene.add('Credits', SceneCredits);
    this.scene.add('Loading', SceneLoading);
    this.scene.add('MainMenu', SceneMenu);
    this.scene.add('Play', ScenePlay);
    this.scene.add('GameOver', SceneGameOver);
    this.scene.add('Options', SceneOptions);
    this.scene.add('SceneScoreBoard', SceneScoreBoard);
    this.scene.add('SetScore', SceneSetScore);

    this.scene.start('Loading');
  }
}

window.game = new Game();