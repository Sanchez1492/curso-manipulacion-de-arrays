const totals = [1, 2, 3, 4]

//Solución con for

let sum = 0

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element
}

console.log(sum);

//Solución con el método reduce

const answer = totals.reduce((sum, element) => sum + element, 0)
console.log('Solución con reduce', answer);