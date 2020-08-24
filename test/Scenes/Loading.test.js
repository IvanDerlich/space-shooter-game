import LoadingScene from '../../src/js/Scenes/Loading';

jest.mock('../../src/js/Scenes/Loading');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  LoadingScene.mockClear();
});

test('test', () => {
  expect(new LoadingScene()).toBeInstanceOf(LoadingScene);
});