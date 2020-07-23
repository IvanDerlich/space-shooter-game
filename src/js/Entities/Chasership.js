/* eslint-disable no-undef */

import Enemy from './Enemy';

require('phaser');

export default class ChaserShip extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy1', 'ChaserShip');
    this.setData('ship', 'ChaserShip');
    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;
  }

  update() {
    if (!this.getData('isDead') && this.scene.player) {
      if (Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y,
      ) < 160) {
        this.state = this.states.CHASE;
      } else {
        this.state = this.states.MOVE_DOWN;
      }

      if (this.state === this.states.CHASE) {
        const dx = this.scene.player.x - this.x;
        const dy = this.scene.player.y - this.y;

        const angle = Math.atan2(dy, dx);

        const speed = 100;
        this.body.setVelocity(
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
        );
      } else {
        this.body.velocity.y = Phaser.Math.Between(50, 100);
        this.body.velocity.x = 0;
      }
      if (this.x < this.scene.player.x) {
        this.angle -= 5;
      } else {
        this.angle += 5;
      }
    }
  }
}