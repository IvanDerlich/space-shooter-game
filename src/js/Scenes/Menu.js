/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */

import 'phaser';
import MenuButton from '../Objects/MenuButton';
import config from '../Objects/config';

import ScrollingBackground from '../Entities/ScrollingBackground';

import soundBtnOver from '../../../content/sndBtnOver.wav';
import sndBtnDown from '../../../content/sndBtnDown.wav';
import menuMusic from '../../../content/Music/Menu.wav';
import Text from '../Objects/Text';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu' });
  }

  preload() {
    this.load.audio('sndBtnOver', soundBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
    this.load.audio('menuMusic', menuMusic);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    const height = config.height / 2;
    new MenuButton(this, config.width / 2, height - 100, 'Play', 'Play');
    new MenuButton(this, config.width / 2, height, 'Options', 'Options');
    new MenuButton(this, config.width / 2, height + 100, 'Credits', 'Credits');
    new MenuButton(this, config.width / 2, height + 200, 'How to ...', 'Instructions');

    this.zone = this.add.zone(config.width / 2, height, config.width, config.height);
    new Text(this, 'SPACE SHOOTER', 48, config.width / 2 - 150);

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