import 'phaser';
import MenuButton from '../Objects/MenuButton'
import config from '../Objects/config'
console.log("Main Menu Scene")

import ScrollingBackground from '../Entities/ScrollingBackground'

import soundBtnOver from '../../../content/sndBtnOver.wav'
import sndBtnDown from '../../../content/sndBtnDown.wav'
import menuMusic from '../../../content/Music/Menu.wav'


export default class SceneMainMenu extends Phaser.Scene {

  constructor() {
    super({ key: "Menu" });
  }

  preload() {
    this.load.audio("sndBtnOver", soundBtnOver);
    this.load.audio("sndBtnDown", sndBtnDown);
    this.load.audio('menuMusic', menuMusic);
  }

  create() {

    

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.gameButton = new MenuButton(this, config.width/2, config.height/2 - 100, 'Play', 'Play');
    this.optionsButton = new MenuButton(this, config.width/2, config.height/2, 'Options', 'Options');
    this.creditsButton = new MenuButton(this, config.width/2, config.height/2 + 100, 'Credits', 'Credits');
    this.instructionsButton = new MenuButton(this, config.width/2, config.height/2 + 200, 'How to ...', 'Instructions');
  
    this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
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