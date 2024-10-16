// function declaration

// function expression
const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map(function (element) {
  return Math.pow(element, 2)
})
const cubes = numbers.map(function (element) {
  return Math.pow(element, 3)
})
const evenNums = numbers.filter(function (element) {
  return element % 2 === 0 }
)
const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0 }
)
const total = numbers.reduce((acc, element) => { return acc + element }, 0) 

console.log(total)



