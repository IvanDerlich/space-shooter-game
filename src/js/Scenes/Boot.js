import 'phaser';
console.log("Boot Scene")
 
//</comment1>

import logo from '../../../content/logo.png'

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('logo', logo);
  }
 
  create () {
    this.scene.start('Preloader');
  }
};