import { calculate } from './calculate.js';

/**
 * Вставляет в массив match значение в нужную позицию
 * @param {number} pos 
 * @param {string} value 
 * @param {object with 'match' field } selectedChars 
 */
const setMatchValue = (pos, value, selectedChars) => {
  const idx = pos - 1;

  selectedChars.match = [...selectedChars.match.slice(0, idx), value, ...selectedChars.match.slice(idx + 1)];
};


/**
 * Вставляет в массив match значение в нужную позицию
 * и запускает вычисления
 * @param {event from addEventListener} e 
 * @param {number} pos 
 * @param {object with 'match' field } selectedChars 
 * @param {object with 'match' field } selectedChars 
 */
export const getMatchChar = (e, pos, selectedChars, matchChars) => {
  const value = e.data;

  if (! value) {
    setMatchValue(pos, '', selectedChars);
  }
  else {
    e.target.innerText = value.toUpperCase();
    setMatchValue(pos, value.toLowerCase(), selectedChars);
  }

  if (pos < 5) matchChars[pos + 1].focus();
  else matchChars[1].focus();

  calculate(selectedChars);
};
