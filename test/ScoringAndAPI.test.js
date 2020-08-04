import setScore from '../src/js/ExternalCommunication/setScore';
import getScores from '../src/js/ExternalCommunication/getScores';

jest.setTimeout(180000);

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

xit('Get Scores', async () => {
  const gameId = 'WQw8aJXQ7oC0nuqYBROD';
  const scores = await getScores(gameId);
  expect(scores).toBeInstanceOf(Array);
});

it('Set one score and see if its included and if legth increased', async () => {
  const rand = Math.floor(
    (Math.random() * 100000000) + 1,
  );
  const playerName = `Player${rand.toString()}`;

  const gameId = 'WQw8aJXQ7oC0nuqYBROD';

  const score = -5555;

  const scoresBefore = await getScores(gameId);

  expect(scoresBefore).toBeInstanceOf(Array);

  await setScore(gameId, playerName, score);

  const scoresAfter = await getScores(gameId);

  // eslint-disable-next-line arrow-body-style
  const isIncluded = scoresAfter.some(playerScore => {
    return playerScore.user === playerName
    && playerScore.score === score;
  });

  expect(isIncluded).toBe(true);
  expect(scoresBefore.length + 1).toBe(scoresAfter.length);
});