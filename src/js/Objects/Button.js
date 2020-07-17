import 'phaser';
 
export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, keyOut, keyOver, text, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
 
    this.button = this.scene.add.sprite(0, 0, keyOut).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);
 
    this.add(this.button);
    this.add(this.text);
 
    var soundOn = scene.sys.game.globals.model.soundOn

    this.button.on('pointerdown', function () {
      if(soundOn)
        scene.sfx.btnDown.play()      
      this.scene.scene.start(targetScene);      
    }.bind(this));
 
    this.button.on('pointerover', function () {
      if(soundOn)
        scene.sfx.btnOver.play()
      this.button.setTexture(keyOver);      
    }.bind(this));
 
    this.button.on('pointerout', function () {
      this.button.setTexture(keyOut);
    }.bind(this));
 
    this.scene.add.existing(this);
  }
}