const numbers = [3, 2, 3, 4, 5]

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
    return previous + current
})
console.log(newVal)

// Exercise :- Total Price Count of the products in store

const produts = [
    {
        title : 'Cricket ball',
        price : 100,
        count : 3
    },
    {
        title : 'Football',
        price : 1000,
        count : 2
    },
    {
        title : 'Jumping Rope',
        price : 20,
        count : 30
    }
]

const priceOfProductsInStore = produts.reduce((accumuator, item) =>{
    return accumuator + (item.price*item.count)
},0)
console.log(priceOfProductsInStore)