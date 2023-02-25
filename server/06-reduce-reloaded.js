const numbers = [1, 3, 2, 3]

const answer = numbers.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }

    return obj
}, {})

console.log(answer);