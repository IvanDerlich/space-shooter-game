import 'phaser';
import Button from '../Objects/Button';


export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('logo', 'assets/logo.png');
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }

  create () {
    this.add.image(400, 300, 'logo');
  }
};
