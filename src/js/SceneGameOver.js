import 'phaser';
import ScrollingBackground from './Entities/ScrollingBackground'

export default class SceneGameOver extends Phaser.Scene {

  constructor() {
    super({ key: "SceneGameOver" });
  }

  preload() {
    this.load.image("sprBtnPlay", "../../content/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "../../content/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "../../content/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "../../content/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "../../content/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "../../content/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "../../content/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "../../content/sndBtnDown.wav");

    this.load.image("sprBg0", "../../content/sprBg0.png");
    this.load.image("sprBg1", "../../content/sprBg1.png");
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