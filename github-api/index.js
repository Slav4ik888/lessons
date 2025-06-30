// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

// Добавить параметр page = 2 и т.д.
// curl - s "https://api.github.com/repos/{owner}/{repo}/commits?per_page=100&page=2"

function extractDate(isoString) {
  return isoString.split('T')[0];
}

// Синхронное чтение
const rawData = fs.readFileSync('commits.json');
const rawData2 = fs.readFileSync('commits2.json');
const rawData3 = fs.readFileSync('commits3.json');
const data = JSON.parse(rawData);
const data2 = JSON.parse(rawData2);
const data3 = JSON.parse(rawData3);
const dateSet = new Set();


data.forEach(item => {
  dateSet.add(extractDate(item.commit?.committer?.date));
});
data2.forEach(item => {
  dateSet.add(extractDate(item.commit?.committer?.date));
});
data3.forEach(item => {
  dateSet.add(extractDate(item.commit?.committer?.date));
});


console.log(dateSet);
console.log('Всего дней коммитов с начала проекта', dateSet.size);
// Первый коммит 2024-08-26T20:50:32Z

// Асинхронное чтение (рекомендуется)
// fs.readFile('commits.json, 'utf8', (err, rawData) => {
//   if (err) throw err;
//   const data = JSON.parse(rawData);
//   // Обработка данных
// });
