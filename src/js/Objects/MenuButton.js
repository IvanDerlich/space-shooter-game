import Button from './Button';

export default class MenuButton extends Button {
  constructor(scene, x, y, text, targetScene) {
    super(scene, x, y, 'buttonOver', 'buttonOut', text, targetScene);
  }
}