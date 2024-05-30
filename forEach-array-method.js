const numbers = [1, 2, 3, 3, 4, 1, 3]

// forEach Array method take a callback function as a parameter & the call back function takes 3 parameters value, index, array
// forEach can not return any thing it just iterate main array
// While map and filter methods return a new array after performing operation on Main array.

numbers.forEach((value, index, array) => {
    console.log('a[' + index + '] = ' + value)
})

// Problem
// We need to calculate the count of items in array.

const count = {}

numbers.forEach((value) => {
    if(count[value]){
        count[value]++;
    }else{
        count[value]=1;
    }
})

console.log(count)