const names = ['hamid', 'Ivan', 'Hadi']

// #indexOf
// It will return the index of the targeted value
// If value is not found in array it will return -1

const index = names.indexOf('Ivan')
names[index] = 'sss'
console.log(index)
console.log(names)


// #indexOf
// It will return the last index of the targeted value
// If value is not repeated in array or found in array it will return -1

const checkLastIndex = names.lastIndexOf('Ivan')

console.log('Last index : '+ checkLastIndex)