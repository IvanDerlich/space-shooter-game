/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */

import 'phaser';
import Text from '../Objects/Text';

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
    let height = config.height / 2;
    height -= 200;
    new Text(this, 'Booting...', 48, height);
    this.scene.start('Preloader');
  }
}