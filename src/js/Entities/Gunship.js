import Entity from './Entity'

export default class Gunship extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy0", "GunShip");
    this.play("sprEnemy0");
  }
}