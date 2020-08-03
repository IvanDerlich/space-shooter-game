/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import 'phaser';
import config from '../Objects/config';
import ScrollingBackground from '../Entities/ScrollingBackground';
import MenuButton from '../Objects/MenuButton';
import Text from '../Objects/Text';
import menuMusic from '../../../content/Music/Menu.wav';

import getScores from '../ExternalCommunication/getScores';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('ScoreBoard');
    this.userName = null;
  }

  preload() {
    this.load.audio('menuMusic', menuMusic);
  }

  create() {
    const height = config.height / 2;
    this.zone = this.add.zone(config.width / 2, height, config.width, config.height);
    this.text = new Text(this, 'Fetching Scores...', 20, height - 200);

    const gameId = 'WQw8aJXQ7oC0nuqYBROD';
    getScores(gameId)
      .then(scores => {
        this.update();
        this.text.destroy();
        for (let i = 0; i < 10; i += 1) {
          new Text(this, `${i + 1} - ${scores[i].user}: ${scores[i].score}`, 20, (height - 200) + (40 * i));
        }
        this.update();
      });

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    new Text(this, 'Scores', 48, height - 300);

    new MenuButton(this, config.width / 2, height + 250, 'Menu', 'Menu');

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
