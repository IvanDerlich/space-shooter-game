import 'phaser';
import config from './config';
import GameOverScene from './Scenes/GameScene';
// import BootScene from './Scenes/BootScene';
// import PreloaderScene from './Scenes/PreloaderScene';
// import TitleScene from './Scenes/TitleScene';
// import OptionsScene from './Scenes/OptionsScene';
// import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    //this.globals = { model, bgMusic: null };
    this.scene.add('GameOver', GameOverScene);
    // this.scene.add('Preloader', PreloaderScene);
    // this.scene.add('Title', TitleScene);
    // this.scene.add('Options', OptionsScene);
    // this.scene.add('Credits', CreditsScene);
    // this.scene.add('Game', GameScene);    

    // this.scene.start('Boot');
  }
}