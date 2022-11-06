const validateValue = require('./index.js');

describe('validateValue', () => {
  test('Correct value',  () => expect(validateValue(50)) .toBe(true));
  test('Marginal value = 0',   () => expect(validateValue(0))  .toBe(true));
  test('Marginal value = 99', () => expect(validateValue(99)).toBe(true));
  test('Less than correct',  () => expect(validateValue(-1)) .toBe(false));
  test('Greater than correct', () => expect(validateValue(100)).toBe(false));

});


// npm run test validate-value.test.js
