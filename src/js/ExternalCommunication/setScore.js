/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import fetch from 'node-fetch';

export default (gameId, user, score) => {
  const data = {
    user,
    score,
  };
  const queryUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;  

  console.log(JSON.stringify(data));

  return fetch(queryUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json());
};