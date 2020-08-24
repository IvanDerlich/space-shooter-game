import Scene from '../../src/js/Scenes/SetScore';

jest.mock('../../src/js/Scenes/SetScore');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});