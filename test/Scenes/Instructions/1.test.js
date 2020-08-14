import Scene from '../../../src/js/Scenes/Instructions/1';

jest.mock('../../../src/js/Scenes/Instructions/1');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});