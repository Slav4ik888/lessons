const mapArrToString = require('./index.js');

describe('mapArrToString', () => {
  test('Correct data', () => expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']));

  test('Correct data with mehanina', () =>
    expect(mapArrToString([1, undefined, 2, 3, null, 'str'])).toEqual(['1', '2', '3']));
  
  test('Empty array', () => expect(mapArrToString([])).toEqual([]));

  test('Not equal', () => expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4']));
});


// npm run test map-arr-to-string.test.js
