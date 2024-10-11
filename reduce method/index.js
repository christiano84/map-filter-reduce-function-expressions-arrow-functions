// .reduce() - reduce the elements of an array to a single
// 

const grades = [75, 50, 90, 80, 65, 95]
const numz = [75, 85, 95, 115]
const minimum = grades.reduce(getMin)
const maximum = grades.reduce(getMax)
const test = numz.reduce(function(acc, element) { return element > acc ? element : acc}, numz[0] )

console.log(minimum)
console.log(maximum)
console.log(test)

function getMax(accumulator, element) {
  return Math.max(accumulator, element)
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element)
}