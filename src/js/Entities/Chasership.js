import Entity from './Entity'

export default class ChaserShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy1", "ChaserShip");
  }
}