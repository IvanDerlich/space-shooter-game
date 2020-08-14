import Scene from '../../src/js/Scenes/Menu';

jest.mock('../../src/js/Scenes/Menu');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});