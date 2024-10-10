

const splitDate = (dateMs) => {
  const dates = new Date(dateMs);

  return {
    year  : dates.getFullYear(),
    month : dates.getMonth(),
    day   : dates.getDate()
  }
}

const calcStartDate = (dateMs, shiftYear, shiftMonth = 0, shiftDay = 0) => {
  if (! dateMs) return;

  const { year, month, day } = splitDate(dateMs);

  // const startDate = new Date(year + shiftYear, month + shiftMonth, day + 1 + shiftDay, 23, 59, 59, 999);
  const startDate = new Date(year + shiftYear, month + shiftMonth, day + 1 + shiftDay, 0, 0, 0, 1);
  console.log('startDate: ', startDate);

  return startDate.getTime()
}

const getOneWeek = (dateMs) => calcStartDate(dateMs, 0, 0, -7);
const getOneMonth = (dateMs) => calcStartDate(dateMs, 0, -1);
const getThreeMonth = (dateMs) => calcStartDate(dateMs, 0, -3);
const getSixMonth = (dateMs) => calcStartDate(dateMs, 0, -6);
const getNineMonth = (dateMs) => calcStartDate(dateMs, 0, -9);
const getOneYear = (dateMs) => calcStartDate(dateMs, -1);
const getTwoYears = (dateMs) => calcStartDate(dateMs, -2);
const getThreeYears = (dateMs) => calcStartDate(dateMs, -3);
const getFiveYears = (dateMs) => calcStartDate(dateMs, -5);
const getSevenYears = (dateMs) => calcStartDate(dateMs, -7);
const getTenYears = (dateMs) => calcStartDate(dateMs, -10);


// getOneWeek(1725653076275);

const createStartDate = (year, month, day) => new Date(year, month, day, 0, 0, 0, 1);
const createStartDateMs = (year, month, day) => createStartDate(year, month, day).getTime();

const createEndDate = (year, month, day) => new Date(year, month, day, 23, 59, 59, 999);
const createEndDateMs = (year, month, day) => createEndDate(year, month, day).getTime();


console.log(createStartDate(2023, 4, 2));
console.log(createStartDateMs(2023, 4, 2));


// console.log(new Date("2023-06-28T18:00:00.000Z").getTime()); // 1687975200000
// console.log(new Date("2024-03-27T18:00:00.000Z").getTime()); // 1711562400000
// console.log(createStartDate(2023, 06, 28));
// console.log(createStartDateMs(2023, 06, 28));

// console.log(createStartDate(2024, 03, 27)); //2023-07-27T21:00:00.001Z - 1690491600001
// console.log(createStartDateMs(2024, 03, 27)); // 2024-04-26T21:00:00.001Z - 1714165200001


// for (const statisticType in startDates) {
//   console.log(statisticType);

//   if (Object.prototype.hasOwnProperty.call(startDates, statisticType)) {
//     startDates[statisticType].forEach((date) => {
//       console.log(`"${date}" ${new Date(date).getTime()}`);
//     });
//   }
// }
