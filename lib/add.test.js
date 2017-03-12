const add = require('./add');

test('should return 10 when value (3, 7)', () => {
  expect(add(3, 7)).toBe(10);
});

test('should return 25 when value (20, 5)', () => {
  expect(add(20, 5)).toBe(25);
});
