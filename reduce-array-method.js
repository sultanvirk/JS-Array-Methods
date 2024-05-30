const numbers = [3, 2]

// reduce method takes a call back function as a parameter
// callback function get 2 arguments which are 
// 1 _ previous/initial value
// 2 _ current Value

//  If we want to assign a previous/initial value we need to assign after scope
// Expamle :-
//  const newVal = numbers.reduce((previous,current)=>{
// return previous
// },2)  <== 2 is assigned to initial/previous val
// console.log(newVal)

// If the initial value is not assigned the function can assume 0 indexed value as an initial value

const newVal = numbers.reduce((previous, current) => {
    return previous+current
})
console.log(newVal)