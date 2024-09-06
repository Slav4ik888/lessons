

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

  const startDate = new Date(year + shiftYear, month + shiftMonth, day + 1 + shiftDay, 23, 59, 59, 999);
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


getOneWeek(1725653076275);
