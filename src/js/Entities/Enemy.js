/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */

import 'phaser';
import Entity from './Entity';

export default class Enemy extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, key);
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.setData('ship', key);
    this.setData('isEnemy', true);
  }
}