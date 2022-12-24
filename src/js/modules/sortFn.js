export default function orderByProps(obj, sortDirection) {
  const sortedArray = [];
  const sortedArrayByAlphabet = [];
  sortDirection.forEach((key) => {
    if (key in obj) {
      sortedArray.push({ key, value: obj[key] });
    }
  });

  for (const key in obj) {
    if (!sortDirection.includes(key)) {
      sortedArrayByAlphabet.push({ key, value: obj[key] });
    }
  }

  sortedArrayByAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...sortedArray, ...sortedArrayByAlphabet];
}
