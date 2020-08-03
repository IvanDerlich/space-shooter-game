import BootScene from '../src/js/Scenes/Boot';

jest.mock('../src/js/Scenes/Boot');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  BootScene.mockClear();
});

test('test', () => {
  const bootScene = new BootScene();
  expect(bootScene).toBeInstanceOf(BootScene);
});