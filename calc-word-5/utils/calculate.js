import data from '../data/arr5.js';
import { getRegMatch } from './regexp.js';

/**
 * Место куда вставлять подходящие слова
 */
const words = document.getElementById("words");


/**
 * Вычисляет наличие выбранных букв (из selectedChars.present) в слове из Словаря
 * @param {string} word слово из Словаря
 * @param {array<char>} presented 
 * @returns {boolean}
 */
const checkAllPresent = (word, presented) => {
  let res = true;

  presented.forEach(p => {
    const reg = new RegExp(p);
    if (! word.match(reg)) res = false
  });

  return res
};


/**
 * Вычисляет отсутствие выбранных букв (из selectedChars.absent) в слове из Словаря
 * @param {string} word слово из Словаря
 * @param {array<char>} absented 
 * @returns {boolean}
 */
const checkAllAbsent = (word, absented) => {
  let res = true;

  absented.forEach(p => {
    const reg = new RegExp(p);
    if (word.match(reg)) res = false
  });

  return res
};

/**
 * Проверяет слово на все необходимые совпадения
 * @param {string} word 
 * @param {RegExp} regexp 
 * @param {array<char>} presented 
 * @param {array<char>} absented 
 * @returns {boolean}
 */
const validate = (word, regexp, presented, absented) =>
  regexp.test(word) && checkAllPresent(word, presented) && (checkAllAbsent(word, absented));


/**
 * Основное вычисление
 * @param {object with 'match' field } selectedChars 
 */
export function calculate(selectedChars) {
  const
    regexp    = new RegExp(getRegMatch(selectedChars.match)),
    presented = selectedChars.present.split(''),
    absented  = selectedChars.absent.split('');

  words.textContent = data
    .filter(word => validate(word, regexp, presented, absented))
    .join(', ');
}
