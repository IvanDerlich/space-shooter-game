/* eslint-disable no-new */
/*eslint no-undef: "Phaser*/
import('phaser');
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
    new Text(this, 'Booting...', 48, config.height / 2 - 200);
    this.scene.start('Preloader');
  }
}