import 'phaser';
import SceneGameOver from './SceneGameOver';
import SceneMain from './SceneMain'
import SceneMainMenu from './SceneMainMenu'

export default {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver],
  pixelArt: true,
  roundPixels: true
};