/* eslint-disable no-new */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import 'phaser';
import ScrollingBackground from '../Entities/ScrollingBackground';
import MenuButton from '../Objects/MenuButton';
import config from '../Objects/config';
import Text from '../Objects/Text';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    const height = config.height / 2;
    new MenuButton(this, config.width / 2, height, 'Restart', 'Play');
    new MenuButton(this, config.width / 2, height + 100, 'Menu', 'Menu');
    new MenuButton(this, config.width / 2, height + 200, '+Score', 'SetScore');

    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
    new Text(this, 'GAME OVER', 48, (config.height / 2) - 200);
    new Text(this, `SCORE: ${this.sys.game.globals.score}`, 48, (config.height / 2) - 100);

    this.keyW = 'w';
    this.keyS = 's';
    this.keyA = 'a';
    this.keyD = 'd';
    this.keySpace = ' ';

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('menuMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}