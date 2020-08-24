import Scene from '../../src/js/Scenes/Credits';

jest.mock('../../src/js/Scenes/Credits');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});