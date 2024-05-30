const array = [3,2,5,4,6]


// slice method can take two arguments which are
//  1 _ Starting index
//  2 _ Ending index
// It doesn't effect Main array
const newArray = array.slice(1,3)

console.log(array)
console.log(newArray)

// Negitive indexing
// If we want last elements from array then
const negitiveIndexing = array.slice(-2)
console.log(negitiveIndexing)