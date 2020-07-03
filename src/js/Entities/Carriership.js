import Enemy from './Enemy'

export default class CarrierShip extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy2", "CarrierShip");    
    this.play("sprEnemy2");
  }
}