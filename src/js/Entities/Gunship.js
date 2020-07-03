import Entity from './Entity'
import Enemy from './Enemy';
import EnemyLaser from './EnemyLaser'

export default class Gunship extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy0", "GunShip");
    this.play("sprEnemy0");
    this.shootTimer = this.scene.time.addEvent({
      delay: 1500,
      callback: function() {
        var laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true
    });
    
  }

  onDestroy(){
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}