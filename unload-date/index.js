// Next routes
const mocks = [
  {
    back    : ["",    "08.03", "11.03", "",    "",    "25.03"],
    forward : [false, false, false, true, false, false],
    result  : "11.03"
  },
  {
    back    : ["",    "08.03", "", "15.03", "",    "",    "25.03"],
    forward : [false, false, false, false, true, false, false],
    result  : "15.03"
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
mocks.forEach(item => {
  const result = calc(item.back, item.forward);
  console.log(result, result === item.result);
});
