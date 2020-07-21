/* eslint-disable no-new */

import('phaser')
import MenuButton from '../Objects/MenuButton';
import config from '../Objects/config';

import ScrollingBackground from '../Entities/ScrollingBackground';

import checkBoxUnchecked from '../../../content/checkBoxUnchecked.png';
import checkBoxChecked from '../../../content/checkBoxChecked.png';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  preload() {
    this.load.image('checkBoxUnchecked', checkBoxUnchecked);
    this.load.image('checkBoxChecked', checkBoxChecked);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.model = this.sys.game.globals.model;

    this.title = this.add.text(150, 100, 'Options', { fontSize: 40 });

    this.musicButton = this.add.image(130, 200, 'checkBoxUnchecked');
    this.musicButton.setInteractive();
    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.add.text(180, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(130, 300, 'checkBoxUnchecked');
    this.soundButton.setInteractive();
    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
      this.scene.start('Options');
    });

    this.add.text(180, 290, 'Sound Enabled', { fontSize: 24 });

    this.updateAudio();

    new MenuButton(this, config.width / 2, config.height / 2 + 100, 'Menu', 'Menu');

    this.updateAudio();

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('checkBoxUnchecked');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkBoxChecked');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('checkBoxUnchecked');
    } else {
      this.soundButton.setTexture('checkBoxChecked');
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
