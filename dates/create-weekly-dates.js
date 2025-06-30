function getWeeklyDates(startDate, weeksCount) {
  const dates = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < weeksCount; i++) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 7); // +1 неделя
  }

  return dates;
}

// Пример использования:
const startDate = "2025-05-16"; // Начальная дата
const datesArray = getWeeklyDates(startDate, 20); // 20 дат с шагом в неделю
console.log(datesArray.map(date => date.toLocaleDateString('ru-RU')));
// [
//   '16.05.2025', '23.05.2025',
//   '30.05.2025', '06.06.2025',
//   '13.06.2025', '20.06.2025',
//   '27.06.2025', '04.07.2025',
//   '11.07.2025', '18.07.2025',
//   '25.07.2025', '01.08.2025',
//   '08.08.2025', '15.08.2025',
//   '22.08.2025', '29.08.2025',
//   '05.09.2025', '12.09.2025',
//   '19.09.2025', '26.09.2025'
// ]

console.log(datesArray.map(date => date.getTime()));
// [
//   1747353600000, 1747958400000,
//   1748563200000, 1749168000000,
//   1749772800000, 1750377600000,
//   1750982400000, 1751587200000,
//   1752192000000, 1752796800000,
//   1753401600000, 1754006400000,
//   1754611200000, 1755216000000,
//   1755820800000, 1756425600000,
//   1757030400000, 1757635200000,
//   1758240000000, 1758844800000
// ]


function getFirstDatesOfMonth(datesArray) {
  const firstDates = [];
  let currentMonth = null;

  // Проверяем формат дат и преобразуем в объекты Date при необходимости
  const parsedDates = datesArray.map(date => {
    if (typeof date === 'string') {
      // Для формата dd.mm.yyyy
      const [day, month, year] = date.split('.');
      return new Date(`${month}.${day}.${year}`);
    }
    return new Date(date);
  });

  for (const date of parsedDates) {
    const month = date.getMonth();

    if (month !== currentMonth) {
      firstDates.push(date);
      currentMonth = month;
    }
  }

  return firstDates;
}

// Пример использования:
const weeklyDates = [
  "16.05.2025", "23.05.2025", "30.05.2025",
  "06.06.2025", "13.06.2025", "20.06.2025", "27.06.2025",
  "04.07.2025", "11.07.2025", "18.07.2025", "25.07.2025",
  "01.08.2025", "08.08.2025", "15.08.2025", "22.08.2025", "29.08.2025",
  "05.09.2025", "12.09.2025", "19.09.2025", "26.09.2025"
];

const firstMonthlyDates = getFirstDatesOfMonth(weeklyDates);
console.log(firstMonthlyDates.map(date => date.getTime()));

// Форматируем результат обратно в dd.mm.yyyy для наглядности
console.log(firstMonthlyDates.map(date => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}.${month}.${date.getFullYear()}`;
}));
// Выведет:
// [
//   '16.05.2025',
//   '06.06.2025',
//   '04.07.2025',
//   '01.08.2025',
//   '05.09.2025'
// ]


// MIX
const allActiveDates = [
  1747353600000, 1747958400000, // '16.05.2025', '23.05.2025',
  1748563200000, 1749168000000, // '30.05.2025', '06.06.2025',
  1749772800000, 1750377600000, // '13.06.2025', '20.06.2025',
  1750982400000, 1751587200000, // '27.06.2025', '04.07.2025',
  1752192000000, 1752796800000, // '11.07.2025', '18.07.2025',
  1753401600000, 1754006400000, // '25.07.2025', '01.08.2025',
  1754611200000, 1755216000000, // '08.08.2025', '15.08.2025',
  1755820800000, 1756425600000, // '22.08.2025', '29.08.2025',
  1757030400000, 1757635200000, // '05.09.2025', '12.09.2025',
  1758240000000, 1758844800000,  // '19.09.2025', '26.09.2025'
  1747342800000, // '16.05.2025',
  1749157200000, // '06.06.2025',
  1751576400000, // '04.07.2025',
  1753995600000, // '01.08.2025',
  1757019600000  // '05.09.2025'
];

console.log(allActiveDates.sort());
