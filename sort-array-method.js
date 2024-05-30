const array = [23,25,34,5,7]

// Sort method can sort the array

// The comparison function (a, b) => a - b is used to determine the order of elements:

// If a - b returns a negative value, then a is considered to be less than b, and a will be placed before b.
// If a - b returns zero, a and b are considered equal, and their order relative to each other does not change.
// If a - b returns a positive value, then a is considered to be greater than b, and a will be placed after b.

array.sort((a,b)=>{
    return a-b;
})

console.log(array)