/* eslint-disable no-alert */
export default (scene) => {
  while (scene.userName == null) {
    scene.userName = prompt(
      'Please insert the nickname you want to be remembered into eternity',
      'Space Warfare God',
    );

    if (scene.userName == null) {
      prompt('User is Null');
    }

    if (scene.userName.length > 18) {
      prompt('User is longer than 17 chars');
    }
  }
};