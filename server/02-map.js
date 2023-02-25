const letters = ['a', 'b', 'c']

//Solución con for

// const newArray = []
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++')
// }

//Solución con map
const newArray = letters.map(item => item + '++')

console.log('original', letters);
console.log('new', newArray);