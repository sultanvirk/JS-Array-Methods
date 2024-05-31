const numbers = [1,2,3,4,5,6]

// findIndex method is very similar to find method
// findIndex method will find the element and will return its index
// while find method returns the element founded by it


// Taking call back function as an argument

const index = numbers.findIndex((ele)=> ele === 3)

console.log(index)