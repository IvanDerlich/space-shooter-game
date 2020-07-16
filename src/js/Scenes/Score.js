import 'phaser';
import config from '../Objects/config';
import ScrollingBackground from '../Entities/ScrollingBackground'
import MenuButton from '../Objects/MenuButton'
import menuMusic from '../../../content/Music/Menu.wav'
import getScores from '../GoogleCloud/getScores'
import Text from '../Objects/Text'

export default class InstructionsScene extends Phaser.Scene {  

  constructor () {
    super('Score');    
  }

  preload(){
    this.load.audio('menuMusic', menuMusic);
  }

  updateScores(scores){
        
    this.fetching.destroy()
    
    scores = scores.sort((a, b) => b.score - a.score)
    for ( var i = 0 ; i < 10 ; i++ )
      new Text(this, "" + (i + 1) + " - " + scores[i].user + ": " + scores[i].score ,20,config.height/2 - 200 + 40 * i )    
    
    this.update();    
  }

  displayError(message){
    console.log(message)
  }

  create () {
    //this.globals = this.sys.game.globals
    this.scores = getScores(this, this.updateScores );    //if no error
    //console.log(this.sys.game.globals)    
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };    
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);
    new Text(this, "Score" , 48 , config.height/2 - 300)
    this.fetching = new Text(this,'Fetching data...',20,config.height/2 - 200)
    //console.log(this.fetching)
    
    new MenuButton(this, config.width/2, config.height/2 + 250, 'Menu', 'Menu');


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
