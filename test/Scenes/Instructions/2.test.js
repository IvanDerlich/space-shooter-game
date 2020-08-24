import Scene from '../../../src/js/Scenes/Instructions/2';

jest.mock('../../../src/js/Scenes/Instructions/2');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});