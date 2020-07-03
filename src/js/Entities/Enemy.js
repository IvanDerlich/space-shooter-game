import Entity from './Entity'

export default class Enemy extends Entity {
  constructor(scene, x, y, key){
    super(scene, x, y, key, key);
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}