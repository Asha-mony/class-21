const numbers = [2, 3, 4, 5, 6, 10, 12, 15, 20]

const lessThen10 = numbers.filter(number => number < 10)
const greaterThen10 = numbers.filter(number => number > 10)
const withOut10 = numbers.filter(number => number !== 10)
console.log(lessThen10);
console.log(greaterThen10);
console.log(withOut10);