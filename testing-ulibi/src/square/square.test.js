const square = require('./index.js');

describe('square', () => {
  let mockValue;

  beforeEach(() => {
    mockValue = Math.random()
  });

  beforeAll(() => {
    
  });

  test('Correct value', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });

  test('Spy value = 1', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  test('Spy value = 2', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  afterEach(() => {
    // Example: remove from DB
    jest.clearAllMocks();
  });
  afterAll(() => {
    // For All
  })
});


// npm run test square.test.js
