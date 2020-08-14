/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import 'phaser';
import config from '../../Objects/config';
import ScrollingBackground from '../../Entities/ScrollingBackground';
import MenuButton from '../../Objects/MenuButton';
import menuMusic from '../../../../content/Music/Menu.wav';
import Text from '../../Objects/Text';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions3');
  }

  preload() {
    this.load.audio('menuMusic', menuMusic);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    const height = config.height / 2;
    this.zone = this.add.zone(config.width / 2, height, config.width, config.height);
    new Text(this, 'If your score is negative, ', 24, height - 250);
    new Text(this, ' you die die.', 24, height - 150);
    new Text(this, 'If you get killed by any enemy,', 24, height - 50);
    new Text(this, 'you better cry cry.', 24, height + 50);

    new MenuButton(this, config.width / 2, height + 250, 'Menu', 'Menu');
    new MenuButton(this, (config.width / 2) - 110, height + 150, 'Prev', 'Instructions2');

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
