import Scene from '../../src/js/Scenes/Options';

jest.mock('../../src/js/Scenes/Options');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});