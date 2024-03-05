import { calculate } from './utils/calculate.js';
import { getUniqueChars } from './utils/get-unique-chars.js';
import { getMatchChar } from './utils/matched.js';


const selectedChars = {
  match   : ['', '', '', '', ''], // точное совпадение
  present : '',                   // присутствует
  absent  : ''                    // отсутствует
};


// MATCH

const
  matchChars = {
    1 : document.getElementById("match-char-1"),
    2 : document.getElementById("match-char-2"),
    3 : document.getElementById("match-char-3"),
    4 : document.getElementById("match-char-4"),
    5 : document.getElementById("match-char-5")
  };

matchChars[1].addEventListener("input", (e) => getMatchChar(e, 1, selectedChars, matchChars), false);
matchChars[2].addEventListener("input", (e) => getMatchChar(e, 2, selectedChars, matchChars), false);
matchChars[3].addEventListener("input", (e) => getMatchChar(e, 3, selectedChars, matchChars), false);
matchChars[4].addEventListener("input", (e) => getMatchChar(e, 4, selectedChars, matchChars), false);
matchChars[5].addEventListener("input", (e) => getMatchChar(e, 5, selectedChars, matchChars), false);


// PRESENT

document.getElementById("present-chars").addEventListener("input", (e) => {
  const value = e.target.innerText;

  if (! value) {
    selectedChars.present = '';
  }
  else {
    const uniqValue       = getUniqueChars(value);
    e.target.innerText    = uniqValue.toUpperCase();
    selectedChars.present = uniqValue;
  }
  calculate(selectedChars);
}, false);


// ABSENT

document.getElementById("absent-chars").addEventListener("input", (e) => {
  const value = e.target.innerText;

  if (! value) {
    selectedChars.absent = '';
  }
  else {
    const uniqValue      = getUniqueChars(value);
    e.target.innerText   = uniqValue.toUpperCase();
    selectedChars.absent = uniqValue;
  }
  calculate(selectedChars);
}, false);
