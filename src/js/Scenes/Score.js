import 'phaser';
import config from '../Objects/config';
import ScrollingBackground from '../Entities/ScrollingBackground'
import MenuButton from '../Objects/MenuButton'
import Text from '../Objects/Text'
import menuMusic from '../../../content/Music/Menu.wav'

import userNameInput from '../ExternalCommunication/usernameInput'
import setScore from '../ExternalCommunication/setScore'


export default class InstructionsScene extends Phaser.Scene {  

  constructor () {
    super('Score');  
    this.userName = null
  }

  preload(){
    this.load.audio('menuMusic', menuMusic);
  }  
 
  create () {
    
    this.score = this.sys.game.globals.score

    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

    this.fetching = new Text(this,'Insert Username...',20,config.height/2 - 200)
    userNameInput(this)       
    setScore(this)
    
      
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };    
    new Text(this, "Score" , 48 , config.height/2 - 300)    
   
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
