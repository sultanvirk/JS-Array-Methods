const names = ['Fahad','Faiza', 'Ghazamfer']

//  find method can take a callback function as an argument and it will return the matched element of array
//  It will stop searching further elements if it gets matched value
//  return undefined in the case of value not found in array
const res = names.find((ele)=> ele === 'Ghazamfer');

console.log(res)