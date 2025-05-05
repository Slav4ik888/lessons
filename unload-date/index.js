// Next routes
const mocks = [
  {
    back: ["", "08.03", "11.03", "", "", "25.03"],
    forward: [false, false, false, true, false, false],
    result: "11.03"
  },
  {
    back: ["", "08.03", "", "15.03", "", "", "25.03"],
    forward: [false, false, false, false, true, false, false],
    result: "15.03"
  }
]



/**
 * Для таблицы Логис - Отчёт Спец по ТС
 * Делал формулу для вытаскивания данных по ФАКТу выгрузки обратного груза,
 * чтобы определить дату возвращения на базу (примерно)
 * @param {Array} back 
 * @param {Array} forward 
 */
const calc = (back, forward) => {
  // Находим индекс (shift) следующего первый рейс ТУДА
  const forwardIdx = forward.findIndex(item => item);

  // Ищем в обратную сторону первый результат по обратке
  let resultBack;

  if (forwardIdx !== -1) {
    for (let i = forwardIdx; i >= 0; i--) {
      if (back[i]) {
        return resultBack = back[i];
      }
    }
  }
};


// TESTS
// mocks.forEach(item => {
//   const result = calc(item.back, item.forward);
//   console.log(result, result === item.result);
// });

const mocksPrev = [
  {
    sheetName: "15-25",
    count: 5,
    result: ["15-25", "14-25", "13-25", "12-25", "11-25"],
  },
  {
    sheetName: "2-25",
    count: 5,
    result: ["2-25", "1-25", "52-24", "51-24", "50-24"],
  },
]

// Для Плана погрузок. Расчёт названий предыдущих вкладок
const calcPrevSheetNames = (sheetName, count) => {
  let result = [];

  for (let i = 0; i < count; i++) {
    result.push(sheetName);
    sheetName = sheetName.replace(/^(\d+)-(\d+)$/, (_, a, b) => {
      const weekNum = parseInt(a);
      const res = weekNum - 1;
      const newNum = res < 1 ? 52 - res : res;

      const yearNum = res < 1 ? parseInt(b) - 1 : parseInt(b);

      return `${newNum}-${yearNum}`;
    })
  }

  return result
};

// TESTS
// mocksPrev.forEach(item => {
//   const result = calcPrevSheetNames(item.sheetName, item.count);
//   console.log(result, JSON.stringify(result) === JSON.stringify(item.result));
// });

//
// 
// 
// 

const mocksNext = [
  {
    sheetName: "50-25",
    count: 5,
    result: ["50-25", "51-25", "52-25", "1-26", "2-26"],
  },
]

// Для Еженедельного отчёта. Расчёт названия следующих вкладок
const calcNextSheetNames = (sheetName, count) => {
  let result = [];

  for (let i = 0; i < count; i++) {
    result.push(sheetName);
    sheetName = sheetName.replace(/^(\d+)-(\d+)$/, (_, a, b) => {
      const weekNum = parseInt(a);
      const res = weekNum + 1;
      const newNum = res > 52 ? res - 52 : res;

      const yearNum = res > 52 ? parseInt(b) + 1 : parseInt(b);

      return `${newNum}-${yearNum}`;
    })
  }

  return result
};

// TESTS
mocksNext.forEach(item => {
  const result = calcNextSheetNames(item.sheetName, item.count);
  console.log(result, JSON.stringify(result) === JSON.stringify(item.result));
});
