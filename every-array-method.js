const numbers = [-1,2,34,4,5,6]

// every method iterate on all elements of array and return bolean values
// It takes a call back function as an argument

const res = numbers.every((ele)=>{
    return ele > 0
})

console.log(res)

const arr = [
    [1,2,3],
    [11,122,33],
    [13,24,32],
]

const isArrOrNot = arr.every((array)=> Array.isArray(array))
console.log(isArrOrNot)