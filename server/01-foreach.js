//Las funcionalidades de forEach tranquilamente pueden ser realizadas por un ciclo for, pero esto toma muchas más lineas.

const letters = ['a', 'b', 'c']

//Ciclo for:

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}

//Método forEach:

letters.forEach(element => {
    console.log(element);
})
