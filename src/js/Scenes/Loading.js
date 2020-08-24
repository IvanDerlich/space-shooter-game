/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */

import 'phaser';
import config from '../Objects/config';

import sprBtnPlay from '../../../content/sprBtnPlay.png';
import sprBtnPlayHover from '../../../content/sprBtnPlayHover.png';
import sprBtnPlayDown from '../../../content/sprBtnPlayDown.png';
import sprBtnRestart from '../../../content/sprBtnRestart.png';
import sprBtnRestartHover from '../../../content/sprBtnRestartHover.png';
import sprBtnRestartDown from '../../../content/sprBtnRestartDown.png';
import sprBg0 from '../../../content/sprBg0.png';
import sprBg1 from '../../../content/sprBg1.png';

import explosion from '../../../content/sprExplosion.png';
import sprEnemy0 from '../../../content/sprEnemy0.png';
import sprEnemy1 from '../../../content/sprEnemy1.png';
import sprEnemy2 from '../../../content/sprEnemy2.png';
import sprLaserEnemy0 from '../../../content/sprLaserEnemy0.png';
import sprLaserPlayer from '../../../content/sprLaserPlayer.png';
import sprPlayer from '../../../content/sprPlayer.png';
import sndExplode0 from '../../../content/sndExplode0.wav';
import sndExplode1 from '../../../content/sndExplode1.wav';
import sndLaser from '../../../content/sndLaser.wav';

import buttonOver from '../../../content/blue_button02.png';
import buttonOut from '../../../content/blue_button03.png';

const iDiv = document.createElement('div');
iDiv.id = 'loading';
iDiv.className = 'loading';
iDiv.innerHTML = 'Loading. Fun is coming...';
document.getElementsByTagName('body')[0].appendChild(iDiv);

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    const canvas = document.querySelector('canvas');
    canvas.classList.add('hide');
    super('Loading');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    const height = config.height / 2;
    new Text(this, 'Loading...', 48, height - 200);

    this.load.image('buttonOver', buttonOver);
    this.load.image('buttonOut', buttonOut);
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);

    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);

    this.load.spritesheet('sprExplosion', explosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', sprEnemy0, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', sprEnemy1);
    this.load.spritesheet('sprEnemy2', sprEnemy2, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprLaserEnemy0', sprLaserEnemy0);
    this.load.image('sprLaserPlayer', sprLaserPlayer);
    this.load.spritesheet('sprPlayer', sprPlayer, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.audio('sndExplode0', sndExplode0);
    this.load.audio('sndExplode1', sndExplode1);
    this.load.audio('sndLaser', sndLaser);
    const loadingMessage = document.getElementById('loading');
    loadingMessage.classList.add('hide');
    this.scene.start('Menu');
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Menu');
    }
  }
}