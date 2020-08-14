import Scene from '../../src/js/Scenes/Play';

jest.mock('../../src/js/Scenes/Play');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});