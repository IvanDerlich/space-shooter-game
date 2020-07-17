/* eslint-disable no-new */
import config from '../Objects/config';
import Text from '../Objects/Text';

export default (scene) => {
  scene.fetching.setText('Fetching Scores...');

  const gameId = 'WQw8aJXQ7oC0nuqYBROD';
  const queryUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
    gameId
  }/scores/`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => {
      scene.fetching.destroy();
      const scores = response.result.sort((a, b) => b.score - a.score);
      for (let i = 0; i < 10; i += 1) {
        new Text(scene, `${i + 1} - ${scores[i].user}: ${scores[i].score}`, 20, config.height / 2 - 200 + 40 * i);
        // if user is the same as scene.userName, the text changes to red
      }
      scene.update();
    });
};