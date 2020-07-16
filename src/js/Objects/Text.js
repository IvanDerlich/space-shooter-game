import 'phaser';  

export default class Text extends Phaser.GameObjects.Container{
  constructor(scene,content,fontSize,y) {
    super(scene)

    var text = scene.add.text(
      scene.game.config.width * 0.5,
      128, 
      content, {
        fontFamily: 'monospace',
        fontSize: fontSize,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
    });    

    Phaser.Display.Align.In.Center(
      text,
      scene.zone //we need to define a zone in the scene or will throw error
    );
    text.y = y
    return text
  }
}