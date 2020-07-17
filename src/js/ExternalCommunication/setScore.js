import getScores from './getScores';

export default (scene) => {
  scene.fetching.setText('Posting Score...');
  const data = {
    user: scene.userName,
    score: scene.score,
  };

  const gameId = 'WQw8aJXQ7oC0nuqYBROD';
  const queryUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  fetch(queryUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      getScores(scene);
      scene.update();
    });
};