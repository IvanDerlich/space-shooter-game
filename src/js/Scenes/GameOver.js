import 'phaser';
const path = require('path');
import ScrollingBackground from '../Entities/ScrollingBackground'
import MenuButton from '../Objects/MenuButton'
import config from '../Objects/config'

export default class SceneGameOver extends Phaser.Scene {

  constructor() {
    super({ key: "SceneGameOver" });
  }

  preload() {

  }

  create() {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };
    this.gameButton = new MenuButton(this, config.width/2, config.height/2, 'Restart', 'Play');
    this.gameButton = new MenuButton(this, config.width/2, config.height/2 + 100, 'Menu', 'Menu');
    this.gameButton = new MenuButton(this, config.width/2, config.height/2 + 200, '+Score', 'Score');
   
    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    this.title.setOrigin(0.5);
    this.title.y = config.height/2 - 200

    this.score = this.add.text(this.game.config.width * 0.5, 128, "SCORE: " + this.sys.game.globals.score, {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });

    this.score.setOrigin(0.5);
    this.score.y = config.height/2 - 100

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var keys = ["sprBg0", "sprBg1"];
      var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      var bg = new ScrollingBackground(this, key, i * 10);
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
  update(){
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}