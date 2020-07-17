/* eslint-disable no-new */
import Phaser from 'phaser';
import Text from '../Objects/Text';
// </comment1>

import logo from '../../../content/logo.png';
import config from '../Objects/config';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
    new Text(this, 'Booting...', 48, config.height / 2 - 200);
    this.scene.start('Preloader');
  }
}