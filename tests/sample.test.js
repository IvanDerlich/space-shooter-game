const sum = require('../src/scripts/sample');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a += 1) {
    for (let b = 1; b < 10; b += 1) {
      expect(a + b).not.toBe(0);
    }
  }
});