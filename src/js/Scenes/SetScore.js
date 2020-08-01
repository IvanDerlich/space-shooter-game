/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */

import 'phaser';
import Text from '../Objects/Text';
import config from '../Objects/config';
import setScore from '../ExternalCommunication/setScore';
import ScrollingBackground from '../Entities/ScrollingBackground';


export default class AskPlayerNameScene extends Phaser.Scene {
  constructor() {
    super('SetScore');
  }

  create() {
    const height = config.height / 2;

    this.zone = this.add.zone(config.width / 2, height, config.width, config.height);

    this.text = new Text(this, 'Insert Username...', 20, height - 200);

    const input = document.getElementById('user-name-input');
    input.classList.remove('hide');

    this.button = this.add.image(130, 300, 'buttonOut');
    this.button.setInteractive();
    this.buttonText = this.add.text(0, 0, "SEND", { fontSize: '32px', fill: '#fff' });
    this.button.x = 230;
    this.button.y = 300;
    this.buttonText.x = 195;
    this.buttonText.y = 280;
    const { soundOn } = this.sys.game.globals.model;
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.button.on('pointerdown', () => {
      if (soundOn) this.sfx.btnDown.play();

      this.score = this.sys.game.globals.score;
      if (input.value.length > 17) {
        this.text.x = 40;
        this.text.setText("Name can't be longer than 17 chars");
      } else if (input.value.length < 1) {
        this.text.setText("Name can't be blank");
        this.text.x = 120;
      } else {
        input.classList.add('hide');
        this.text.x = 120;
        this.text.setText("Posting Score...");
        this.button.destroy();
        this.buttonText.destroy();
        const gameId = 'WQw8aJXQ7oC0nuqYBROD';
        setScore(gameId, input.value, this.score)
          .then(() => {
            this.scene.start('ScoreBoard');
          });
      }
    });

    this.button.on('pointerover', () => {
      if (soundOn) this.sfx.btnOver.play();
      this.button.setTexture('buttonOver');
    });

    this.button.on('pointerout', () => {
      this.button.setTexture('buttonOut');
    });

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