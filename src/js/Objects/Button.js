/* eslint-disable no-undef */

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

    const { soundOn } = scene.sys.game.globals.model;

    this.button.on('pointerdown', () => {
      if (soundOn) scene.sfx.btnDown.play();
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      if (soundOn) scene.sfx.btnOver.play();
      this.button.setTexture(keyOver);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(keyOut);
    });

    this.scene.add.existing(this);
  }
}