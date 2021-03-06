/* eslint-disable no-undef */
/* eslint-disable  import/no-unresolved */

import 'phaser';

export default class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('type', type);
    this.setData('isDead', false);
  }

  explode(canDestroy) {
    if (!this.getData('isDead')) {
      // Set the texture to the explosion image, then play the animation
      this.play('sprExplosion'); // play the animation
      if (this.getData('isEnemy')) {
        if (this.getData('ship') === 'GunShip') {
          this.scene.sys.game.globals.score += 3;
        }
        if (this.getData('ship') === 'ChaserShip') {
          this.scene.sys.game.globals.score += 5;
        }
        if (this.getData('ship') === 'CarrierShip') {
          this.scene.sys.game.globals.score += 1;
        }
      }
      this.setTexture('sprExplosion'); // this refers to the same animation key we used when we added this.anims.create previously

      // pick a random explosion sound within the array we defined in this.sfx in SceneMain
      const { soundOn } = this.scene.sys.game.globals.model;
      const { explosions } = this.scene.sfx;
      if (soundOn) explosions[Phaser.Math.Between(0, this.scene.sfx.explosions.length - 1)].play();

      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }

      this.setAngle(0);
      this.body.setVelocity(0, 0);

      this.on('animationcomplete', () => {
        if (canDestroy) {
          this.destroy();
        } else {
          this.setVisible(false);
        }
      }, this);

      this.setData('isDead', true);
    }
  }
}