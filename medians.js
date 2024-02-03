const expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2023-03": {
    "07": {
      food: [20, 11.9, 30.2, 11.9],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
};

const isInFirstWeekOfMonth = (date) => {
  const checkDate = new Date(date);

  checkDate.setDate(1);

  const firstDayOfWeek = checkDate.getDay();

  const endOfFirstWeek = 7 - firstDayOfWeek;

  return date.getDate() <= endOfFirstWeek;
};
const calculateMedian = (numbers) => {
  if (numbers.length === 0) return null;

  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    return numbers[middleIndex];
  }
};

const get_median_of_first_week_expenses = (expenses) => {
  const allExpenses = [];
  for (const yearMonth in expenses) {
    for (const dayString in expenses[yearMonth]) {
      const date = new Date(yearMonth + "-" + dayString);
      if (isInFirstWeekOfMonth(date)) {
        if (expenses[yearMonth][dayString]["food"]) {
          allExpenses.push(...expenses[yearMonth][dayString]["food"]);
        }
        if (expenses[yearMonth][dayString]["fuel"]) {
          allExpenses.push(...expenses[yearMonth][dayString]["fuel"]);
        }
      }
    }
  }
  return calculateMedian(allExpenses);
};

console.log(get_median_of_first_week_expenses(expenses));
