/* eslint-disable import/no-unresolved */
import fetch from 'node-fetch';

export default (gameId) => {
  const queryUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
    gameId
  }/scores/`;

  return fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => response.result.sort((a, b) => b.score - a.score));
};