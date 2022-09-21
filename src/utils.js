export const fractionsCalс = (items, barsAmout) => {
  const total = items.reduce((per, cur) => per + cur.value, 0);
  const fractions = items.map((element) => {
    let result = (element.value / total) * barsAmout;
    if (result > 0 && result < 1) {
      result = Math.ceil(result);
    }
    if (result > 1) {
      result = Math.round(result);
    }
    return result;
  });
  return recurtion(fractions, barsAmout);
};

const recurtion = (arr, barsAmout) => {
  const total = arr.reduce((per, cur) => per + cur, 0);
  if (total === barsAmout) {
    return arr;
  }
  const max = arr.indexOf(Math.max(...arr));
  const updatedArr = arr.map((element, index) => {
    if (index === max) {
      return element - 1;
    }
    return element;
  });
  return recurtion(updatedArr, barsAmout);
};
