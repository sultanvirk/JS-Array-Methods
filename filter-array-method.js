const array = [
    {
        name : 'xyz',
        age : 26
    },
    {
        name : 'xyz',
        age : 20
    },
    {
        name : 'xyz',
        age : 23
    },
    {
        name : 'xyz',
        age : 21
    },
]

// filter method also take a callback function as a parameter which take 3 parameters value,index,array
// filter method returns new array after complerteing operation on Main array

const newArray = array.filter((val,index,arr)=>{
    return val.age == 23
})
console.log(newArray)