import Scene from '../../../src/js/Scenes/Instructions/3';

jest.mock('../../../src/js/Scenes/Instructions/3');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Scene.mockClear();
});

test('test', () => {
  expect(new Scene()).toBeInstanceOf(Scene);
});