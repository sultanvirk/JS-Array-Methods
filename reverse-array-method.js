const numbers = [1,2,3,4,5]

// reverse method is used to reverse the arrays
const newArr = numbers.reverse()

console.log(newArr)

// Example 2
// We have a string and want to know is it a palidrom or not

const str = "Eye"
const lowerCase = str.toLocaleLowerCase()
const reversedStr = lowerCase.split("").reverse().join('')

const result = reversedStr == lowerCase ? true : false

console.log(result)