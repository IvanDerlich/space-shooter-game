import Scene from '../../src/js/Scenes/ScoreBoard';

jest.mock('../../src/js/Scenes/ScoreBoard');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});