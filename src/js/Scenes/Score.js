/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */

import 'phaser';
import config from '../Objects/config';
import ScrollingBackground from '../Entities/ScrollingBackground';
import MenuButton from '../Objects/MenuButton';
import Text from '../Objects/Text';
import menuMusic from '../../../content/Music/Menu.wav';

import userNameInput from '../ExternalCommunication/usernameInput';
import setScore from '../ExternalCommunication/setScore';
import getScores from '../ExternalCommunication/getScores';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Score');
    this.userName = null;
  }

  preload() {
    this.load.audio('menuMusic', menuMusic);
  }

  create() {
    this.zone = this.add.zone(config.width / 2, height, config.width, config.height);
    this.fetching = new Text(this, 'Insert Username and press enter...', 20, height - 200);
    //document.getElementById('utext').style.display = 'block';

    this.score = this.sys.game.globals.score;
    
    //userNameInput(this);
    
    this.fetching.setText('Posting Score...');
    const gameId = 'WQw8aJXQ7oC0nuqYBROD';
    


    setScore(gameId, this.userName, this.score)
      .then(() => {
        this.fetching.setText('Fetching Scores...');
        return getScores(gameId);
      })
      .then(scores => {
        this.update();
        this.fetching.destroy();
        for (let i = 0; i < 10; i += 1) {
          new Text(this, `${i + 1} - ${scores[i].user}: ${scores[i].score}`, 20, height - 200 + 40 * i);
        }
        this.update();
      });
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    
    new Text(this, 'Score', 48, height - 300);

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
