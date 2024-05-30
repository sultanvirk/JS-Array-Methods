const numbers = [1,2,3,4,5]

// map method also take a callback function as a parameter which take 3 parameters value,index,array
// map method returns new array after complerteing operation on Main array
const newArray = numbers.map((value,index,array)=>{
    return value+1;
})

console.log(`Main Array = ${numbers}`)
console.log(`New Array = ${newArray}`)