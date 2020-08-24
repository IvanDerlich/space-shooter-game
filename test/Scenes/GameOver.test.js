import Scene from '../../src/js/Scenes/GameOver';

jest.mock('../../src/js/Scenes/GameOver');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});