
// Helpers
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function getMixedArray(arr) {
  const newArr = [];
  let randomIdx;

  while (arr && arr.length) {
    randomIdx = getRandomNumber(0, arr.length - 1);
    newArr.push(arr[randomIdx]);
    arr = [...arr.slice(0, randomIdx), ...arr.slice(randomIdx + 1)];
  }

  return newArr;
};


// Main function
function randomSanta(fioMen, fioWomen) {
  // Перемешиваем массивы
  const shuffledMen = getMixedArray(fioMen);
  const shuffledWomen = getMixedArray(fioWomen);

  const shortArr = shuffledMen.length < shuffledWomen.length ? shuffledMen : shuffledWomen;
  const longArr = shuffledMen.length >= shuffledWomen.length ? shuffledMen : shuffledWomen;


  let shortSelectedIdx = 0;
  let longSelectedIdx = 0;
  let result = {};

  while (shortSelectedIdx < shortArr.length) {
    result[shortArr[shortSelectedIdx]] = longArr[longSelectedIdx]; // woman => man
    shortSelectedIdx++;

    // До последнею участника в коротком массиве
    if (shortSelectedIdx < shortArr.length) {
      result[longArr[longSelectedIdx]] = shortArr[shortSelectedIdx]; // man => woman
      longSelectedIdx++;
    }
  }

  while (longSelectedIdx < longArr.length - 1) {
    result[longArr[longSelectedIdx]] = longArr[longSelectedIdx + 1]; // man => man
    longSelectedIdx++;
  }

  // Проверка если короткий массив пустой (нет мужчин или женщин)
  if (shortArr.length) result[longArr[longSelectedIdx]] = shortArr[0]; // last man => first woman
  else result[longArr[longSelectedIdx]] = longArr[0]; // last man => first man
  
  return result;
}




// Start
console.log(randomSanta(
  ['Кузьминич', 'Косоротиков', 'Кармаданов', 'Елин', 'Голенко', 'Колесов', 'Малов', 'Околелов', 'Беляев', 'Суханов', 'Перебейносов', 'Горбунов', 'Трушков', 'Пивоваров'],
  ['Епифанова', 'Осипова', 'Бурдуковская', 'Гурина', 'Прокопцева', 'Таюрская']
));

// const result = {
//   'Таюрская': 'Кузьминич',
//   'Кузьминич': 'Осипова',
//   'Осипова': 'Перебейносов',
//   'Перебейносов': 'Гурина',
//   'Гурина': 'Беляев',
//   'Беляев': 'Прокопцева',
//   'Прокопцева': 'Косоротиков',
//   'Косоротиков': 'Бурдуковская',
//   'Бурдуковская': 'Горбунов',
//   'Горбунов': 'Епифанова',
//   'Епифанова': 'Елин',
//   'Елин': 'Суханов',
//   'Суханов': 'Колесов',
//   'Колесов': 'Околелов',
//   'Околелов': 'Малов',
//   'Малов': 'Пивоваров',
//   'Пивоваров': 'Кармаданов',
//   'Кармаданов': 'Голенко',
//   'Голенко': 'Трушков',
//   'Трушков': 'Таюрская'
// }


// Tests ситуаций:
// console.log('1. Мужчин и женщин одинакого: ', randomSanta(
//   ['man-1', 'man-2', 'man-3'],
//   ['woman-1', 'woman-2', 'woman-3']
// ));

// console.log('2. Мужчин больше чем женщин: ', randomSanta(
//   ['man-1', 'man-2', 'man-3', 'man-4', 'man-5'],
//   ['woman-1', 'woman-2', 'woman-3']
// ));

// console.log('3. Женщин больше чем мужчин: ', randomSanta(
//   ['man-1', 'man-2'],
//   ['woman-1', 'woman-2', 'woman-3']
// ));

// console.log('4. Мужчин нет: ', randomSanta(
//   [],
//   ['woman-1', 'woman-2', 'woman-3']
// ));

// console.log('5. Женщин нет: ', randomSanta(
//   ['man-1', 'man-2', 'man-3'],
//   []
// ));
