import 'phaser';
import config from '../Objects/config';
import ScrollingBackground from '../Entities/ScrollingBackground'
import MenuButton from '../Objects/MenuButton'
import menuMusic from '../../../content/Music/Menu.wav'


export default class InstructionsScene extends Phaser.Scene {
  constructor () {
    super('Score');
  }

  preload(){
    this.load.audio('menuMusic', menuMusic);
  }

  create () {

   
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };    
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

    this.title = this.add.text(
      this.game.config.width * 0.5,
      128, 
       "Score", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
    });    

    Phaser.Display.Align.In.Center(
      this.title,
      this.zone
    );
    this.title.y = config.height/2 - 200

    this.moves = this.add.text(this.game.config.width * 0.5, 128, "w,a,s,d to move", {
      fontFamily: 'monospace',
      fontSize: 24,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });    

    Phaser.Display.Align.In.Center(
      this.moves,
      this.zone
    );

    this.moves.y = config.height/2 -100

    this.shoot = this.add.text(this.game.config.width * 0.5, 128, "space to shoot", {
      fontFamily: 'monospace',
      fontSize: 24,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });    

    Phaser.Display.Align.In.Center(
      this.shoot,
      this.zone
    );
    this.shoot.y = config.height/2


    this.gameButton = new MenuButton(this, config.width/2, config.height/2 + 100, 'Menu', 'Menu');


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
};
