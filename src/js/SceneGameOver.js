import 'phaser';
import ScrollingBackground from './Entities/ScrollingBackground'

import soundBtnOver from '../../content/sndBtnOver.wav'
import sndBtnDown from '../../content/sndBtnDown.wav'

import sprBtnPlay from '../../content/sprBtnPlay.png';
import sprBtnPlayHover from '../../content/sprBtnPlayHover.png';
import sprBtnPlayDown from '../../content/sprBtnPlayDown.png';
import sprBtnRestart from '../../content/sprBtnRestart.png';
import sprBtnRestartHover from '../../content/sprBtnRestartHover.png';
import sprBtnRestartDown from '../../content/sprBtnRestartDown.png';

import sprBg0 from '../../content/sprBg0.png';
import sprBg1 from '../../content/sprBg1.png';

export default class SceneGameOver extends Phaser.Scene {

  constructor() {
    super({ key: "SceneGameOver" });
  }

  preload() {
    this.load.image("sprBtnPlay", sprBtnPlay);
    this.load.image("sprBtnPlayHover", sprBtnPlayHover);
    this.load.image("sprBtnPlayDown", sprBtnPlayDown);
    this.load.image("sprBtnRestart", sprBtnRestart);
    this.load.image("sprBtnRestartHover", sprBtnRestartHover);
    this.load.image("sprBtnRestartDown", sprBtnRestartDown);

    this.load.audio("sndBtnOver", soundBtnOver);
    this.load.audio("sndBtnDown", sndBtnDown);

    this.load.image("sprBg0", sprBg0);
    this.load.image("sprBg1", sprBg1);
  }

  create() {
    //this.scene.start("SceneMain");
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnRestart"
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerover", function() {
      this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on("pointerout", function() {
      this.setTexture("sprBtnRestart");
    });

    this.btnRestart.on("pointerdown", function() {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on("pointerup", function() {
      this.btnRestart.setTexture("sprBtnRestart");
      this.scene.start("SceneMain");
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var keys = ["sprBg0", "sprBg1"];
      var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      var bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }
  update(){
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}