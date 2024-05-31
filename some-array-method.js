const numbers = [1, 2, 3, 4, 5]

// some method will return truth if atleast one element is the array meet conditions if all elements dosent meet conditions it will return false
//  Take a callback function as an argument

const res = numbers.some((ele) => ele > 4) // One value meet the condition so it will return true

console.log(res)