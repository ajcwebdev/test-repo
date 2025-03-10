const { getMessage } = require('../index');

describe('getMessage function', () => {
  test('returns the correct greeting message', () => {
    expect(getMessage()).toBe('Hello, World!');
  });
});
